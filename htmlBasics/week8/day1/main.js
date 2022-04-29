// var demo1 = document.getElementById("H1Lorem").getAttribute("id");
// var demo2 = document.getElementById("H1Lorem").getAttribute("class");
// document.getElementById("hidden").innerHTML = demo1 + "<br>" + demo2;

// var myElement = document.getElementById("myh1");
// myElement.removeAttribute("id");
// document.getElementById("hidden").innerHTML = myElement.getAttribute("id");
//var body = document.getElementsByTagName("body");

// // Append child

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", doIt);
var newH2 = document.createElement("h2");
newH2.setAttribute("id", "h2primary");
var newH2Content = document.createTextNode("YES Here I AM...");
newH2.appendChild(newH2Content);

var toggle = false;

function doIt(){
    if (toggle == false) {
        generateCont();
        toggle = true;
        
    }else { 
        removeContent();
        toggle = false;
    }
}

function generateCont() {
    
    
    document.body.appendChild(newH2);
}

function removeContent() {
    document.body.removeChild(newH2);
}