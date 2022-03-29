let hortifruti = []
let bebidas = []
let doces = []
let misturas = []
let snacks = []
let frios = []

const corr = [hortifruti, bebidas, doces, misturas, snacks, frios]

let res = 'S'
let vez = 1

while (res == 'S' || res == 's') {
    let cat = ''
    let ali = prompt('Qual comida você deseja adicionar?')
    verificar()
    function verificar() {
        cat = prompt('Em qual categoria ela se encaixa? [hortifruti, bebidas, doces, misturas, snacks, frios]')
        cat = cat.toLowerCase()
    }
    categorizar()
    function categorizar() {
        if (cat == 'hortifruti') {
            hortifruti.push(ali)
        } else if (cat == 'bebidas') {
            bebidas.push(ali)
        } else if (cat == 'doces') {
            doces.push(ali)
        } else if (cat == 'misturas') {
            misturas.push(ali)
        } else if (cat == 'snacks') {
            snacks.push(ali)
        } else if (cat == 'frios') {
            frios.push(ali)
        } else {
            alert('Desculpe não entendi, poderia repetir?')
            verificar()
            categorizar()
        }
    }
    
    if (vez > 1) {
        let rem = prompt('Você gostaria de remover algum item da lista de compras? [S/N]')
        if (rem == 'S' || rem == 's') {
            mostrar()
            remover()
        }
    }
    res = prompt('Deseja adicionar algum outro alimento a sua lista de compras? [S/N]')
    vez++
}

function remover() {
    let itemRemovido = prompt('Qual item você deseja remover?')
    for (var c = 0;c < corr.length;c++) {
        let teste = corr[c].indexOf(itemRemovido)
        if (teste != -1) {
            corr[c].splice(teste, 1)
        }
    }
    mostrar()
}
mostrar()
function mostrar() {
    alert(`Lista de compras:\n\n hortifruti: ${hortifruti}\n Bebidas: ${bebidas}\n Doces: ${doces}\n Misturas: ${misturas}\n Snacks: ${snacks}\n Frios: ${frios}`)
}