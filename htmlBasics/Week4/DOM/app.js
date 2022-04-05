var newWindow;




function openNewWindow() {
    
    newWindow = open("", "", "height=500, width=500");
    return(newWindow);
}

function writeTo() {
    newWindow.document.write("<h2>*** Writing here!***</h2>")
}

function styleChange() {
    document.getElementById("heading1").style.background = "orange";
    document.getElementById("heading1").style.border = "solid 2px";
}