//Escreve uma função que inverta a ordem dos caracteres de uma string.

function inverter(s) {
    return s.split("").reverse().join("")
}

let string = "exemplo";
console.log("String invertida:", inverter(string)); //output: olpmexe
