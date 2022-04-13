function PublicSaveHealthRecord() {
    $.ajax({
        url: "/PublicHealthRecord/PublicSaveHealthRecord",
        type: "Post",
        contentType: "application/json",
        datatype: "json",
        data: JSON.stringify({
            'ID': $("#ID").val(),
            'FirstName': $("#FirstName").val(),
            'MiddleName': $("#MiddleName").val(),
            'LastName': $("#LastName").val(),
            'StudentNum': $("#StudentNum").val(),
            'Sex': $("#Sex").val(),
            'Age': $("#Age").val(),
            'Birthdate': $("#Birthdate").val(),
            'Birthplace': $("#Birthplace").val(),
            'Nationality': $("#Nationality").val(),
            'Religion': $("#Religion").val(),
            'ContactNum': $("#ContactNum").val(),
            'Address': $("#Address").val(),
            'FatherName': $("#FatherName").val(),
            'FatherOccupation': $("#FatherOccupation").val(),
            'FatherContactNum': $("#FatherContactNum").val(),
            'MotherName': $("#MotherName").val(),
            'MotherOccupation': $("#MotherOccupation").val(),
            'MotherContactNum': $("#MotherContactNum").val(),
            'GuardianName': $("#GuardianName").val(),
            'GuardianOccupation': $("#GuardianOccupation").val(),
            'GuardianContactNum': $("#GuardianContactNum").val(),
            'HospitalofChoice': $("#HospitalofChoice").val(),
            'AddressofHospital': $("#AddressofHospital").val(),
            'HospitalContactNum': $("#HospitalContactNum").val(),
            'NameofFamilyDoctor': $("#NameofFamilyDoctor").val(),
            'Allergy': $("#Allergy").val(),
            'PastAsthma': $("#PastAsthma").val(),
            'Anemia': $("#Anemia").val(),
            'BleedingProblem': $("#BleedingProblem").val(),
            'BehavioralProblem': $("#BehavioralProblem").val(),
            'HearingProblem': $("#HearingProblem").val(),
            'SpeechProblem': $("#SpeechProblem").val(),
            'VisualProblem': $("#VisualProblem").val(),
            'RecurrentIndigestion': $("#RecurrentIndigestion").val(),
            'Jaundice': $("#Jaundice").val(),
            'EatingDisorder': $("#EatingDisorder").val(),
            'ChickenFox': $("#ChickenFox").val(),
            'DengueFever': $("#DengueFever").val(),
            'ThypoidFever': $("#ThypoidFever").val(),
            'Measles': $("#Measles").val(),
            'Mumps': $("#Mumps").val(),
            'Pneumonia': $("#Pneumonia").val(),
            'PrimaryComplex': $("#PrimaryComplex").val(),
            'EarDischarge': $("#EarDischarge").val(),
            'Tonsilitis': $("#Tonsilitis").val(),
            'Parasitism': $("#Parasitism").val(),
            'Insomnias': $("#Insomnias").val(),
            'HeartDisease': $("#HeartDisease").val(),
            'KidneyDisease': $("#KidneyDisease").val(),
            'Convulsion': $("#Convulsion").val(),
            'Epilepsy': $("#Epilepsy").val(),
            'PastDiabetes': $("#PastDiabetes").val(),
            'Fainting': $("#Fainting").val(),
            'Fractures': $("#Fractures").val(),
            'Scolosis': $("#Scolosis").val(),
            'Hospitalization': $("#Hospitalization").val(),
            'Operation': $("#Operation").val(),
            'Cancer': $("#Cancer").val(),
            'CancerRelation': $("#CancerRelation").val(),
            'HeartProblem': $("#HeartProblem").val(),
            'HeartRelationProblem': $("#HeartRelationProblem").val(),
            'HighBlood': $("#HighBlood").val(),
            'HighBloodRelation': $("#HighBloodRelation").val(),
            'FamilyDiabetes': $("#FamilyDiabetes").val(),
            'DiabetesRelation': $("#DiabetesRelation").val(),
            'KidneyProblem': $("#KidneyProblem").val(),
            'KidneyProblemRelation': $("#KidneyProblemRelation").val(),
            'SeizureDisorder': $("#SeizureDisorder").val(),
            'SeizureDisorderRelation': $("#SeizureDisorderRelation").val(),
            'Tubercolosis': $("#Tubercolosis").val(),
            'TubercolosisRelation': $("#TubercolosisRelation").val(),
            'FamilyAsthma': $("#FamilyAsthma").val(),
            'AsthmaRelation': $("#AsthmaRelation").val(),
            'BleedingDisorder': $("#BleedingDisorder").val(),
            'BleedingDisorderRelation': $("#BleedingDisorderRelation").val(),
            'MentalDisorder': $("#MentalDisorder").val(),
            'MentalDisorderRelation': $("#MentalDisorderRelation").val(),
            'Stroke': $("#Stroke").val(),
            'StrokeRelation': $("#StrokeRelation").val(),
            'Obesity': $("#Obesity").val(),
            'ObesityRelation': $("#ObesityRelation").val(),
            'Physical': $("#Physical").val(),
            'PhysicalRelevantDetails': $("#PhysicalRelevantDetails").val(),
            'Sexual': $("#Sexual").val(),
            'SexualRelevantDetails': $("#SexualRelevantDetails").val(),
            'Verval': $("#Verval").val(),
            'VervalRelevantDetails': $("#VervalRelevantDetails").val(),
            'AOOOGE': $("#AOOOGE").val(),
            'AOOOPH': $("#AOOOPH").val(),
            'Hernia': $("#Hernia").val(),
            'HerniaDate': $("#HerniaDate").val(),
            'Circumcision': $("#Circumcision").val(),
            'CircumcisionDate': $("#CircumcisionDate").val(),
            'AOOOM': $("#AOOOM").val(),
            'RegularCycle': $("#RegularCycle").val(),
            'Flow': $("#Flow").val(),
            'Discomfort': $("#Discomfort").val(),
            'HeadA': $("#HeadA").val(),
            'HeadB': $("#HeadB").val(),
            'HeadC': $("#HeadC").val(),
            'EyesA': $("#EyesA").val(),
            'EyesB': $("#EyesB").val(),
            'EyesC': $("#EyesC  ").val(),
            'ENTA': $("#ENTA").val(),
            'ENTB': $("#ENTB").val(),
            'ENTC': $("#ENTC").val(),
            'ENTD': $("#ENTD").val(),
            'ENTE': $("#ENTE").val(),
            'ENTF': $("#ENTF").val(),
            'ENTG': $("#ENTG").val(),
            'ENTH': $("#ENTH").val(),
            'ENTI': $("#ENTI").val(),
            'ENTJ': $("#ENTJ").val(),
            'ENTK': $("#ENTK").val(),
            'ENTL': $("#ENTL").val(),
            'ENTM': $("#ENTM").val(),
            'ENTN': $("#ENTN").val(),
            'ENTO': $("#ENTO").val(),
            'NeckA': $("#NeckA").val(),
            'NeckB': $("#NeckB").val(),
            'HLA': $("#HLA").val(),
            'HLB': $("#HLB").val(),
            'HLC': $("#HLC").val(),
            'HLD': $("#HLD").val(),
            'HLE': $("#HLE").val(),
            'HLF': $("#HLF").val(),
            'HLG': $("#HLG").val(),
            'HLH': $("#HLH").val(),
            'HLI': $("#HLI").val(),
            'HLJ': $("#HLJ").val(),
            'AbdomenA': $("#AbdomenA").val(),
            'AbdomenB': $("#AbdomenB").val(),
            'AbdomenC': $("#AbdomenC").val(),
            'AbdomenD': $("#AbdomenD").val(),
            'AbdomenE': $("#AbdomenE").val(),
            'AbdomenF': $("#AbdomenF").val(),
            'AbdomenG': $("#AbdomenG").val(),
            'AbdomenH': $("#AbdomenH").val(),
            'AbdomenI': $("#AbdomenI").val(),
            'AbdomenJ': $("#AbdomenJ").val(),
            'AbdomenK': $("#AbdomenK").val(),
            'AbdomenL': $("#AbdomenL").val(),
            'BoneJointA': $("#BoneJointA").val(),
            'BonejointB': $("#BoneJointB").val(),
            'BoneJointC': $("#BoneJointC").val(),
            'BoneJointD': $("#BoneJointD").val(),
            'BoneJointE': $("#BoneJointE").val(),
            'BoneJointF': $("#BoneJointF").val(),
            'BoneJointG': $("#BoneJointG").val(),
            'BoneJointH': $("#BoneJointH").val(),
            'BoneJointI': $("#BoneJointI").val(),
            'BoneJointJ': $("#BoneJointJ").val(),
            'NervousSystemA': $("#NervousSystemA").val(),
            'NervousSystemB': $("#NervousSystemB").val(),
            'NervousSystemC': $("#NervousSystemC").val(),
            'NervousSystemD': $("#NervousSystemD").val(),
            'NervousSystemE': $("#NervousSystemE").val(),
            'NervousSystemF': $("#NervousSystemF").val(),
            'NervousSystemG': $("#NervousSystemG").val(),
            'ChronicDiseasesA': $("#ChronicDiseasesA").val(),
            'ChronicDiseasesB': $("#ChronicDiseasesB").val(),
            'ChronicDiseasesC': $("#ChronicDiseasesC").val(),
            'ChronicDiseasesD': $("#ChronicDiseasesD").val(),
            'ChronicDiseasesE': $("#ChronicDiseasesE").val(),
            'ChronicDiseasesF': $("#ChronicDiseasesF").val(),
            'InfectiousDiseasesA': $("#InfectiousDiseasesA").val(),
            'InfectiousDiseasesB': $("#InfectiousDiseasesB").val(),
            'InfectiousDiseasesC': $("#InfectiousDiseasesC").val(),
            'InfectiousDiseasesD': $("#InfectiousDiseasesD").val(),
            'InfectiousDiseasesE': $("#InfectiousDiseasesE").val(),
            'InfectiousDiseasesF': $("#InfectiousDiseasesF").val(),
            'InfectiousDiseasesG': $("#InfectiousDiseasesG").val(),
            'InfectiousDiseasesH': $("#InfectiousDiseasesH").val(),
            'InfectiousDiseasesI': $("#InfectiousDiseasesI").val(),
            'InfectiousDiseasesJ': $("#InfectiousDiseasesJ").val(),
            'InfectiousDiseasesK': $("#InfectiousDiseasesK").val(),
            'MedicineA': $("#MedicineA").val(),
            'MedicineB': $("#MedicineB").val(),
            'MedicineC': $("#MedicineC").val(),
            'MedicineD': $("#MedicineD").val(),
            'MedicineE': $("#MedicineE").val(),
            'MedicineF': $("#MedicineF").val(),
            'MedicineG': $("#MedicineG").val(),
            'MedicineH': $("#MedicineH").val(),
            'MedicineI': $("#MedicineI").val(),
            'UnfavorableA': $("#UnfavorableA").val(),
            'UnfavorableB': $("#UnfavorableB").val(),
            'UnfavorableC': $("#UnfavorableC").val(),
            'UnfavorableD': $("#UnfavorableD").val(),
            'UnfavorableE': $("#UnfavorableE").val(),
            'UnfavorableF': $("#UnfavorableF").val(),
            'HeadAAge': $("#HeadAAge").val(),
            'HeadBAge': $("#HeadBAge").val(),
            'HeadCAge': $("#HeadCAge").val(),
            'EyesAAge': $("#EyesAAge").val(),
            'EyesBAge': $("#EyesBAge").val(),
            'EyesCAge': $("#EyesCAge").val(),
            'ENTAAge': $("#ENTAAge").val(),
            'ENTBAge': $("#ENTBAge").val(),
            'ENTCAge': $("#ENTCAge").val(),
            'ENTDAge': $("#ENTDAge").val(),
            'ENTEAge': $("#ENTEAge").val(),
            'ENTFAge': $("#ENTFAge").val(),
            'ENTGAge': $("#ENTGAge").val(),
            'ENTHAge': $("#ENTHAge").val(),
            'ENTIAge': $("#ENTIAge").val(),
            'ENTJAge': $("#ENTJAge").val(),
            'ENTKAge': $("#vENTKAge").val(),
            'ENTLAge': $("#ENTLAge").val(),
            'ENTMAge': $("#ENTMAge").val(),
            'ENTNAge': $("#ENTNAge").val(),
            'ENTOAge': $("#ENTOAge").val(),
            'NeckAAge': $("#NeckAAge").val(),
            'NeckBAge': $("#NeckBAge").val(),
            'HLAAge': $("#HLAAge").val(),
            'HLBAge': $("#HLBAge").val(),
            'HLCAge': $("#HLCAge").val(),
            'HLDAge': $("#HLDAge").val(),
            'HLEAge': $("#HLEAge").val(),
            'HLFAge': $("#HLFAge").val(),
            'HLGAge': $("#HLGAge").val(),
            'HLHAge': $("#HLHAge").val(),
            'HLIAge': $("#HLIAge").val(),
            'HLJAge': $("#HLJAge").val(),
            'AbdomenAAge': $("#AbdomenAAge").val(),
            'AbdomenBAge': $("#AbdomenBAge").val(),
            'AbdomenCAge': $("#AbdomenCAge").val(),
            'AbdomenDAge': $("#AbdomenDAge").val(),
            'AbdomenEAge': $("#AbdomenEAge").val(),
            'AbdomenFAge': $("#AbdomenFAge").val(),
            'AbdomenGAge': $("#AbdomenGAge").val(),
            'AbdomenHAge': $("#AbdomenHAge").val(),
            'AbdomenIAge': $("#AbdomenIAge").val(),
            'AbdomenJAge': $("#AbdomenJAge").val(),
            'AbdomenKAge': $("#AbdomenKAge").val(),
            'AbdomenLAge': $("#AbdomenLAge").val(),
            'BoneJointAAge': $("#BoneJointAAge").val(),
            'BonejointBAge': $("#BonejointBAge").val(),
            'BoneJointCAge': $("#BoneJointCAge").val(),
            'BoneJointDAge': $("#BoneJointDAge").val(),
            'BoneJointEAge': $("#BoneJointEAge").val(),
            'BoneJointFAge': $("#vBoneJointFAge").val(),
            'BoneJointGAge': $("#BoneJointGAge").val(),
            'BoneJointHAge': $("#BoneJointHAge").val(),
            'BoneJointIAge': $("#BoneJointIAge").val(),
            'BoneJointJAge': $("#BoneJointJAge").val(),
            'NervousSystemAAge': $("#NervousSystemAAge").val(),
            'NervousSystemBAge': $("#NervousSystemBAge").val(),
            'NervousSystemCAge': $("#NervousSystemCAge").val(),
            'NervousSystemDAge': $("#NervousSystemDAge").val(),
            'NervousSystemEAge': $("#NervousSystemEAge").val(),
            'NervousSystemFAge': $("#NervousSystemFAge").val(),
            'NervousSystemGAge': $("#NervousSystemGAge").val(),
            'ChronicDiseasesAAge': $("#ChronicDiseasesAAge").val(),
            'ChronicDiseasesBAge': $("#ChronicDiseasesBAge").val(),
            'ChronicDiseasesCAge': $("#ChronicDiseasesCAge").val(),
            'ChronicDiseasesDAge': $("#ChronicDiseasesDAge").val(),
            'ChronicDiseasesEAge': $("#ChronicDiseasesEAge").val(),
            'ChronicDiseasesFAge': $("#ChronicDiseasesFAge").val(),
            'InfectiousDiseasesAAge': $("#InfectiousDiseasesAAge").val(),
            'InfectiousDiseasesBAge': $("#InfectiousDiseasesBAge").val(),
            'InfectiousDiseasesCAge': $("#InfectiousDiseasesCAge").val(),
            'InfectiousDiseasesDAge': $("#InfectiousDiseasesDAge").val(),
            'InfectiousDiseasesEAge': $("#InfectiousDiseasesEAge").val(),
            'InfectiousDiseasesFAge': $("#InfectiousDiseasesFAge").val(),
            'InfectiousDiseasesGAge': $("#InfectiousDiseasesGAge").val(),
            'InfectiousDiseasesHAge': $("#InfectiousDiseasesHAge").val(),
            'InfectiousDiseasesIAge': $("#InfectiousDiseasesIAge").val(),
            'InfectiousDiseasesJAge': $("#InfectiousDiseasesJAge").val(),
            'InfectiousDiseasesKAge': $("#InfectiousDiseasesKAge").val(),
            'MedicineAAge': $("#MedicineAAge").val(),
            'MedicineBAge': $("#MedicineBAge").val(),
            'MedicineCAge': $("#MedicineCAge").val(),
            'MedicineDAge': $("#MedicineDAge").val(),
            'MedicineEAge': $("#MedicineEAge").val(),
            'MedicineFAge': $("#MedicineFAge").val(),
            'MedicineGAge': $("#MedicineGAge").val(),
            'MedicineHAge': $("#MedicineHAge").val(),
            'MedicineIAge': $("#MedicineIAge").val(),
            'UnfavorableAAge': $("#UnfavorableAAge").val(),
            'UnfavorableBAge': $("#UnfavorableBAge").val(),
            'UnfavorableCAge': $("#UnfavorableCAge").val(),
            'UnfavorableDAge': $("#UnfavorableDAge").val(),
            'UnfavorableEAge': $("#UnfavorableEAge").val(),
            'UnfavorableFAge': $("#UnfavorableFAge").val(),
            'OMIOS1': $("#OMIOS1").val(),
            'OMIOS11': $("#OMIOS11").val(),
            'OMIOS12': $("#OMIOS12").val(),
            'OMIOS13': $("#OMIOS13").val(),
            'OMIOS2': $("#OMIOS2").val(),
            'OMIOSB22': $("#OMIOSB22").val(),
            'OMIOS3': $("#OMIOS3").val(),
            'OMIOS33': $("#OMIOS33").val(),
            'OMIOS34': $("#OMIOS34").val(),
            'OMIOS35': $("#OMIOS35").val(),
            'OMIOS36': $("#OMIOS36").val(),
            'OMIOS4': $("#OMIOS4").val(),
            'OMIOS44': $("#OMIOS44").val(),
            'OMIOS5': $("#OMIOS5").val(),
            'OMIOS6': $("#OMIOS6").val(),
            'OMIOS66': $("#OMIOS66").val(),
            'ConcentName': $("#ConcentName").val(),
            'ConcentRelationship': $("#ConcentRelationship").val(),

        }),

        complete: function (data) {
            $("#AjaxxOutput").html(data.responseText);
            $("#ID").val('')
            $("#FirstName").val('')
            $("#MiddleName").val('')
            $("#LastName").val('')
            $("#StudentNum").val('')
            $("#Sex").val('')
            $("#Age").val('')
            $("#Birthdate").val('')
            $("#Birthplace").val('')
            $("#Nationality").val('')
            $("#Religion").val('')
            $("#ContactNum").val('')
            $("#Address").val('')
            $("#FatherName").val('')
            $("#FatherOccupation").val('')
            $("#FatherContactNum").val('')
            $("#MotherName").val('')
            $("#MotherOccupation").val('')
            $("#MotherContactNum").val('')
            $("#GuardianName").val('')
            $("#GuardianOccupation").val('')
            $("#GuardianContactNum").val('')
            $("#HospitalofChoice").val('')
            $("#AddressofHospital").val('')
            $("#HospitalContactNum").val('')
            $("#NameofFamilyDoctor").val('')
            $("#Allergy").val('')
            $("#PastAsthma").val('')
            $("#Anemia").val('')
            $("#BleedingProblem").val('')
            $("#BehavioralProblem").val('')
            $("#HearingProblem").val('')
            $("#SpeechProblem").val('')
            $("#VisualProblem").val('')
            $("#RecurrentIndigestion").val('')
            $("#Jaundice").val('')
            $("#EatingDisorder").val('')
            $("#ChickenFox").val('')
            $("#DengueFever").val('')
            $("#ThypoidFever").val('')
            $("#Measles").val('')
            $("#Mumps").val('')
            $("#Pneumonia").val('')
            $("#PrimaryComplex").val('')
            $("#EarDischarge").val('')
            $("#Tonsilitis").val('')
            $("#Parasitism").val('')
            $("#Insomnias").val('')
            $("#HeartDisease").val('')
            $("#KidneyDisease").val('')
            $("#Convuision").val('')
            $("#Epilepsy").val('')
            $("#PastDiabetes").val('')
            $("#Fainting").val('')
            $("#Fractures").val('')
            $("#Scolosis").val('')
            $("#Hospitalization").val('')
            $("#Operation").val('')
            $("#Cancer").val('')
            $("#CancerRelation").val('')
            $("#HeartProblem").val('')
            $("#HeartRelationProblem").val('')
            $("#HighBlood").val('')
            $("#HighBloodRelation").val('')
            $("#FamilyDiabetes").val('')
            $("#DiabetesRelation").val('')
            $("#KidneyProblem").val('')
            $("#KidneyProblemRelation").val('')
            $("#SeizureDisorder").val('')
            $("#SeizureDisorderRelation").val('')
            $("#Tubercolosis").val('')
            $("#TubercolosisRelation").val('')
            $("#FamilyAsthma").val('')
            $("#AsthmaRelation").val('')
            $("#BleedingDisorder").val('')
            $("#BleedingDisorderRelation").val('')
            $("#MentalDisorder").val('')
            $("#MentalDisorderRelation").val('')
            $("#Stroke").val('')
            $("#StrokeRelation").val('')
            $("#Obesity").val('')
            $("#ObesityRelation").val('')
            $("#Physical").val('')
            $("#PhysicalRelevantDetails").val('')
            $("#Sexual").val('')
            $("#SexualRelevantDetails").val('')
            $("#Verval").val('')
            $("#VervalRelevantDetails").val('')
            $("#AOOOGE").val('')
            $("#AOOOPH").val('')
            $("#Hernia").val('')
            $("#HerniaDate").val('')
            $("#Circumcision").val('')
            $("#CircumcisionDate").val('')
            $("#AOOOM").val('')
            $("#RegularCycle").val('')
            $("#Flow").val('')
            $("#Discomfort").val('')
            $("#HeadA").val('')
            $("#HeadB").val('')
            $("#HeadC").val('')
            $("#EyesA").val('')
            $("#EyesB").val('')
            $("#EyesC  ").val('')
            $("#ENTA").val('')
            $("#ENTB").val('')
            $("#ENTC").val('')
            $("#ENTD").val('')
            $("#ENTE").val('')
            $("#ENTF").val('')
            $("#ENTG").val('')
            $("#ENTH").val('')
            $("#ENTI").val('')
            $("#ENTJ").val('')
            $("#ENTK").val('')
            $("#ENTL").val('')
            $("#ENTM").val('')
            $("#ENTN").val('')
            $("#ENTO").val('')
            $("#NeckA").val('')
            $("#NeckB").val('')
            $("#HLA").val('')
            $("#HLB").val('')
            $("#HLC").val('')
            $("#HLD").val('')
            $("#HLE").val('')
            $("#HLF").val('')
            $("#HLG").val('')
            $("#HLH").val('')
            $("#HLI").val('')
            $("#HLJ").val('')
            $("#AbdomenA").val('')
            $("#AbdomenB").val('')
            $("#AbdomenC").val('')
            $("#AbdomenD").val('')
            $("#AbdomenE").val('')
            $("#AbdomenF").val('')
            $("#AbdomenG").val('')
            $("#AbdomenH").val('')
            $("#AbdomenI").val('')
            $("#AbdomenJ").val('')
            $("#AbdomenK").val('')
            $("#AbdomenL").val('')
            $("#BoneJointA").val('')
            $("#BoneJointB").val('')
            $("#BoneJointC").val('')
            $("#BoneJointD").val('')
            $("#BoneJointE").val('')
            $("#BoneJointF").val('')
            $("#BoneJointG").val('')
            $("#BoneJointH").val('')
            $("#BoneJointI").val('')
            $("#BoneJointJ").val('')
            $("#NervousSystemA").val('')
            $("#NervousSystemB").val('')
            $("#NervousSystemC").val('')
            $("#NervousSystemD").val('')
            $("#NervousSystemE").val('')
            $("#NervousSystemF").val('')
            $("#NervousSystemG").val('')
            $("#ChronicDiseasesA").val('')
            $("#ChronicDiseasesB").val('')
            $("#ChronicDiseasesC").val('')
            $("#ChronicDiseasesD").val('')
            $("#ChronicDiseasesE").val('')
            $("#ChronicDiseasesF").val('')
            $("#InfectiousDiseasesA").val('')
            $("#InfectiousDiseasesB").val('')
            $("#InfectiousDiseasesC").val('')
            $("#InfectiousDiseasesD").val('')
            $("#InfectiousDiseasesE").val('')
            $("#InfectiousDiseasesF").val('')
            $("#InfectiousDiseasesG").val('')
            $("#InfectiousDiseasesH").val('')
            $("#InfectiousDiseasesI").val('')
            $("#InfectiousDiseasesJ").val('')
            $("#InfectiousDiseasesK").val('')
            $("#MedicineA").val('')
            $("#MedicineB").val('')
            $("#MedicineC").val('')
            $("#MedicineD").val('')
            $("#MedicineE").val('')
            $("#MedicineF").val('')
            $("#MedicineG").val('')
            $("#MedicineH").val('')
            $("#MedicineI").val('')
            $("#UnfavorableA").val('')
            $("#UnfavorableB").val('')
            $("#UnfavorableC").val('')
            $("#UnfavorableD").val('')
            $("#UnfavorableE").val('')
            $("#UnfavorableF").val('')
            $("#HeadAAge").val('')
            $("#HeadBAge").val('')
            $("#HeadCAge").val('')
            $("#EyesAAge").val('')
            $("#EyesBAge").val('')
            $("#EyesCAge").val('')
            $("#ENTAAge").val('')
            $("#ENTBAge").val('')
            $("#ENTCAge").val('')
            $("#ENTDAge").val('')
            $("#ENTEAge").val('')
            $("#ENTFAge").val('')
            $("#ENTGAge").val('')
            $("#ENTHAge").val('')
            $("#ENTIAge").val('')
            $("#ENTJAge").val('')
            $("#vENTKAge").val('')
            $("#ENTLAge").val('')
            $("#ENTMAge").val('')
            $("#ENTNAge").val('')
            $("#ENTOAge").val('')
            $("#NeckAAge").val('')
            $("#NeckBAge").val('')
            $("#HLAAge").val('')
            $("#HLBAge").val('')
            $("#HLCAge").val('')
            $("#HLDAge").val('')
            $("#HLEAge").val('')
            $("#HLFAge").val('')
            $("#HLGAge").val('')
            $("#HLHAge").val('')
            $("#HLIAge").val('')
            $("#HLJAge").val('')
            $("#AbdomenAAge").val('')
            $("#AbdomenBAge").val('')
            $("#AbdomenCAge").val('')
            $("#AbdomenDAge").val('')
            $("#AbdomenEAge").val('')
            $("#AbdomenFAge").val('')
            $("#AbdomenGAge").val('')
            $("#AbdomenHAge").val('')
            $("#AbdomenIAge").val('')
            $("#AbdomenJAge").val('')
            $("#AbdomenKAge").val('')
            $("#AbdomenLAge").val('')
            $("#BoneJointAAge").val('')
            $("#BonejointBAge").val('')
            $("#BoneJointCAge").val('')
            $("#BoneJointDAge").val('')
            $("#BoneJointEAge").val('')
            $("#vBoneJointFAge").val('')
            $("#BoneJointGAge").val('')
            $("#BoneJointHAge").val('')
            $("#BoneJointIAge").val('')
            $("#BoneJointJAge").val('')
            $("#NervousSystemAAge").val('')
            $("#NervousSystemBAge").val('')
            $("#NervousSystemCAge").val('')
            $("#NervousSystemDAge").val('')
            $("#NervousSystemEAge").val('')
            $("#NervousSystemFAge").val('')
            $("#NervousSystemGAge").val('')
            $("#ChronicDiseasesAAge").val('')
            $("#ChronicDiseasesBAge").val('')
            $("#ChronicDiseasesCAge").val('')
            $("#ChronicDiseasesDAge").val('')
            $("#ChronicDiseasesEAge").val('')
            $("#ChronicDiseasesFAge").val('')
            $("#InfectiousDiseasesAAge").val('')
            $("#InfectiousDiseasesBAge").val('')
            $("#InfectiousDiseasesCAge").val('')
            $("#InfectiousDiseasesDAge").val('')
            $("#InfectiousDiseasesEAge").val('')
            $("#InfectiousDiseasesFAge").val('')
            $("#InfectiousDiseasesGAge").val('')
            $("#InfectiousDiseasesHAge").val('')
            $("#InfectiousDiseasesIAge").val('')
            $("#InfectiousDiseasesJAge").val('')
            $("#InfectiousDiseasesKAge").val('')
            $("#MedicineAAge").val('')
            $("#MedicineBAge").val('')
            $("#MedicineCAge").val('')
            $("#MedicineDAge").val('')
            $("#MedicineEAge").val('')
            $("#MedicineFAge").val('')
            $("#MedicineGAge").val('')
            $("#MedicineHAge").val('')
            $("#MedicineIAge").val('')
            $("#UnfavorableAAge").val('')
            $("#UnfavorableBAge").val('')
            $("#UnfavorableCAge").val('')
            $("#UnfavorableDAge").val('')
            $("#UnfavorableEAge").val('')
            $("#UnfavorableFAge").val('')
            $("#OMIOS1").val('')
            $("#OMIOS11").val('')
            $("#OMIOS12").val('')
            $("#OMIOS13").val('')
            $("#OMIOS2").val('')
            $("#OMIOSB22").val('')
            $("#OMIOS3").val('')
            $("#OMIOS33").val('')
            $("#OMIOS34").val('')
            $("#OMIOS35").val('')
            $("#OMIOS36").val('')
            $("#OMIOS4").val('')
            $("#OMIOS44").val('')
            $("#OMIOS5").val('')
            $("#OMIOS6").val('')
            $("#OMIOS66").val('')
            $("#ConcentName").val('')
            $("#ConcentRelationship").val('')

        }
    });
}
