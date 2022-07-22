//Pantalla donde se visualizaran los resultados
const displayView = document.getElementById("display-view")
let exprecionArray = [];

//Botones
const btnSuma = ()=> { if(condicionSignos() === true){ displayView.innerHTML += "+"; exprecionArray.push("+");}}
const btnResta = ()=> { if(condicionSignos() === true){ displayView.innerHTML += "-"; exprecionArray.push("-");}}
const btnMultiplicacion = ()=> { if(condicionSignos() === true){ displayView.innerHTML += "*"; exprecionArray.push("*");}}
const btnDivicion = ()=> { if(condicionSignos() === true){ displayView.innerHTML += "/"; exprecionArray.push("/");}}
const btnNum0 = ()=> { displayView.innerHTML += "0"; exprecionArray.push("0")}
const btnNum1 = ()=> { displayView.innerHTML += "1"; exprecionArray.push("1")}
const btnNum2 = ()=> { displayView.innerHTML += "2"; exprecionArray.push("2")}
const btnNum3 = ()=> { displayView.innerHTML += "3"; exprecionArray.push("3")}
const btnNum4 = ()=> { displayView.innerHTML += "4"; exprecionArray.push("4")}
const btnNum5 = ()=> { displayView.innerHTML += "5"; exprecionArray.push("5")}
const btnNum6 = ()=> { displayView.innerHTML += "6"; exprecionArray.push("6")}
const btnNum7 = ()=> { displayView.innerHTML += "7"; exprecionArray.push("7")}
const btnNum8 = ()=> { displayView.innerHTML += "8"; exprecionArray.push("8")}
const btnNum9 = ()=> { displayView.innerHTML += "9"; exprecionArray.push("9")}
const btnPunto = ()=> { if(condicionSignos() === true) {displayView.innerHTML += "."; exprecionArray.push(".");}}
const btnDelete = ()=> { displayView.innerHTML = ""; exprecionArray = [];}

function btnResult(){
    let expresion = arrStructure();
    console.log(`Arreglo inicial: ${expresion}`)
    for(let i = 0; i < expresion.length; i++){
        if(expresion[i] === "*" || expresion[i] === "/") {
            let vals = [];
            vals.push(expresion[i-1]);
            vals.push(expresion[i]);
            vals.push(expresion[i+1]);
            expresion.splice(i-1, 3, operation(vals));
            i--;
       }
    }

    for(let i = 0; i < expresion.length; i++){
        if(expresion[i] === "-" || expresion[i] === "+") {
            let vals = [];
            vals.push(expresion[i-1]);
            vals.push(expresion[i]);
            vals.push(expresion[i+1]);
            expresion.splice(i-1, 3, operation(vals));
            i--;
       }
    }
    displayView.innerHTML = expresion[0];
}

function operation(values) {
    if(values[1] === "+") { return parseFloat(values[0]) + parseFloat(values[2]);}
    if(values[1] === "-") { return parseFloat(values[0]) - parseFloat(values[2]);}
    if(values[1] === "*") { return parseFloat(values[0]) * parseFloat(values[2]);}
    if(values[1] === "/") { return parseFloat(values[0]) / parseFloat(values[2]);}
}

function arrStructure(){
    var newArray = [];
    var cifra = ""
    for(let i = 0; i < exprecionArray.length; i++){
        let item = exprecionArray[i+1];
        let number = String(exprecionArray[i])
        if(number === "1" || number === "2" || number === "3" || number === "4" || number === "5" || number === "6" || number === "7" || number === "8" || number === "9" || number === "0" || number === "."){
            cifra += exprecionArray[i];
            if(item === "+" || item === "-" || item === "*" || item === "/"){
                newArray.push(cifra);
                cifra = "";
            }
        }

        if(exprecionArray[i] === "+" || exprecionArray[i] === "-" || exprecionArray[i] === "*" || exprecionArray[i] === "/"){newArray.push(exprecionArray[i]);}
        if(i === exprecionArray.length-1 && cifra !== ""){newArray.push(cifra);}
    }
    return newArray;
}

//conditions
const condicionSignos = ()=>{
    let endItem = exprecionArray[exprecionArray.length-1];
    return (endItem === "+" || endItem === "-" || endItem === "*" ||endItem === "/" || endItem === ".") ? true : false;
}