/********************************************************************
 You will be creating a switch statement from complex, multiple if
 statements
********************************************************************/
function toomanyifstatements(){
	OptionsSelect = document.MyForm.cities.value;
    switch (OptionsSelect) {
        case "1":
            alert("Albany");
            break;
        case "2":
            alert("Boston");
            break;
        case "3":
            alert("Chicago");
            break;
        case "4":
            alert("Denver");
            break;
        case "5":
            alert("ElmsVille");
            break;
        case "6":
            alert("Franklin");
            break;
        case "7":
            alert("Anaheim");
            break;
        case "8":
            alert("Hartland");
            break;
        case "9":
            alert("Iona");
            break;
        case "10":
            alert("Jacksonville");
            break;
        default:
            alert("None");
            break;
    }

}