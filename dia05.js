let hortifruti = []
let bebidas = []
let doces = []
let misturas = []
let snacks = []
let frios = []

const corr = ['[hortifruti, bebidas, doces, misturas, snacks, frios]']

let res = 'S'
while (res == 'S' || res =='s') {
    let cat = ''
    let ali = prompt('Qual comida você deseja adicionar?')
    verificar()
    function verificar() {
        cat = prompt(`Em qual categoria ela se encaixa? ${corr}`)
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
    res = prompt('Deseja adicionar algum outro alimento a sua lista de compras? [S/N]')
}
alert(`Lista de compras:\n\n hortifruti: ${hortifruti}\n Bebidas: ${bebidas}\n Doces: ${doces}\n Misturas: ${misturas}\n Snacks: ${snacks}\n Frios: ${frios}`)