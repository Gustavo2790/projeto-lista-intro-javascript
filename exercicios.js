// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt('Digite a altura do retângulo:'))
  let largura = Number(prompt('Digite a largura do retângulo:'))
  let areaRetangulo = altura * largura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual (AAAA):'))
  let anoNascimento = Number(prompt('Digite o ano do seu nascimento (AAAA):'))
  let idadeUsuario = anoAtual - anoNascimento
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let pesoQuilos = peso
  let alturaMetros = altura
  let imc = pesoQuilos / (alturaMetros * alturaMetros)
  return Number(imc.toFixed(1))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Digite seu nome:')
  let idade = prompt('Digite sua idade:')
  let email = prompt('Digite seu e-mail:')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corFavorita1 = prompt('Digite sua primeira cor favorita:')
  let corFavorita2 = prompt('Digite sua segunda cor favorita:')
  let corFavorita3 = prompt('Digite sua terceira cor favorita:')
  let array = [corFavorita1, corFavorita2, corFavorita3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let stringMinuscula = string
  return stringMinuscula.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   let numeroDeIngressos = custo / valorIngresso
  return numeroDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanhoString1 = string1.length
  let tamanhoString2 = string2.length
  return tamanhoString1 === tamanhoString2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let primeiroArray = array[0]
  return primeiroArray
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoArray = array.pop()
  return ultimoArray
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let removePrimeiroArray = array.shift()
  let removeUltimoArray = array.pop()
  let trocaUltimoParaPrimeiro = array.unshift(removeUltimoArray)
  let trocaPrimeiroParaUltimo = array.push(removePrimeiroArray)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let stringMinuscula1 = string1.toLowerCase()
  let stringMinuscula2 = string2.toLowerCase()
  return stringMinuscula1 === stringMinuscula2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual (AAAA):'))
  let anoNascimento = Number(prompt('Digite seu ano de nascimento (AAAA):'))
  let anoEmissaoRg = Number(prompt('Digite o ano de emissão do seu RG (AAAA):'))
  let idade = anoAtual - anoNascimento
  let anosRg = anoAtual - anoEmissaoRg
  const condicao1 = (idade <= 20) && (anosRg >= 5)
  const condicao2 = (idade <= 50) && (anosRg >= 10)
  const condicao3 = (idade > 50) && (anosRg > 15)
  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}