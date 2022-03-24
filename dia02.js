var nome = prompt('Qual seu nome?')
var idade = prompt('Quantos anos você tem?')
var linguagem = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá ${nome}, você tem ${idade} anos e está aprendendo ${linguagem}!`)

var res = ''

ver()
function ver(){
    res = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para SIM e 2 para NÃO.`)
}

resp()
function resp() {
    if (res == 1) {
        alert('Muito bom! Continue estudando e você terá muito sucesso.')
    } else if (res == 2) {
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    } else {
        alert('Desculpe não entendi, poderia repetir?')
        ver()
        resp()
    }
}