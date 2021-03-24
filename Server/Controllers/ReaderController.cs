using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Classes;

namespace Server.Controllers
{
    [Produces("application/json")]
    [Route("api/reader")]
    public class ReaderController : Controller
    {

        private IHostingEnvironment hostingEnvironment;

        public ReaderController(IHostingEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment;
        }

        [Authorize]
        [HttpPost("convert"), DisableRequestSizeLimit]
        public IActionResult Convert()
        {
            try
            {
                string[] data;
                var file = Request.Form.Files[0];

                var filePath = Path.GetTempFileName();

                if (file == null) throw new Exception("File is null");
                if (file.Length == 0) throw new Exception("File is empty");

                using (Stream stream = file.OpenReadStream())
                {
                    using (BinaryReader reader = new BinaryReader(stream))
                    {
                        data = Reader.GetData(reader);
                    }
                }

                return Json(data);
            }
            catch (System.Exception ex)
            {
                return Json(new string[] { "Exception", ex.Message });
            }
        }


        [Authorize]
        [HttpPost("changedata"), DisableRequestSizeLimit]
        public IActionResult ChangeData()
        {
            try
            {
                string[] data;
                var file = Request.Form.Files[0];

                var filePath = Path.GetTempFileName();

                if (file == null) throw new Exception("File is null");
                if (file.Length == 0) throw new Exception("File is empty");

                using (Stream stream = file.OpenReadStream())
                {
                    using (BinaryReader reader = new BinaryReader(stream))
                    {
                        data = Reader.ChangeData(reader);
                    }
                }

                return Json(data);
            }
            catch (System.Exception ex)
            {
                return Json(new string[] { "Exception", ex.Message });
            }
        }

        [Authorize]
        [HttpGet("Get/{id}")]
        public IActionResult Get(int id)
        {
            string[] data;

            string folderName = "Upload";
            string webRootPath = hostingEnvironment.WebRootPath;
            string path = Path.Combine(webRootPath, folderName);
            try
            {
                using (Stream stream = System.IO.File.OpenRead(Path.Combine(path, id + ".dat")))
                {
                    try
                    {
                        using (BinaryReader reader = new BinaryReader(stream))
                        {
                            data = Reader.GetData(reader);
                        }
                    }
                    catch(Exception ex)
                    {
                        return Json(new string[] { "Exception", ex.Message });
                    }
                }
            }
            catch(Exception ex)
            {
                return Json(new string[] { "Exception", "Немає ЕКГ пацієнта!" });
            }

            return Json(data);
        }
    }
}