//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//AQUI CONSTA A LÓGICA PARA QUANDO ELE DEVOLVER O LIVRO INCREMENTAR + 1 AOS DISPONIVEIS
document.addEventListener("click", function (event) {

    const botao = event.target;

    if (botao.textContent == "Devolver") {

        const livro = botao.closest(".livro");

        if (!livro) return;

        const button = livro.querySelector(".btn-disponiveis");

        if (!button) return;

        const atual = capturaQuantidadeAtual(button);

        if (typeof atual === "number" && !isNaN(atual)) {
            incrementar(button, atual);
        }

        setTimeout(function () {
            button.style.display = "block";
        }, 900);

    }

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Aqui fica a logica que permite a decrementacao da quantidade de livros
document.addEventListener("click", function (event) {

    const botao = event.target;

    if (botao.textContent == "Reservar") {

        const livro = botao.closest(".livro");

        if (!livro) return;

        const button = livro.querySelector(".btn-disponiveis");

        if (!button) return;

        const atual = capturaQuantidadeAtual(button);

        if (typeof atual === "number" && !isNaN(atual)) {
            decrementar(button, atual);
        }

        setTimeout(function () {
            button.style.display = "none";
        }, 900);

    }

});



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//LÓGICA PARA RESERVAR LIVRO
document.addEventListener("click", function (event) {

    const botao = event.target;

    if (botao.textContent === "Reservar") {
        trocaClasse(botao, "btn-reservar", "btn-reservado", "Reservado");

        const livro = botao.closest(".livro");
        const destino = document.querySelector('.grade-reservados');

        enviarLivroReservar(livro, destino);

        const botaoDevolver = criarbotao()
        adicionarbotao(botaoDevolver, livro);

    }

});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//LÓGICA PARA DEVOLVER O LIVRO
document.addEventListener("click", function (event) {

    const botao = event.target;

    if (botao.classList.contains("btn-devolver")) {
        if (botao.textContent === "Devolver") {

            //Lógica para enviar
            const livro = botao.closest(".livro");
            const destino = document.querySelector(".grade");

            enviarLivro(botao, livro, destino, "Devolvido");


            //Linha adicional para mostrar na tela o botao disponiveis de volta
            //closest sobe

            const button = livro.querySelector(".btn-disponiveis");

            if (!button) {
                let botaoDisponiveis = criarbotaoDisponiveis();
                enviarbotaoDisponiveis(botaoDisponiveis, livro);
            }

            setTimeout(function () {
                button.style.display = "block";
            }, 900);

        }
    }
});



//FUNÇÃO DECREMENTAR
function decrementar(button, quantidadeAtual) {
    const quantidade = quantidadeAtual - 1;

    if (quantidade <= 0) {
        return button.textContent = "NÃO HÁ LIVROS";
    }

    return button.textContent = `DISPONIVEIS: ${quantidade}`;
}



//FUNÇÕES

//ENVIA LIRVRO PARA O DESTINO
function enviarLivroReservar(livro, destino) {
    setTimeout(function () {
        destino.appendChild(livro);
    }, 900);
}

//CRIA O botao BTN-DEVOLVER
function criarbotao() {
    let botaoDevolver = document.createElement("button");
    botaoDevolver.textContent = "Devolver";
    botaoDevolver.classList.add("btn-devolver");
    return botaoDevolver
}

//ENVIA O botao PARA O DESTINO
function adicionarbotao(botao, destino) {
    setTimeout(function () {
        destino.appendChild(botao)
    }, 900)
}

//FUNCÕES

//FUNÇÃO QUE CAPTURA A QUANTIADE ATUAL DE LIVROS DISPONIVEIS
function capturaQuantidadeAtual(button) {
    let texto = button.textContent;
    let partes = texto.split(":");
    let quantidadeAtual = parseInt(partes[1]);
    return quantidadeAtual;
}

//FUNÇÃO QUE INCREMENTA + 1 À QUANTIADE ATUAL DE LIVROS DISPONIVEIS
function incrementar(button, quantidadeAtual) {
    const quantidade = quantidadeAtual + 1;
    return button.textContent = `DISPONIVEIS: ${quantidade}`;
}


//FUNÇÕES

//FUNÇÃO QUE ALTERA A CLASSE DO ELEMENTO
//USADA ATUALMENTE NO LISTENER DEVOLVER E RESERVAR
function trocaClasse(elemento, antiga, nova, texto) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
    elemento.textContent = texto;
}

//FUNÇAO QUE ENVIA O LIVRO PARA GRADE/DESINO
function enviarLivro(botao, livro, destino, texto) {
    setTimeout(function () {
        //envio o livro para grade
        destino.appendChild(livro);

        //Troca de classe 
        const btnReservado = livro.querySelector(".btn-reservado");
        if (btnReservado) {
            trocaClasse(btnReservado, "btn-reservado", "btn-reservar", "Reservar");
        };

        //Oculto o botão 
        botao.classList.add("btn-ocultar");

    }, 900);
    botao.textContent = texto;
}

//FUNÇÃO QUE CRIA UM BOTÃO (DISPONIVEIS)
function criarbotaoDisponiveis() {
    let botaoDisponiveis = document.createElement("button");
    botaoDisponiveis.textContent = "Disponiveis: 2";
    botaoDisponiveis.classList.add("btn-disponiveis");

    return botaoDisponiveis
}

//ENVIA O botao (DISPONIVEIS)
function enviarbotaoDisponiveis(botao, livro) {
    setTimeout(function () {
        //envio o botao para o livro
        livro.appendChild(botao);

    }, 900);
}
