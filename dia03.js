const nome = prompt('Qual seu nome?')
let area = ''

ver()
function ver() {
    area = prompt(`Olá ${nome} Você quer aprender que área? [Front-End/Back-End]`)
}

area = area.toLowerCase()

resp()
function resp() {
    if (area == 'front-end' || area == 'frontend'){
        prompt('Front-End, Muito bom! E Você quer aprender React ou Vue?')
    } else if (area == 'back-end' || area == 'backend'){
        prompt('Back-End? Legal! E você quer aprender C# ou Java?')
    } else{
        alert('Desculpe não entendi, poderia repetir?')
        ver()
        resp()
    }
}

prompt('E depois? Você quer se especializar na sua área ou quer se tonar Fullstack?')
alert('Que bom que você já tem uma ideia para sua carreira.')

do{
    var res = prompt('Tem mais alguma tecnologia que você gostaria de aprender? [S/N]')
    res = res.toUpperCase()
    if (res == 'S') {
        prompt('Qual seria a tecnologia?')
        alert('Realmente tem muita tecnologia para aprender')
    }
}while (res != 'N')

alert(`Obrigado por participar ${nome} ( ╹▽╹ )`)