function carregarNoticia() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")); // Ex: ?id=3

    if (isNaN(id)) {
        document.getElementById("noticia-container").innerHTML = "<p>Notícia não encontrada.</p>";
        return;
    }

    fetch("/assets/data/news_card.json")
        .then(response => response.json())
        .then(noticias => {
            const noticia = noticias[id];
            if (!noticia) {
                document.getElementById("noticia-container").innerHTML = "<p>Notícia não encontrada.</p>";
                return;
            }

            exibirNoticia(noticia);
        })
        .catch(error => {
            console.error("Erro ao carregar notícia:", error);
        });
}

function exibirNoticia(noticia) {
    document.title = noticia.titulo;
    const container = document.getElementById("noticia-container");

    container.innerHTML = `
    <div class="noticia-completa col-8 mx-auto p-2">
            <h1 class="text-center my-3 text-light fw-bold">${noticia.titulo}</h1>
            <img class="image-fluid col-12 rounded" src="${noticia.imagem}" alt="${noticia.titulo}" class="img-fluid mb-3" >
            <p class = "fs-5 my-3 text-light">${noticia.texto.replace(/\n/g, "<br>")}</p>
            <a class="btn btn-news fw-bold my-3" href="news.html">← Voltar</a>
        </div>
    `;
}

carregarNoticia();
