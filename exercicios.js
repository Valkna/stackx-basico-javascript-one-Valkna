/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */

function soma(a, b) {
  return a + b;
}
let valorsoma = soma(3, 4);
console.log(`A soma dos dois números é ${valorsoma}.`);
// -------------------------------------



/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplic(a, b) {
  return a * b;
}
let valormultiplic = multiplic(3, 4);
console.log(`A multiplicação dos dois números é ${valormultiplic}.`);
// -------------------------------------



/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  return a / b;
}

let valordivisao = divisao(28, 4);
console.log(`A divisão dos dois números é ${valordivisao}.`);
// -------------------------------------



/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  return a - b;
}

let valorsubtracao = subtracao(28, 4);
console.log(`A subtração dos dois números é ${valorsubtracao}.`);
// -------------------------------------



/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  return a % b;
}

let valormodulo = modulo(30, 4);
console.log(`O módulo dos dois números é ${valormodulo}.`);
// -------------------------------------



/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let numMax = max(7, 1);
console.log(`O número maior é ${numMax}.`);

// -------------------------------------



/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  return `A verdade é que o ${a} é ${b}.`;

}
console.log(strConcat('Rosseti', 'gay'));

// --------------------------------------



/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  if (numero > 10) {
    console.log(`O número ${numero} é maior do que 10.`);

  } else if (numero < 10) {
    console.log(`O número ${numero} é menor do que 10.`);

  } else {
    console.log(`O número ${numero} é igual 10.`);
  }
}
let valorNumero = retornaNumero(8);

// --------------------------------------




/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(numero) {
  if (numero > 0) {
    return true;
  } else {
    return false;
  }
}

let valorNumero = ehPositivo(-7);
console.log(valorNumero);

// -------------------------------------


module.exports =
{
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
