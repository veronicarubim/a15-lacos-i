// Criar um laço While que se repete toda vez que a pessoa querer mais uma coxinha
// Somar + 2,5 R$ toda vez que ela aceitar.

let coxinha = prompt("Você quer uma coxinha? Responda com S ou N")
let conta = 0

while (coxinha === "S") {
    coxinha = prompt("Deseja comer mais uma coxinha?");
    conta += 2.5;
    console.log (coxinha, conta)
}

if (coxinha === "N") {
    console.log (`O valor a ser pago é ${conta}`)
}




