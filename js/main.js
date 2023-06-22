const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }

}

function atualizaEstatisticas(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const botoesCor = document.querySelectorAll('.btn-cor');
const robo = document.querySelector('.robo');

botoesCor.forEach((botao) => {
    botao.addEventListener("click", () => {

        console.log('aplicando a cor ' + botao.dataset.cor + ' no Robotron 2000!');

        robo.src = `/img/robotron-${botao.dataset.cor}.png`; //CORRIGIR:  o arquivo não foi encontrado no caminho esperado. 
        botao.classList.add('btn-ativo');

        botoesCor.forEach((btn) => {
            if (btn.dataset.cor != botao.dataset.cor)
                btn.classList.remove('btn-ativo');
        });
    });
});
