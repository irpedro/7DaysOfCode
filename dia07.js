operacao()
function operacao() {
    const ope = prompt('Qual operação deseja fazer? [soma/sub/multi/div]')
    switch (ope) {
        case 'soma':
            soma()
            break;
        case 'sub':
            subtracao()
            break;
        case 'multi':
            multiplicacao()
            break;
        case 'div':
            divisao()
            break;
        default:
            alert('Desculpe não entendi')
            operacao()
            break
    }
}

function soma() {
    let n1 = Number(prompt('Digite o primeiro número.'))
    let n2 = Number(prompt('Digite o segundo número.'))
    let res = n1 + n2
    alert(`O resultado é ${res}`)
    let vez = prompt('Gostaria de fazer outra soma? [S/N]')
    if (vez == 'S') {
        soma()
    }
    vez = prompt('Então gostaria de fazer outra operação? [S/N]')
    while (vez != 'S' && vez != 'N') {
        vez = prompt('Desculpe não entendi. Poderia repetir? (Digite [S/N])')
    }
    if (vez == 'S') {
        operacao()
    }
}

function subtracao() {
    let n1 = Number(prompt('Digite o primeiro número.'))
    let n2 = Number(prompt('Digite o segundo número.'))
    let res = n1 - n2
    alert(`O resultado é ${res}`)
    let vez = prompt('Gostaria de fazer outra subtração? [S/N]')
    if (vez == 'S') {
        subtracao()
    }
    vez = prompt('Então gostaria de fazer outra operação? [S/N]')
    while (vez != 'S' && vez != 'N') {
        vez = prompt('Desculpe não entendi. Poderia repetir? (Digite [S/N])')
    }
    if (vez == 'S') {
        operacao()
    }
}

function multiplicacao() {
    let n1 = Number(prompt('Digite o primeiro número.'))
    let n2 = Number(prompt('Digite o segundo número.'))
    let res = n1 * n2
    alert(`O resultado é ${res}`)
    let vez = prompt('Gostaria de fazer outra multiplicação? [S/N]')
    if (vez == 'S') {
        multiplicacao()
    }
    vez = prompt('Então gostaria de fazer outra operação? [S/N]')
    while (vez != 'S' && vez != 'N') {
        vez = prompt('Desculpe não entendi. Poderia repetir? (Digite [S/N])')
    }
    if (vez == 'S') {
        operacao()
    }
}

function divisao() {
    let n1 = Number(prompt('Digite o primeiro número.'))
    let n2 = Number(prompt('Digite o segundo número.'))
    let res = n1 / n2
    alert(`O resultado é ${res}`)
    let vez = prompt('Gostaria de fazer outra divisão? [S/N]')
    if (vez == 'S') {
        divisao()
    }
    vez = prompt('Então gostaria de fazer outra operação? [S/N]')
    while (vez != 'S' && vez != 'N') {
        vez = prompt('Desculpe não entendi. Poderia repetir? (Digite [S/N])')
    }
    if (vez == 'S') {
        operacao()
    }
}