let numeros = [10, 20, 30, 40, 50]; 
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;
console.log("A média dos números é: " + media);
