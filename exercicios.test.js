const { soma, multiplicacao, divisao, subtracao, modulo, max, 
  strConcat,
  retornaNumero,
  ehPositivo
} = require('./exercicios');

// ------------------------------------------------------------

test('Retorna a soma entre 1337 e 3301', () => {
  expect(soma(1337, 3301)).toBe(4638);
});

test('Retorna multiplicação entre 3 e 11', () => {
  expect(multiplicacao(3, 11)).toBe(33);
});

test('Retorna a divisão entre 10 e 2', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('Retorna subtração entre 3301 e 1337', () => {
  expect(subtracao(3301, 1337)).toBe(1964);
});

test('Retorna resto da divisão de 15 por 4', () => {
  expect(modulo(15, 4)).toBe(3);
});

test('Retorna o maior número entre 13 e 33', () => {
  expect(max(13, 33)).toBe(33);
});

// ------------------------------------------------------------

test('Retorna as strings "Hello" e "World" com template string"', () => {
  expect(strConcat('Hello', 'World')).toBe('Hello World');
});

// ------------------------------------------------------------

test('Retorna "Maior que 10" quando o número é maior que 10', () => {
  expect(retornaNumero(15)).toBe('Maior que 10');
});

test('Retorna "Igual a 10" quando o número é igual a 10', () => {
  expect(retornaNumero(10)).toBe('Igual a 10');
});

test('Retorna "Menor que 10" quando o número é menor que 10', () => {
  expect(retornaNumero(5)).toBe('Menor que 10');
});

// ------------------------------------------------------------

test('Retorna true para números positivos', () => {
  expect(ehPositivo(5)).toBe(true);
  expect(ehPositivo(0)).toBe(false);
  expect(ehPositivo(-5)).toBe(false);
});