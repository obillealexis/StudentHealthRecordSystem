using BusinessLogic;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentHealthRecordSystem.Controllers
{
    public class PublicHealthRecordController : Controller
    {
        // GET: PublicHealthRecord
        public ActionResult Public()
        {
            return View();
        }
        public void PublicSaveHealthRecord(PublicHealthRecordModel _rec)
        {
            PublicHealthRecordManager _PublicHealthRecordManager = new PublicHealthRecordManager();
            _PublicHealthRecordManager.PublicSaveHealthRecord(_rec);
        }
    }
}