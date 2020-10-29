


function calc() {






let crop_type = document.getElementById("crop-type").value;
let result = crop_type * 4;

if(crop_type == 0) {
    alert("Missing data. Insert value in field one please.");
}
else if  (crop_type == 1 || crop_type == 2){
    document.getElementById("result-display").innerHTML = "We recommend to plant " + result + " semen.";
}
}