using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Server.Classes;
using Server.Data;
using Server.Data.Entity;
using Server.Models.AccountViewModel;

namespace Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Patients")]
    public class PatiensController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;

        private readonly ApplicationDbContext db;
        private IHostingEnvironment hostingEnvironment;
        static private byte[] fileBytes;
        static private string path { get; set; }

        public PatiensController(ApplicationDbContext _db,
            IHostingEnvironment hostingEnvironment,
            UserManager<ApplicationUser> userManager)
        {
            db = _db;
            this.hostingEnvironment = hostingEnvironment;
            this.userManager = userManager;
        }
        [Authorize]
        [HttpPost("Add"), DisableRequestSizeLimit]
        public async Task<IActionResult> Add([FromBody]Patient model)
        {
            Console.WriteLine($"------------------------------------{model.Id}");
            try
            {
                if (ModelState.IsValid)
                {
                    var userName = userManager.GetUserName(User);
                    Patient patient = new Patient()
                    {
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        MiddleName = model.MiddleName,
                        Age = model.Age,
                        Weight = model.Weight,
                        Height = model.Height,
                        Sex = model.Sex,
                        PhoneNumber = model.PhoneNumber,
                        HomeNumber = model.HomeNumber,
                        Email = model.Email,
                        Condition = model.Condition,
                        Doctor = userName
                    };
                    Console.WriteLine($"------------------------------------{patient.Id}");
                    var data = await db.Patient.AddAsync(patient);
                    await db.SaveChangesAsync();

                    if (path != null)
                    {
                        using (FileStream fstream = new FileStream(Path.Combine(path, patient.Id + ".dat"), FileMode.OpenOrCreate))
                        {
                            // запись массива байтов в файл
                            await fstream.WriteAsync(fileBytes, 0, fileBytes.Length);
                            path = null;
                            fileBytes = null;
                        }
                    }


                    return Json("Created!");

                }
                else
                    return Json(new string[] { "Exception", "Modal exception" });
            }
            catch (Exception ex)
            {
                return Json(new string[] { "Exception", ex.Message });
            }
        }
        [Authorize]
        [HttpPost("Change")]
        public async Task<IActionResult> Change([FromBody]Patient model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var userName = userManager.GetUserName(User);
                    model.Doctor = userName;
                    try
                    {
                        var data = db.Patient
                            .Where(f => f.Id == model.Id)
                            .FirstOrDefault();

                        data.FirstName = model.FirstName;
                        data.LastName = model.LastName;
                        data.MiddleName = model.MiddleName;
                        data.Age = model.Age;
                        data.Weight = model.Weight;
                        data.Height = model.Height;
                        data.Sex = model.Sex;
                        data.PhoneNumber = model.PhoneNumber;
                        data.HomeNumber = model.HomeNumber;
                        data.Email = model.Email;
                        data.Condition = model.Condition;

                        if (path != null)
                        {
                            System.IO.File.Delete(Path.Combine(path, model.Id + ".dat"));
                            using (FileStream fstream = new FileStream(Path.Combine(path, model.Id + ".dat"), FileMode.OpenOrCreate))
                            {
                                // запись массива байтов в файл
                                await fstream.WriteAsync(fileBytes, 0, fileBytes.Length);
                                path = null;
                                fileBytes = null;
                            }
                        }

                        await db.SaveChangesAsync();
                    }
                    catch (Exception ex)
                    {
                        return Json(new string[] { "Exception", ex.Message });
                    }


                    return Json("Created!");

                }
                else
                    return Json(new string[] { "Exception", "Modal exception" });
            }
            catch (Exception ex)
            {
                return Json(new string[] { "Exception", ex.Message });
            }
        }
        [Authorize]
        [HttpPost("UploadFile"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadFile()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var file = Request.Form.Files[0];

                    if(Path.GetExtension(file.FileName) != ".dat")
                    {
                        return Json(new string[] { "Exception", "Тільки файл з розширенням dat!" });
                    }
                    string folderName = "Upload";
                    string webRootPath = hostingEnvironment.WebRootPath;
                    string newPath = Path.Combine(webRootPath, folderName);

                    if (!Directory.Exists(newPath))
                    {
                        Directory.CreateDirectory(newPath);
                    }
                    if (file.Length > 0)
                    {
                        string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        string fullPath = Path.Combine(newPath, fileName);
                        path = newPath;
                        using (var ms = new MemoryStream())
                        {
                            await file.CopyToAsync(ms);
                            fileBytes = ms.ToArray();
                        }
                    }
                    else
                        return Json(new string[] { "Exception", "Файл порожній!" });

                    return Json("Created!");
                }
                else
                    return Json(new string[] { "Exception", "Modal exception" });
            }
            catch (Exception ex)
            {
                return Json(new string[] { "Exception", ex.Message });
            }
        }
        [Authorize]
        [HttpGet("Get")]
        public IActionResult Get()
        {
            var userName = userManager.GetUserName(User);
            var patients = db.Patient.Where(f => f.Doctor.Contains(userName)).ToList();
            return Json(patients);
        }
        [Authorize]
        [HttpGet("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            string folderName = "Upload";
            string webRootPath = hostingEnvironment.WebRootPath;
            string path = Path.Combine(webRootPath, folderName);

            var patient = db.Patient.First(f => f.Id == id);
            db.Patient.Remove(patient);
            db.SaveChanges();

            if(System.IO.File.Exists(Path.Combine(path, id + ".dat")))
                System.IO.File.Delete(Path.Combine(path, id + ".dat"));

            return Json(new string[] { "Exception", id.ToString() });
        }
    }
}