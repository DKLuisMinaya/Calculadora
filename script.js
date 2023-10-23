var a = document.querySelector("#i1");
var b = document.querySelector("#i2");
var r = document.querySelector("#r");
function suma(){
    let suma =0;
    suma = parseInt (a.value) + parseInt(b.value);
    r.innerHTML=suma;
}

function resta(){
    let resta = 0;
    resta = parseInt(a.value)- parseInt(b.value);
    r.innerHTML=resta;
}

function multiplicacion(){
    let multiplicacion = 0;
    multiplicacion = parseInt(a.value)*parseInt(b.value);
    r.innerHTML=multiplicacion;
}

function division(){
    let division = 0;
    division = parseInt(a.value) / parseInt(b.value);
    r.innerHTML=division;
}