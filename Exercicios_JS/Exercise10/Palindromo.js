function Palindromo(s) {
    let invertida = ""; // Armazena a string invertida
    
    // Inverte a string
    for (let i = s.length - 1; i >= 0; i--) {
      invertida += s[i];
    }
    
    // Compara a string original com a invertida
    return s === invertida;
}
  
let palavra = "arara";
console.log("É palíndromo:", Palindromo(palavra)); //output: true
  