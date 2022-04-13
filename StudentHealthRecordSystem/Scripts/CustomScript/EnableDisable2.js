function EDHernia(select) {
    if (select.value == "Yes") {
        document.getElementById("HerniaDate").disabled = false;
    }
    else {
        document.getElementById("HerniaDate").disabled = true;
    }
}
function EDCircumcision(select) {
    if (select.value == "Yes") {
        document.getElementById("CircumcisionDate").disabled = false;
    }
    else {
        document.getElementById("CircumcisionDate").disabled = true;
    }
}