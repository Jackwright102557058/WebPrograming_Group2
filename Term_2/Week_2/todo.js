var ourbutton = document.getElementById("add");
var clearbutton = document.getElementById("clear");
var uinput = document.getElementById("addinput");

ourbutton.addEventListener("click", ourbuttonclick);
clearbutton.addEventListener("click",clearbuttonclick);

function ourbuttonclick() {
    var currentoperator = document.getElementById("operators").value; 
    if (currentoperator == "sh") {
        shlist.innerHTML += uinput.value + "<br>";
    }
    if (currentoperator == "hl") {
        hllist.innerHTML += uinput.value + "<br>";
    }
    if (currentoperator == "mi") {
        milist.innerHTML += uinput.value + "<br>";
    }

}

function clearbuttonclick() {
    document.getElementById("shlist").innerHTML = "";
    document.getElementById("hllist").innerHTML = "";
    document.getElementById("milist").innerHTML = "";
}