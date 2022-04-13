using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentHealthRecordSystem.Models
{
    public class PendingStudentHealthRecordModel
    {
        public int Id { get; set; }
        public string StudentNum { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Middlename { get; set; }
    }
}