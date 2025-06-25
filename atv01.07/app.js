//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function consoleBtn(){
    console.log('Botao console foi precionado');
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function alertBtn(){
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function promptBtn(){
    let cidade = prompt('Digite o nome de uma Cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somaBtn(){
    let numero1 = prompt('Digite o primeiro número para ser somado');
    let numero2 = prompt('Digite o segundo número para ser somamdo');
// Também poderia ser feito dessa forma.
//    let numero1 = parseInt(prompt('Digite o primeiro número para ser somado'));
//    let numero2 = parseInt(prompt('Digite o segundo número para ser somamdo'));

    let resultado = parseInt(numero1)+parseInt(numero2);

    alert(`A  soma de ${numero1} e ${numero2} é: ${resultado}`);
    console.log(resultado);
}