// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundoConsole(){
    console.log('Olá Mundo!');
}
olaMundoConsole();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function solicitaNome(nome){
    console.log(`Olá ${nome}`);
}
solicitaNome('Rigo');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function dobroDoNumero(numero){
        return numero * 2;
}
let resultadoCalculado = dobroDoNumero(5);
console.log(resultadoCalculado);

// Criar uma função que recebe três números como parâmetros e retorna a média deles
function media(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}
let resultadoMedia = media(5,5,2);
console.log(resultadoMedia);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles
function maiorDeles(a , b){
    return a > b ? a : b;
}
let maiorNumero = maiorDeles(15,8);
console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(a){
    return a*a;
}
let resultadoMultiplicacao = multiplicaNumero(3);
console.log(resultadoMultiplicacao);