// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, 
// que serão recebidos como parâmetro.
function calculoIMC(altura, peso){
    let imc = peso /(alturaMetros*alturaMetros);
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(altura, largura){
    let larguraRecebida = largura;
    let alturaRecebida = altura;
    let area = larguraRecebida*alturaRecebida;

    return area;
}
let altura1 = 50;
let largura1 = 10;
let area1 = areaPerimetro(altura1, largura1);
console.log(`A área é de ${area1}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetro(raio){
    let area = Math.PI*(raio*raio);
    let perimetro = 2 * Math.PI * raio;
    console.log(`Valor da área é ${area.toFixed(2)}`);
    console.log(`Valor do Perimetro é ${perimetro.toFixed(2)}`);
}
let raio = 5;
let area = areaPerimetro(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for (let a = 0; a <= 10; a++) {
      console.log(`${numero}X${a} =`+ numero*a);      
    }
}
let tabuadaa = 10;
let teste = tabuada(tabuadaa);
