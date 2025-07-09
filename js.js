//JS DA ANIMACAO scroll suave até uma âncora

// Seleciona todos os links <a> cujo atributo href começa com "#"
// Isso indica âncoras internas (ex: #sobre, #contato)
document.querySelectorAll('a[href^="#"]').forEach(link => {

    // Para cada link encontrado, adiciona um ouvinte de clique
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão (pular direto pro destino)

        // Pega o alvo (seção) baseado no href do link clicado
        const target = document.querySelector(this.getAttribute('href'));

        // Define um deslocamento, geralmente usado para compensar um header fixo
        const offset = 80;

        // Posição do topo do body em relação à viewport (normalmente 0)
        const bodyRect = document.body.getBoundingClientRect().top;

        // Posição da seção alvo em relação à viewport
        const elementRect = target.getBoundingClientRect().top;

        // Calcula a posição final para onde deve rolar, ajustado pelo offset
        const position = elementRect - bodyRect - offset;

        // Executa o scroll suave até a posição calculada
        window.scrollTo({
            top: position,
            behavior: 'smooth' // animação suave
        });

    });
});

//JS DO PRELOADER

// Quando todo o conteúdo da página (incluindo imagens, CSS, scripts) estiver completamente carregado...
//window.addEventListener("load", function () {

// Pegamos a <div> com id "preloader"
//const preloader = document.getElementById("preloader");

// Garante que o preloader esteja visível (opcional, caso queira controlar a opacidade)
//preloader.style.opacity = "0.96";

// Após 5 segundos (5000 milissegundos), o preloader é escondido da tela
//setTimeout(() => {
//    preloader.style.display = "none"; // remove visualmente o elemento
//  }, 4000); // tempo de espera antes de sumir
//});




//js do botao reservar


// 1. Pega todos os botões
const botoes = document.querySelectorAll('.btn-ler');

// 2. Para cada botão:
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {

        //  Verifica se o botão está com texto "Reservar"
        if (botao.textContent === "Reservar") {
            botao.textContent = "Reservado";

            setTimeout(function () {
                //Encontra o elemento pai do botão que tem a classe "livro"
                const livro = botao.closest('.livro');

                // Some com o livro da tela
                if (livro) {
                    livro.style.display = "none";
                }

            }, 600); //espera 0.6 segundos
        }
    });
});


