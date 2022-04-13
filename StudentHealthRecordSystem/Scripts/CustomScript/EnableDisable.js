function CancerED(select) {
    if (select.value == "Yes") {
        document.getElementById("CancerRelation").disabled = false;
    }
    else {
        document.getElementById("CancerRelation").disabled = true;
    }
}
function HeartProblemED(select) {
    if (select.value == "Yes") {
        document.getElementById("HeartRelationProblem").disabled = false;
    }
    else {
        document.getElementById("HeartRelationProblem").disabled = true;
    }
}
function HighBloodED(select) {
    if (select.value == "Yes") {
        document.getElementById("HighBloodRelation").disabled = false;
    }
    else {
        document.getElementById("HighBloodRelation").disabled = true;
    }
}
function FamilyDiabetesED(select) {
    if (select.value == "Yes") {
        document.getElementById("DiabetesRelation").disabled = false;
    }
    else {
        document.getElementById("DiabetesRelation").disabled = true;
    }
}
function KidneyProblemED(select) {
    if (select.value == "Yes") {
        document.getElementById("KidneyProblemRelation").disabled = false;
    }
    else {
        document.getElementById("KidneyProblemRelation").disabled = true;
    }
}
function SeizureDisorderED(select) {
    if (select.value == "Yes") {
        document.getElementById("SeizureDisorderRelation").disabled = false;
    }
    else {
        document.getElementById("SeizureDisorderRelation").disabled = true;
    }
}
function TubercolosisED(select) {
    if (select.value == "Yes") {
        document.getElementById("TubercolosisRelation").disabled = false;
    }
    else {
        document.getElementById("TubercolosisRelation").disabled = true;
    }
}
function FamilyAsthmaED(select) {
    if (select.value == "Yes") {
        document.getElementById("AsthmaRelation").disabled = false;
    }
    else {
        document.getElementById("AsthmaRelation").disabled = true;
    }
}
function BleedingDisorderED(select) {
    if (select.value == "Yes") {
        document.getElementById("BleedingDisorderRelation").disabled = false;
    }
    else {
        document.getElementById("BleedingDisorderRelation").disabled = true;
    }
}
function MentalDisorderED(select) {
    if (select.value == "Yes") {
        document.getElementById("MentalDisorderRelation").disabled = false;
    }
    else {
        document.getElementById("MentalDisorderRelation").disabled = true;
    }
}
function StrokeED(select) {
    if (select.value == "Yes") {
        document.getElementById("StrokeRelation").disabled = false;
    }
    else {
        document.getElementById("StrokeRelation").disabled = true;
    }
}
function ObesityED(select) {
    if (select.value == "Yes") {
        document.getElementById("ObesityRelation").disabled = false;
    }
    else {
        document.getElementById("ObesityRelation").disabled = true;
    }
}
/////////////////////////////////////////////////////////////////////////
function PhysicalED(select) {
    if (select.value == "Yes") {
        document.getElementById("PhysicalRelevantDetails").disabled = false;
    }
    else {
        document.getElementById("PhysicalRelevantDetails").disabled = true;
        document.getElementById("PhysicalRelevantDetails").value = "N/A";
    }
}
function SexualED(select) {
    if (select.value == "Yes") {
        document.getElementById("SexualRelevantDetails").disabled = false;
    }
    else {
        document.getElementById("SexualRelevantDetails").disabled = true;
    }
}
function VerbalED(select) {
    if (select.value == "Yes") {
        document.getElementById("VerbalRelevantDetails").disabled = false;
    }
    else {
        document.getElementById("VerbalRelevantDetails").disabled = true;
    }
}
///////////////////////////////////////////////////////////////////////////
function ED1(select) {
    if (select.value == "Yes") {
        document.getElementById("OMIOS11").disabled = false;
        document.getElementById("OMIOS12").disabled = false;
        document.getElementById("OMIOS13").disabled = false;
    }
    else {
        document.getElementById("OMIOS11").disabled = true;
        document.getElementById("OMIOS12").disabled = true;
        document.getElementById("OMIOS13").disabled = true;
    }
}
function ED2(select) {
    if (select.value == "Yes") {
        document.getElementById("OMIOSB22").disabled = false;
    }
    else {
        document.getElementById("OMIOSB22").disabled = true;
    }
}
function ED3(select) {
    if (select.value == "Yes") {
        document.getElementById("OMIOS33").disabled = false;
        document.getElementById("OMIOS34").disabled = false;
        document.getElementById("OMIOS35").disabled = false;
        document.getElementById("OMIOS36").disabled = false;
    }
    else {
        document.getElementById("OMIOS33").disabled = true;
        document.getElementById("OMIOS34").disabled = true;
        document.getElementById("OMIOS35").disabled = true;
        document.getElementById("OMIOS36").disabled = true;
    }
}
function ED4(select) {
    if (select.value == "Yes") {
        document.getElementById("OMIOS44").disabled = false;
    }
    else {
        document.getElementById("OMIOS44").disabled = true;
    }
}
function ED5(select) {
    if (select.value == "Yes") {
        document.getElementById("OMIOS66").disabled = false;
    }
    else {
        document.getElementById("OMIOS66").disabled = true;
    }
}
