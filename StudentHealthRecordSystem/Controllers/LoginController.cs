using DatabaseDriver.DATA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentHealthRecordSystem.Controllers
{
    public class LoginController : Controller
    {
        StudentHealthRecordDBEntities db = new StudentHealthRecordDBEntities();
        // GET: Login
        public ActionResult StartPage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(user s)
        {
            if (ModelState.IsValid == true)
            {
                var credentials = db.users.Where(model => model.username == s.username && model.password == s.password).FirstOrDefault();
                if (credentials == null)
                {
                    ViewBag.ErrorMessage = "Login Failed";
                    return View();
                }
                else
                {
                    Session["username"] = s.username;
                    return RedirectToAction("Index", "Home");
                }
            }

            return View();
        }

        public ActionResult Logout()
        {
            Session.Abandon();
            return RedirectToAction("StartPage", "Login");
        }
        public ActionResult Reset()
        {
            ModelState.Clear();
            return RedirectToAction("Index", "Login");
        }
    }
}