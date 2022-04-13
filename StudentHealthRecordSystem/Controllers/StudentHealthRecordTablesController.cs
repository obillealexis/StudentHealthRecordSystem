using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DatabaseDriver.DATA;

namespace StudentHealthRecordSystem.Controllers
{
    public class StudentHealthRecordTablesController : Controller
    {
        private StudentHealthRecordDBEntities db = new StudentHealthRecordDBEntities();

        // GET: StudentHealthRecordTables
        public ActionResult AllHealthRecord()
        {
            if (Session["username"] == null)
            {
                return RedirectToAction("StartPage", "Login");
            }
            return View(db.StudentHealthRecordTables.ToList());
        }

        // GET: StudentHealthRecordTables/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StudentHealthRecordTable studentHealthRecordTable = db.StudentHealthRecordTables.Find(id);
            if (studentHealthRecordTable == null)
            {
                return HttpNotFound();
            }
            return View(studentHealthRecordTable);
        }

        // GET: StudentHealthRecordTables/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: StudentHealthRecordTables/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,FirstName,MiddleName,LastName,StudentNum,Sex,Age,Birthdate,Birthplace,Nationality,Religion,ContactNum,Address,FatherName,FatherOccupation,FatherContactNum,MotherName,MotherOccupation,MotherContactNum,GuardianName,GuardianOccupation,GuardianContactNum,HospitalofChoice,AddressofHospital,HospitalContactNum,NameofFamilyDoctor,Allergy,PastAsthma,Anemia,BleedingProblem,BehavioralProblem,HearingProblem,SpeechProblem,VisualProblem,RecurrentIndigestion,Jaundice,EatingDisorder,ChickenFox,DengueFever,ThypoidFever,Measles,Mumps,Pneumonia,PrimaryComplex,EarDischarge,Tonsilitis,Parasitism,Insomnias,HeartDisease,KidneyDisease,Convulsion,Epilepsy,PastDiabetes,Fainting,Fractures,Scolosis,Hospitalization,Operation,Cancer,CancerRelation,HeartProblem,HeartRelationProblem,HighBlood,HighBloodRelation,FamilyDiabetes,DiabetesRelation,KidneyProblem,KidneyProblemRelation,SeizureDisorder,SeizureDisorderRelation,Tubercolosis,TubercolosisRelation,FamilyAsthma,AsthmaRelation,BleedingDisorder,BleedingDisorderRelation,MentalDisorder,MentalDisorderRelation,Stroke,StrokeRelation,Obesity,ObesityRelation,Physical,PhysicalRelevantDetails,Sexual,SexualRelevantDetails,Verval,VervalRelevantDetails,AOOOGE,AOOOPH,Hernia,HerniaDate,Circumcision,CircumcisionDate,AOOOM,RegularCycle,Flow,Discomfort,HeadA,HeadB,HeadC,EyesA,EyesB,EyesC,ENTA,ENTB,ENTC,ENTD,ENTE,ENTF,ENTG,ENTH,ENTI,ENTJ,ENTK,ENTL,ENTM,ENTN,ENTO,NeckA,NeckB,HLA,HLB,HLC,HLD,HLE,HLF,HLG,HLH,HLI,HLJ,AbdomenA,AbdomenB,AbdomenC,AbdomenD,AbdomenE,AbdomenF,AbdomenG,AbdomenH,AbdomenI,AbdomenJ,AbdomenK,AbdomenL,BoneJointA,BoneJointB,BoneJointC,BoneJointD,BoneJointE,BoneJointF,BoneJointG,BoneJointH,BoneJointI,BoneJointJ,NervousSystemA,NervousSystemB,NervousSystemC,NervousSystemD,NervousSystemE,NervousSystemF,NervousSystemG,ChronicDiseasesA,ChronicDiseasesB,ChronicDiseasesC,ChronicDiseasesD,ChronicDiseasesE,ChronicDiseasesF,InfectiousDiseasesA,InfectiousDiseasesB,InfectiousDiseasesC,InfectiousDiseasesD,InfectiousDiseasesE,InfectiousDiseasesF,InfectiousDiseasesG,InfectiousDiseasesH,InfectiousDiseasesI,InfectiousDiseasesJ,InfectiousDiseasesK,MedicineA,MedicineB,MedicineC,MedicineD,MedicineE,MedicineF,MedicineG,MedicineH,MedicineI,UnfavorableA,UnfavorableB,UnfavorableC,UnfavorableD,UnfavorableE,UnfavorableF,HeadAAge,HeadBAge,HeadCAge,EyesAAge,EyesBAge,EyesCAge,ENTAAge,ENTBAge,ENTCAge,ENTDAge,ENTEAge,ENTFAge,ENTGAge,ENTHAge,ENTIAge,ENTJAge,ENTKAge,ENTLAge,ENTMAge,ENTNAge,ENTOAge,NeckAAge,NeckBAge,HLAAge,HLBAge,HLCAge,HLDAge,HLEAge,HLFAge,HLGAge,HLHAge,HLIAge,HLJAge,AbdomenAAge,AbdomenBAge,AbdomenCAge,AbdomenDAge,AbdomenEAge,AbdomenFAge,AbdomenGAge,AbdomenHAge,AbdomenIAge,AbdomenJAge,AbdomenKAge,AbdomenLAge,BoneJointAAge,BoneJointBAge,BoneJointCAge,BoneJointDAge,BoneJointEAge,BoneJointFAge,BoneJointGAge,BoneJointHAge,BoneJointIAge,BoneJointJAge,NervousSystemAAge,NervousSystemBAge,NervousSystemCAge,NervousSystemDAge,NervousSystemEAge,NervousSystemFAge,NervousSystemGAge,ChronicDiseasesAAge,ChronicDiseasesBAge,ChronicDiseasesCAge,ChronicDiseasesDAge,ChronicDiseasesEAge,ChronicDiseasesFAge,InfectiousDiseasesAAge,InfectiousDiseasesBAge,InfectiousDiseasesCAge,InfectiousDiseasesDAge,InfectiousDiseasesEAge,InfectiousDiseasesFAge,InfectiousDiseasesGAge,InfectiousDiseasesHAge,InfectiousDiseasesIAge,InfectiousDiseasesJAge,InfectiousDiseasesKAge,MedicineAAge,MedicineBAge,MedicineCAge,MedicineDAge,MedicineEAge,MedicineFAge,MedicineGAge,MedicineHAge,MedicineIAge,UnfavorableAAge,UnfavorableBAge,UnfavorableCAge,UnfavorableDAge,UnfavorableEAge,UnfavorableFAge,OMIOS1,OMIOS11,OMIOS12,OMIOS13,OMIOS2,OMIOSB22,OMIOS3,OMIOS33,OMIOS34,OMIOS35,OMIOS36,OMIOS4,OMIOS44,OMIOS5,OMIOS6,OMIOS66,ConcentName,ConsentRelationship")] StudentHealthRecordTable studentHealthRecordTable)
        {
            if (ModelState.IsValid)
            {
                db.StudentHealthRecordTables.Add(studentHealthRecordTable);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(studentHealthRecordTable);
        }

        // GET: StudentHealthRecordTables/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StudentHealthRecordTable studentHealthRecordTable = db.StudentHealthRecordTables.Find(id);
            if (studentHealthRecordTable == null)
            {
                return HttpNotFound();
            }
            return View(studentHealthRecordTable);
        }

