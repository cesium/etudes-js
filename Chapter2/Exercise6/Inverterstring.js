//Escreve uma função que inverta a ordem dos caracteres de uma string.

function inverter(s) {
    let result = "";
    for(let i = 0, j = s.length-1; i<s.length;i++, j--){
        result += s[j];
    }
    return result;
}

let string = "exemplo";
console.log("String invertida:", inverter(string)); //output: olpmexe
