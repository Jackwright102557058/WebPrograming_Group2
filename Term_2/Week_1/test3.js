var alertBox = document.getElementById("ourButton");
var dyears = document.getElementById("uinput");


alertBox.onclick = () => {

    (CalculateAge(dyears.value) )
}

function CalculateAge(dyears){

    alert("Thats " + parseInt(dyears) * 10.5 + " Dog years");

}
