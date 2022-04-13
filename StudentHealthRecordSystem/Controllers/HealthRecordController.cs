using BusinessLogic;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentHealthRecordSystem.Controllers
{
    public class HealthRecordController : Controller
    {
        // GET: HeathRecord
        public ActionResult Index()
        {
            if (Session["username"] == null)
            {
                return RedirectToAction("StartPage", "Login");
            }
            return View();
        }

        

        public ActionResult HealthRecord()
        {
            if (Session["username"] == null)
            {
                return RedirectToAction("StartPage", "Login");
            }
            return View();
        }


        public void SaveHealthRecord(HealthRecordModel _rec)
        {
            HealthRecordManager _HealthRecordManager = new HealthRecordManager();
            _HealthRecordManager.SaveHealthRecord(_rec);
        }
    }
}