const exemplo = document.querySelector(".exemplo")

exemplo.addEventListener("click",  () => { //uma forma mais eficiente de declarar uma função anônima
    console.log("cliquei!")
})

function dizOi() { //o código será executado sempre que for cliclado 
    console.log("Oi")
}

dizOi() //a função será executada assim que a página carregar