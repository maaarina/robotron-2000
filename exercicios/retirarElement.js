//quest: No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor da lista utilizando um método do JavaScript. Utilize a lista abaixo como base:

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
var posicao = lista.indexOf("Vermelho")

lista.splice(posicao, 1) //lista.splice(1,1)
console.log(lista)