using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Data;
using Server.Models;
using Server.Models.AccountViewModel;

namespace Server.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private readonly ApplicationDbContext db;

        public UserController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<AccountController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }

        [HttpGet("isLoggedIn")]
        public async Task<bool> isLoggedIn()
        {
            var user = await _userManager.GetUserAsync(User);

            if (user != null)
                return true;
            else
                return false;
        }

        [HttpGet("data")]
        public async Task<IActionResult> data()
        {
            string userId;
            ApplicationUser data;
            try
            {
                userId = _userManager.GetUserId(User);
                data = await _userManager.FindByIdAsync(userId);
            }catch(Exception ex)
            {
                return Json(ex.Message + " " + ex.StackTrace);
            }
            
            UserDataViewModel model = new UserDataViewModel
            {
                Id = data.Id,
                UserName = data.UserName,
                FirstName = data.FirstName,
                LastName = data.LastName,
                PhoneNumber = data.PhoneNumber
            };

            return Json(data);
        }
    }
}