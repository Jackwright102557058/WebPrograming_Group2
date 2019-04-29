var button = document.getElementById("ourButton");
var unlkButton = document.getElementById("unlkButton");


button.onmouseover = buttonMoused;
unlkButton.onclick = buttonClicked;

function buttonClicked() {
    onclick = button.disabled = false;
}

function buttonMoused() {
    onmouseover = button.disabled = true;
}