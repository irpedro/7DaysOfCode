var numSec = parseInt(Math.random() * 11)
var c = 0
while (c < 3) {
	var chute = parseInt(prompt('Digite um número de 0 até 10'))
	if (chute == numSec) {
	    alert('Você acertou!')
	    c = 4
	} else if (numSec < chute) {
		alert('Você errou, o número é menor')
		c++
	} else if (numSec > chute) {
		alert('Você errou, o número é maior')
		c++
	} else {
		alert('Por favor digite um número entre 0 e 10')
	}
}
if (c == 3) {
    alert(`Que pena acabaram as suas chances, o número era o ${numSec}`)
}
