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
    public class PublicHealthRecordTablesController : Controller
    {
        private StudentHealthRecordDBEntities db = new StudentHealthRecordDBEntities();

        // GET: PublicHealthRecordTables
        public ActionResult Pending()
        {
            return View(db.PublicHealthRecordTables.ToList());
        }

        // GET: PublicHealthRecordTables/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PublicHealthRecordTable publicHealthRecordTable = db.PublicHealthRecordTables.Find(id);
            if (publicHealthRecordTable == null)
            {
                return HttpNotFound();
            }
            return View(publicHealthRecordTable);
        }

        // GET: PublicHealthRecordTables/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PublicHealthRecordTables/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,FirstName,MiddleName,LastName,StudentNum,Sex,Birthdate,Birthplace,Nationality,Religion,ContactNum,Address,FatherName,FatherOccupation,FatherContactNum,MotherName,MotherOccupation,MotherContactNum,GuardianName,GuardianOccupation,GuardianContactNum,HospitalofChoice,AddressofHospital,HospitalContactNum,NameofFamilyDoctor,Allergy,PastAsthma,Anemia,BleedingProblem,BehavioralProblem,HearingProblem,SpeechProblem,VisualProblem,RecurrentIndigestion,Jaundice,EatingDisorder,ChickenFox,DengueFever,ThypoidFever,Measles,Mumps,Pneumonia,PrimaryComplex,EarDischarge,Tonsilitis,Parasitism,Insomnias,HeartDisease,KidneyDisease,Convulsion,Epilepsy,PastDiabetes,Fainting,Fractures,Scolosis,Hospitalization,Operation,Cancer,CancerRelation,HeartProblem,HeartRelationProblem,HighBlood,HighBloodRelation,FamilyDiabetes,DiabetesRelation,KidneyProblem,KidneyProblemRelation,SeizureDisorder,SeizureDisorderRelation,Tubercolosis,TubercolosisRelation,FamilyAsthma,AsthmaRelation,BleedingDisorder,BleedingDisorderRelation,MentalDisorder,MentalDisorderRelation,Stroke,StrokeRelation,Obesity,ObesityRelation,Physical,PhysicalRelevantDetails,Sexual,SexualRelevantDetails,Verval,VervalRelevantDetails,AOOOGE,AOOOPH,Hernia,HerniaDate,Circumcision,CircumcisionDate,AOOOM,RegularCycle,Flow,Discomfort,HeadA,HeadB,HeadC,EyesA,EyesB,EyesC,ENTA,ENTB,ENTC,ENTD,ENTE,ENTF,ENTG,ENTH,ENTI,ENTJ,ENTK,ENTL,ENTM,ENTN,ENTO,NeckA,NeckB,HLA,HLB,HLC,HLD,HLE,HLF,HLG,HLH,HLI,HLJ,AbdomenA,AbdomenB,AbdomenC,AbdomenD,AbdomenE,AbdomenF,AbdomenG,AbdomenH,AbdomenI,AbdomenJ,AbdomenK,AbdomenL,BoneJointA,BoneJointB,BoneJointC,BoneJointD,BoneJointE,BoneJointF,BoneJointG,BoneJointH,BoneJointI,BoneJointJ,NervousSystemA,NervousSystemB,NervousSystemC,NervousSystemD,NervousSystemE,NervousSystemF,NervousSystemG,ChronicDiseasesA,ChronicDiseasesB,ChronicDiseasesC,ChronicDiseasesD,ChronicDiseasesE,ChronicDiseasesF,InfectiousDiseasesA,InfectiousDiseasesB,InfectiousDiseasesC,InfectiousDiseasesD,InfectiousDiseasesE,InfectiousDiseasesF,InfectiousDiseasesG,InfectiousDiseasesH,InfectiousDiseasesI,InfectiousDiseasesJ,InfectiousDiseasesK,MedicineA,MedicineB,MedicineC,MedicineD,MedicineE,MedicineF,MedicineG,MedicineH,MedicineI,UnfavorableA,UnfavorableB,UnfavorableC,UnfavorableD,UnfavorableE,UnfavorableF,HeadAAge,HeadBAge,HeadCAge,EyesAAge,EyesBAge,EyesCAge,ENTAAge,ENTBAge,ENTCAge,ENTDAge,ENTEAge,ENTFAge,ENTGAge,ENTHAge,ENTIAge,ENTJAge,ENTKAge,ENTLAge,ENTMAge,ENTNAge,ENTOAge,NeckAAge,NeckBAge,HLAAge,HLBAge,HLCAge,HLDAge,HLEAge,HLFAge,HLGAge,HLHAge,HLIAge,HLJAge,AbdomenAAge,AbdomenBAge,AbdomenCAge,AbdomenDAge,AbdomenEAge,AbdomenFAge,AbdomenGAge,AbdomenHAge,AbdomenIAge,AbdomenJAge,AbdomenKAge,AbdomenLAge,BoneJointAAge,BoneJointBAge,BoneJointCAge,BoneJointDAge,BoneJointEAge,BoneJointFAge,BoneJointGAge,BoneJointHAge,BoneJointIAge,BoneJointJAge,NervousSystemAAge,NervousSystemBAge,NervousSystemCAge,NervousSystemDAge,NervousSystemEAge,NervousSystemFAge,NervousSystemGAge,ChronicDiseasesAAge,ChronicDiseasesBAge,ChronicDiseasesCAge,ChronicDiseasesDAge,ChronicDiseasesEAge,ChronicDiseasesFAge,InfectiousDiseasesAAge,InfectiousDiseasesBAge,InfectiousDiseasesCAge,InfectiousDiseasesDAge,InfectiousDiseasesEAge,InfectiousDiseasesFAge,InfectiousDiseasesGAge,InfectiousDiseasesHAge,InfectiousDiseasesIAge,InfectiousDiseasesJAge,InfectiousDiseasesKAge,MedicineAAge,MedicineBAge,MedicineCAge,MedicineDAge,MedicineEAge,MedicineFAge,MedicineGAge,MedicineHAge,MedicineIAge,UnfavorableAAge,UnfavorableBAge,UnfavorableCAge,UnfavorableDAge,UnfavorableEAge,UnfavorableFAge,OMIOS1,OMIOS11,OMIOS12,OMIOS13,OMIOS2,OMIOSB22,OMIOS3,OMIOS33,OMIOS34,OMIOS35,OMIOS36,OMIOS4,OMIOS44,OMIOS5,OMIOS6,OMIOS66,ConcentName,ConsentRelationship")] PublicHealthRecordTable publicHealthRecordTable)
        {
            if (ModelState.IsValid)
            {
                db.PublicHealthRecordTables.Add(publicHealthRecordTable);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(publicHealthRecordTable);
        }

        // GET: PublicHealthRecordTables/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PublicHealthRecordTable publicHealthRecordTable = db.PublicHealthRecordTables.Find(id);
            if (publicHealthRecordTable == null)
            {
                return HttpNotFound();
            }
            return View(publicHealthRecordTable);
        }

        // POST: PublicHealthRecordTables/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,FirstName,MiddleName,LastName,StudentNum,Sex,Birthdate,Birthplace,Nationality,Religion,ContactNum,Address,FatherName,FatherOccupation,FatherContactNum,MotherName,MotherOccupation,MotherContactNum,GuardianName,GuardianOccupation,GuardianContactNum,HospitalofChoice,AddressofHospital,HospitalContactNum,NameofFamilyDoctor,Allergy,PastAsthma,Anemia,BleedingProblem,BehavioralProblem,HearingProblem,SpeechProblem,VisualProblem,RecurrentIndigestion,Jaundice,EatingDisorder,ChickenFox,DengueFever,ThypoidFever,Measles,Mumps,Pneumonia,PrimaryComplex,EarDischarge,Tonsilitis,Parasitism,Insomnias,HeartDisease,KidneyDisease,Convulsion,Epilepsy,PastDiabetes,Fainting,Fractures,Scolosis,Hospitalization,Operation,Cancer,CancerRelation,HeartProblem,HeartRelationProblem,HighBlood,HighBloodRelation,FamilyDiabetes,DiabetesRelation,KidneyProblem,KidneyProblemRelation,SeizureDisorder,SeizureDisorderRelation,Tubercolosis,TubercolosisRelation,FamilyAsthma,AsthmaRelation,BleedingDisorder,BleedingDisorderRelation,MentalDisorder,MentalDisorderRelation,Stroke,StrokeRelation,Obesity,ObesityRelation,Physical,PhysicalRelevantDetails,Sexual,SexualRelevantDetails,Verval,VervalRelevantDetails,AOOOGE,AOOOPH,Hernia,HerniaDate,Circumcision,CircumcisionDate,AOOOM,RegularCycle,Flow,Discomfort,HeadA,HeadB,HeadC,EyesA,EyesB,EyesC,ENTA,ENTB,ENTC,ENTD,ENTE,ENTF,ENTG,ENTH,ENTI,ENTJ,ENTK,ENTL,ENTM,ENTN,ENTO,NeckA,NeckB,HLA,HLB,HLC,HLD,HLE,HLF,HLG,HLH,HLI,HLJ,AbdomenA,AbdomenB,AbdomenC,AbdomenD,AbdomenE,AbdomenF,AbdomenG,AbdomenH,AbdomenI,AbdomenJ,AbdomenK,AbdomenL,BoneJointA,BoneJointB,BoneJointC,BoneJointD,BoneJointE,BoneJointF,BoneJointG,BoneJointH,BoneJointI,BoneJointJ,NervousSystemA,NervousSystemB,NervousSystemC,NervousSystemD,NervousSystemE,NervousSystemF,NervousSystemG,ChronicDiseasesA,ChronicDiseasesB,ChronicDiseasesC,ChronicDiseasesD,ChronicDiseasesE,ChronicDiseasesF,InfectiousDiseasesA,InfectiousDiseasesB,InfectiousDiseasesC,InfectiousDiseasesD,InfectiousDiseasesE,InfectiousDiseasesF,InfectiousDiseasesG,InfectiousDiseasesH,InfectiousDiseasesI,InfectiousDiseasesJ,InfectiousDiseasesK,MedicineA,MedicineB,MedicineC,MedicineD,MedicineE,MedicineF,MedicineG,MedicineH,MedicineI,UnfavorableA,UnfavorableB,UnfavorableC,UnfavorableD,UnfavorableE,UnfavorableF,HeadAAge,HeadBAge,HeadCAge,EyesAAge,EyesBAge,EyesCAge,ENTAAge,ENTBAge,ENTCAge,ENTDAge,ENTEAge,ENTFAge,ENTGAge,ENTHAge,ENTIAge,ENTJAge,ENTKAge,ENTLAge,ENTMAge,ENTNAge,ENTOAge,NeckAAge,NeckBAge,HLAAge,HLBAge,HLCAge,HLDAge,HLEAge,HLFAge,HLGAge,HLHAge,HLIAge,HLJAge,AbdomenAAge,AbdomenBAge,AbdomenCAge,AbdomenDAge,AbdomenEAge,AbdomenFAge,AbdomenGAge,AbdomenHAge,AbdomenIAge,AbdomenJAge,AbdomenKAge,AbdomenLAge,BoneJointAAge,BoneJointBAge,BoneJointCAge,BoneJointDAge,BoneJointEAge,BoneJointFAge,BoneJointGAge,BoneJointHAge,BoneJointIAge,BoneJointJAge,NervousSystemAAge,NervousSystemBAge,NervousSystemCAge,NervousSystemDAge,NervousSystemEAge,NervousSystemFAge,NervousSystemGAge,ChronicDiseasesAAge,ChronicDiseasesBAge,ChronicDiseasesCAge,ChronicDiseasesDAge,ChronicDiseasesEAge,ChronicDiseasesFAge,InfectiousDiseasesAAge,InfectiousDiseasesBAge,InfectiousDiseasesCAge,InfectiousDiseasesDAge,InfectiousDiseasesEAge,InfectiousDiseasesFAge,InfectiousDiseasesGAge,InfectiousDiseasesHAge,InfectiousDiseasesIAge,InfectiousDiseasesJAge,InfectiousDiseasesKAge,MedicineAAge,MedicineBAge,MedicineCAge,MedicineDAge,MedicineEAge,MedicineFAge,MedicineGAge,MedicineHAge,MedicineIAge,UnfavorableAAge,UnfavorableBAge,UnfavorableCAge,UnfavorableDAge,UnfavorableEAge,UnfavorableFAge,OMIOS1,OMIOS11,OMIOS12,OMIOS13,OMIOS2,OMIOSB22,OMIOS3,OMIOS33,OMIOS34,OMIOS35,OMIOS36,OMIOS4,OMIOS44,OMIOS5,OMIOS6,OMIOS66,ConcentName,ConsentRelationship")] PublicHealthRecordTable publicHealthRecordTable)
        {
            if (ModelState.IsValid)
            {
                db.Entry(publicHealthRecordTable).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(publicHealthRecordTable);
        }

        // GET: PublicHealthRecordTables/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PublicHealthRecordTable publicHealthRecordTable = db.PublicHealthRecordTables.Find(id);
            if (publicHealthRecordTable == null)
            {
                return HttpNotFound();
            }
            return View(publicHealthRecordTable);
        }

        // POST: PublicHealthRecordTables/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            PublicHealthRecordTable publicHealthRecordTable = db.PublicHealthRecordTables.Find(id);
            db.PublicHealthRecordTables.Remove(publicHealthRecordTable);
            db.SaveChanges();
            return RedirectToAction("Pending");
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
