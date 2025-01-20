//Escreve uma função que inverta a ordem dos caracteres de uma string.

function inverter(s) {
    let invertida = "" ; 
    for (let i = 0; i < s.length; i++ ) { 
        invertida = s[i] + invertida; 
    }
    return invertida 
}
 
// chat gpt 
function inverter2 (s) { 
    return Array.from(s).reverse().join("");
    // também podia usar [...s] em vez de Array.from(s)
}

let string = "exemplo";
console.log("String invertida:", inverter2 (string)); //output: olpmexe
console.log ([...string]);