        // POST: StudentHealthRecordTables/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,FirstName,MiddleName,LastName,StudentNum,Sex,Age,Birthdate,Birthplace,Nationality,Religion,ContactNum,Address,FatherName,FatherOccupation,FatherContactNum,MotherName,MotherOccupation,MotherContactNum,GuardianName,GuardianOccupation,GuardianContactNum,HospitalofChoice,AddressofHospital,HospitalContactNum,NameofFamilyDoctor,Allergy,PastAsthma,Anemia,BleedingProblem,BehavioralProblem,HearingProblem,SpeechProblem,VisualProblem,RecurrentIndigestion,Jaundice,EatingDisorder,ChickenFox,DengueFever,ThypoidFever,Measles,Mumps,Pneumonia,PrimaryComplex,EarDischarge,Tonsilitis,Parasitism,Insomnias,HeartDisease,KidneyDisease,Convulsion,Epilepsy,PastDiabetes,Fainting,Fractures,Scolosis,Hospitalization,Operation,Cancer,CancerRelation,HeartProblem,HeartRelationProblem,HighBlood,HighBloodRelation,FamilyDiabetes,DiabetesRelation,KidneyProblem,KidneyProblemRelation,SeizureDisorder,SeizureDisorderRelation,Tubercolosis,TubercolosisRelation,FamilyAsthma,AsthmaRelation,BleedingDisorder,BleedingDisorderRelation,MentalDisorder,MentalDisorderRelation,Stroke,StrokeRelation,Obesity,ObesityRelation,Physical,PhysicalRelevantDetails,Sexual,SexualRelevantDetails,Verval,VervalRelevantDetails,AOOOGE,AOOOPH,Hernia,HerniaDate,Circumcision,CircumcisionDate,AOOOM,RegularCycle,Flow,Discomfort,HeadA,HeadB,HeadC,EyesA,EyesB,EyesC,ENTA,ENTB,ENTC,ENTD,ENTE,ENTF,ENTG,ENTH,ENTI,ENTJ,ENTK,ENTL,ENTM,ENTN,ENTO,NeckA,NeckB,HLA,HLB,HLC,HLD,HLE,HLF,HLG,HLH,HLI,HLJ,AbdomenA,AbdomenB,AbdomenC,AbdomenD,AbdomenE,AbdomenF,AbdomenG,AbdomenH,AbdomenI,AbdomenJ,AbdomenK,AbdomenL,BoneJointA,BoneJointB,BoneJointC,BoneJointD,BoneJointE,BoneJointF,BoneJointG,BoneJointH,BoneJointI,BoneJointJ,NervousSystemA,NervousSystemB,NervousSystemC,NervousSystemD,NervousSystemE,NervousSystemF,NervousSystemG,ChronicDiseasesA,ChronicDiseasesB,ChronicDiseasesC,ChronicDiseasesD,ChronicDiseasesE,ChronicDiseasesF,InfectiousDiseasesA,InfectiousDiseasesB,InfectiousDiseasesC,InfectiousDiseasesD,InfectiousDiseasesE,InfectiousDiseasesF,InfectiousDiseasesG,InfectiousDiseasesH,InfectiousDiseasesI,InfectiousDiseasesJ,InfectiousDiseasesK,MedicineA,MedicineB,MedicineC,MedicineD,MedicineE,MedicineF,MedicineG,MedicineH,MedicineI,UnfavorableA,UnfavorableB,UnfavorableC,UnfavorableD,UnfavorableE,UnfavorableF,HeadAAge,HeadBAge,HeadCAge,EyesAAge,EyesBAge,EyesCAge,ENTAAge,ENTBAge,ENTCAge,ENTDAge,ENTEAge,ENTFAge,ENTGAge,ENTHAge,ENTIAge,ENTJAge,ENTKAge,ENTLAge,ENTMAge,ENTNAge,ENTOAge,NeckAAge,NeckBAge,HLAAge,HLBAge,HLCAge,HLDAge,HLEAge,HLFAge,HLGAge,HLHAge,HLIAge,HLJAge,AbdomenAAge,AbdomenBAge,AbdomenCAge,AbdomenDAge,AbdomenEAge,AbdomenFAge,AbdomenGAge,AbdomenHAge,AbdomenIAge,AbdomenJAge,AbdomenKAge,AbdomenLAge,BoneJointAAge,BoneJointBAge,BoneJointCAge,BoneJointDAge,BoneJointEAge,BoneJointFAge,BoneJointGAge,BoneJointHAge,BoneJointIAge,BoneJointJAge,NervousSystemAAge,NervousSystemBAge,NervousSystemCAge,NervousSystemDAge,NervousSystemEAge,NervousSystemFAge,NervousSystemGAge,ChronicDiseasesAAge,ChronicDiseasesBAge,ChronicDiseasesCAge,ChronicDiseasesDAge,ChronicDiseasesEAge,ChronicDiseasesFAge,InfectiousDiseasesAAge,InfectiousDiseasesBAge,InfectiousDiseasesCAge,InfectiousDiseasesDAge,InfectiousDiseasesEAge,InfectiousDiseasesFAge,InfectiousDiseasesGAge,InfectiousDiseasesHAge,InfectiousDiseasesIAge,InfectiousDiseasesJAge,InfectiousDiseasesKAge,MedicineAAge,MedicineBAge,MedicineCAge,MedicineDAge,MedicineEAge,MedicineFAge,MedicineGAge,MedicineHAge,MedicineIAge,UnfavorableAAge,UnfavorableBAge,UnfavorableCAge,UnfavorableDAge,UnfavorableEAge,UnfavorableFAge,OMIOS1,OMIOS11,OMIOS12,OMIOS13,OMIOS2,OMIOSB22,OMIOS3,OMIOS33,OMIOS34,OMIOS35,OMIOS36,OMIOS4,OMIOS44,OMIOS5,OMIOS6,OMIOS66,ConcentName,ConsentRelationship")] StudentHealthRecordTable studentHealthRecordTable)
        {
            if (ModelState.IsValid)
            {
                db.Entry(studentHealthRecordTable).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("AllHealthRecord");
            }
            return View(studentHealthRecordTable);
        }

        // GET: StudentHealthRecordTables/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StudentHealthRecordTable studentHealthRecordTable = db.StudentHealthRecordTables.Find(id);
            if (studentHealthRecordTable == null)
            {
                return HttpNotFound();
            }
            return View(studentHealthRecordTable);
        }

        // POST: StudentHealthRecordTables/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            StudentHealthRecordTable studentHealthRecordTable = db.StudentHealthRecordTables.Find(id);
            db.StudentHealthRecordTables.Remove(studentHealthRecordTable);
            db.SaveChanges();
            return RedirectToAction("AllHealthRecord");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
