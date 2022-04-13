using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentHealthRecordSystem.Models
{
    public class Dropdown
    {
        public string Sex { get; set; }
        
    }
    public enum SexList
    {
        Male,
        Female
    }
}