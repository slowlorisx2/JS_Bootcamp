if (document.images) {
    kerriganOn = new Image(50, 50)
    kerriganOn.src = "./slow2.jpg"

    kerriganOff = new Image(50, 50)
    kerriganOff.src = "./slow1.jpg"
}

function imageOn(imagename) {
    if (document.images[0].src = kerriganOff.src) {
        document.images[0].src = kerriganOn.src;
    }
}

function imageOff(imagename) {
    if (document.images[0].src = kerriganOn.src) {
        document.images[0].src = kerriganOff.src;
    }
}

function styleChange() {
    bgcolor = document.getElementById("inputText").value;
    document.getElementById("yes").style.background=(color);
    alert("you have changed the color to: " + bgcolor);
}

