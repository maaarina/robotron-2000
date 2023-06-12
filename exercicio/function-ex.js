// No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.


const eventoClick = document.querySelector("#calcular")
const resultado = document.querySelector(".resultado");

eventoClick.addEventListener("click", (evento) => {
    console.log(evento)
    resultado.innerHTML = "Fui clicado"
})

eventoClick.addEventListener("click", () => {
    console.log("teste")
})

/*================================================================================


já existem parâmetros que são padrão da nossa página, por exemplo, toda vez que um evento acontece nós podemos manipular esse evento. Numa arrow function colocamos entre os parenteses o que iremos usar (evento) e usando o console.log(evento) e ele irá retornar todas as informações que aconteceram ao clicar neste evento */