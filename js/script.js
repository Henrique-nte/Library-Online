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

//Lógica da página de Autores

const autores = [
    {
        nome: "Machado de Assis",
        nacionalidade: "Brasileira",
        Imagem: "/img/autores/Machado De Assis.jpeg",
        resumo: "Joaquim Maria Machado De Assis foi um escritor brasileiro amplamente conhecido pelos suas obras: 'Memórias Póstumas de Brás Cubas', 'Dom casmurro'."
    },

    {
        nome: "Clarice Lispector",
        nacionalidade: "Brasileira",
        Imagem: "/img/autores/Clarice Lispector.jpg",
        resumo: "Conhecida por uma escrita introspectiva e existencial, explorou os sentimentos e a identidade com profundidade psicológica."
    },
    {
        nome: "Carlos Drummond de Andrade",
        nacionalidade: "Brasileira",
        Imagem: "/img/autores/Carlos Drummond de Andrade.jpg",
        resumo: "Poeta modernista, abordou temas do cotidiano, da solidão e da condição humana com linguagem simples e reflexiva."
    },
    {
        nome: "Fiódor Dostoiévski",
        nacionalidade: "Russo",
        Imagem: "/img/autores/Fiódor Dostoiévski.jpg",
        resumo: "Foda."
    },
    {
        nome: "Fernando Pessoa",
        nacionalidade: "Português",
        Imagem: "/img/autores/Fernando Pessoa.jpg",
        resumo: "Criou múltiplos heterônimos para expressar diferentes visões de mundo; é um dos maiores nomes da literatura portuguesa."
    },
    {
        nome: "João Guimarães Rosa",
        nacionalidade: "Brasileira",
        Imagem: "/img/autores/João Guimarães Rosa.jpg",
        resumo: "Revolucionou a linguagem literária com vocabulário regional e neologismos; retratou o sertão com profundidade filosófica."
    }
];

const livros = [
    {
        autor: "Machado de Assis",
        titulo: "Memórias Póstumas de Brás Cubas",
        imagem: "/img/livros/Memórias Póstumas de Brás Cubas.jpg",
    },
    {
        autor: "Machado de Assis",
        titulo: "Dom Casmurro",
        imagem: "/img/livros/Dom Casmurro.jpg",
    },
    {
        autor: "Clarice Lispector",
        titulo: "A hora da estrela",
        imagem: "/img/livros/A hora da estrela.jpg",
    },
    {
        autor: "J.R.R. Tolkien",
        titulo: "A sociedade do Anel",
        imagem: "/img/livros/A sociedade do Anel.jpg",
    },
    {
        autor: "Fiódor Dostoiévski",
        titulo: "Crime e Castigo",
        imagem: "/img/livros/Crime e Castigo.jpg",
    },
    {
        autor: "Bram Stoker",
        titulo: "Drácula",
        imagem: "/img/livros/Dracula.jpg",
    },
    {
        autor: "Emily Brontë",
        titulo: "O morro dos ventos uivantes",
        imagem: "/img/livros/O morro dos ventos uivantes.jpg",
    },
    {
        autor: "Fiódor Dostoiévski",
        titulo: "Os irmãos Karamázov",
        imagem: "/img/livros/Os irmãos Karamázov.jpg",
    },
    {
        autor: "Victor Hugo",
        titulo: "Os miseráveis",
        imagem: "/img/livros/Os miseráveis.jpg",
    },
    {
        autor: "Fernando Pessoa",
        titulo: "Livro do desassossego",
        imagem: "/img/livros/Livro do desassossego.jpg",
    },
    {
        autor: "Carlos Drummond de Andrade",
        titulo: "Alguma poesia",
        imagem: "/img/livros/alguma poesia.jpg",
    },
];

// Espera o carregamento completo do HTML antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

    // Pega os parâmetros da URL (exemplo: autores.html?nome=Machado%20de%20Assis)
    const params = new URLSearchParams(window.location.search);

    // Capturo o "nome" da URL
    const nome = params.get("nome");

    // Procura no array 'autores' um objeto onde o nome seja exatamente igual ao nome da URL
    const autor = autores.find(a => a.nome === nome);

    // Se encontrou um autor correspondente:
    if (autor) {
        // Atualiza o nome do autor na página
        document.getElementById("autor-nome").textContent = autor.nome;

        // Atualiza a nacionalidade do autor na página, com emoji fixo de Brasil (ajustar isso se for autor estrangeiro)
        document.getElementById("autor-nacionalidade").textContent = `🇧🇷 ${autor.nacionalidade}`;

        // Atualiza o resumo/bio do autor na página
        document.getElementById("autor-resumo").textContent = autor.resumo;

        // Atualiza a imagem do autor na página
        document.getElementById("autor-imagem").src = autor.Imagem;
        document.getElementById("autor-imagem").alt = `Imagem de ${autor.nome}`;

        //Lógica dos livros
        // Agora: mostra as obras do autor

        const livrosDoAutor = livros.filter(livro => livro.autor === nome);

        const container = document.getElementById("grade-livros-autores");
        console.log(container)

        container.innerHTML = ""; // limpa se tiver algo

        if (livrosDoAutor.length > 0) {
            livrosDoAutor.forEach(livro => {
                const livroDiv = document.createElement("div");
                livroDiv.classList.add("livro"); // você pode estilizar isso no CSS

                const img = document.createElement("img");
                img.src = livro.imagem;
                img.alt = livro.titulo;
                img.title = livro.titulo;


                //const titulo = document.createElement("p");
                //titulo.textContent = livro.titulo;

                livroDiv.appendChild(img);
                //livroDiv.appendChild(titulo);
                container.appendChild(livroDiv);
            });
        } else {
            container.textContent = "Nenhuma obra encontrada para este autor.";
        }


    } else {
        // Se não encontrou, exibe mensagem de erro simples
        document.body.innerHTML = "<h2>Autor não encontrado</h2>";
    }
});


