/*
 menos que 18,5 Bajo de peso
 entre 18,5 y 24,9 Normal
 entre 25 y 29,9 Sobrepeso
 entre 30 y 34,9 Obesidad grado 1
 entre 35 y 39,9 Obesidad grado 2
 mas de 40 Obesidad grado 3  
*/

const masacorporal = ["BAJO DE PESO", "NORMAL", "SOBREPESO", "OBESIDAD GRADO I"];
const total = masacorporal.push("OBESIDAD GRADO II")

console.log(masacorporal);
console.log(total);

alert("¿Queres saber tu masa corporal?");

peso = prompt("¿Cual es tu peso?"), ("");
peso = parseInt(peso);
altura = prompt("¿Cual es tu altura?", (""));

let mult = (altura * altura);
imc = peso / mult;

if (imc < 18.5) { alert("BAJO DE PESO"); }
else if (imc <= 18.50 || imc <= 24.99) { alert("NORMAL") }
else if (imc <= 25.00 || imc <= 29.99) { alert("SOBREPESO"); }
else if (imc <= 30.00 || imc <= 34.99) { alert("OBESIDAD GRADO I"); }
else if (imc <= 35.00 || imc <= 39.99) { alert("OBESIDAD GRADO II"); }
else if (imc < 40) { alert("OBESIDAD GRADO III"); }
else { alert("ERROR"); }


