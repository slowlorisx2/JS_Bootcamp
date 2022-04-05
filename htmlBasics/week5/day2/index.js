let toggle = true;
function imgToggle(){
    
    if (toggle) {
        document.images[0].src = "./k2.jpg";
        toggle = false;
    }
    else{
        document.images[0].src = "./k1.jpg";
        toggle = true;
    }
}