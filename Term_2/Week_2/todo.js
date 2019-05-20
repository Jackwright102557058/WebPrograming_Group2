var ourbutton = document.getElementById("add");
var clearbutton = document.getElementById("clear");
var uinput = document.getElementById("addinput");
var counter = 0;
var counter2 = 0;


ourbutton.addEventListener("click", ourbuttonclick);
clearbutton.addEventListener("click",clearbuttonclick);


function ourbuttonclick() {

    var currentoperator = document.getElementById("operators").value; 
    var blah = document.createElement("p");
    if (currentoperator == "sh") {
        //shlist.innerHTML += blah + uinput.value + "<br>";

        var div = document.createElement("div");
        div.setAttribute("id", "Div_" + counter)
        div.style.display = "flex";
    
        let myId = div.id;
        shlist.appendChild(div)
        var newbutton = document.createElement("button");
        newbutton.appendChild(document.createTextNode("X"))
        newbutton.className += "Xbutton";
        newbutton.onclick = clearsingle;

        var newbox = document.createElement("input");
        newbox.type = "checkbox";

        blah.appendChild(document.createTextNode(uinput.value));
        div.appendChild(blah);
        div.appendChild(newbutton);
        div.appendChild(newbox);

        function clearsingle() {
            document.getElementById(myId).remove();
        }


    }
    if (currentoperator == "hl") { 
        //hllist.innerHTML += uinput.value + "<br>";

        var div = document.createElement("div");
        div.setAttribute("id", "Div_" + counter)
        div.style.display = "flex";
    
        let myId = div.id;
        hllist.appendChild(div)
        var newbutton = document.createElement("button");
        newbutton.appendChild(document.createTextNode("X"))
        newbutton.onclick = clearsingle;
        blah.appendChild(document.createTextNode(uinput.value))
        div.appendChild(blah);
        div.appendChild(newbutton);

        function clearsingle() {
            document.getElementById(myId).remove();
        }


    }
    if (currentoperator == "mi") {
        //milist.innerHTML += uinput.value + "<br>";

        var div = document.createElement("div");
        div.setAttribute("id", "Div_" + counter)
        div.style.display = "flex";
    
        let myId = div.id;
        milist.appendChild(div)
        var newbutton = document.createElement("button");
        newbutton.appendChild(document.createTextNode("X"))
        newbutton.onclick = clearsingle;
        blah.appendChild(document.createTextNode(uinput.value))
        div.appendChild(blah);
        div.appendChild(newbutton);

        function clearsingle() {
            document.getElementById(myId).remove();
        }
    }
   
    counter++
}



function clearbuttonclick() {
    document.getElementById("shlist").innerHTML = "";
    document.getElementById("hllist").innerHTML = "";
    document.getElementById("milist").innerHTML = "";
    counter = 0;
}

