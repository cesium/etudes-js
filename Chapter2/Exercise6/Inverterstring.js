//Escreve uma função que inverta a ordem dos caracteres de uma string.

function inverter(s) {
    let r = "";
    for (var i=s.length-1; i>=0; i--){
        r += s[i];
    }
    return r;
}

let string = "exemplo";
console.log("String invertida:", inverter(string)); //output: olpmexe
