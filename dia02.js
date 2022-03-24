let perfil = {
    nome: prompt('Qual seu nome?'),
    idade: prompt('Quantos anos você tem?'),
    linguagem: prompt('Qual linguagem de programação você está estudando?')
}

alert(`Olá ${perfil.nome}, você tem ${perfil.idade} anos e está aprendendo ${perfil.linguagem}!`)

var res = ''

ver()
function ver(){
    res = prompt(`Você gosta de estudar ${perfil.linguagem}? [S/N]`)
}

resp()
function resp() {
    if (res == 'S' || res == 's') {
        alert('Muito bom! Continue estudando e você terá muito sucesso.')
    } else if (res == 'N' || res == 'n') {
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    } else {
        alert('Desculpe não entendi, poderia repetir?')
        ver()
        resp()
    }
}