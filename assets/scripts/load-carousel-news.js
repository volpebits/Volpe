function carregarNoticia() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")); // Ex: ?id=3
    fetch("/assets/data/carousel-news.json")
        .then(res => res.json())
        .then(noticias => {
            const carouselInner = document.querySelector("#carouselExampleCaptions .carousel-inner");
            const indicators = document.querySelector("#carouselExampleCaptions .carousel-indicators");

            // Limpa conteúdo estático antigo
            carouselInner.innerHTML = "";
            indicators.innerHTML = "";

            noticias.forEach((noticia, index) => {
                // Criar indicador (bolinha)
                const button = document.createElement("button");
                button.type = "button";
                button.setAttribute("data-bs-target", "#carouselExampleCaptions");
                button.setAttribute("data-bs-slide-to", index);
                button.setAttribute("aria-label", `Slide ${index + 1}`);
                if (index === 0) {
                    button.classList.add("active");
                    button.setAttribute("aria-current", "true");
                }
                indicators.appendChild(button);

                // Criar slide
                const item = document.createElement("div");
                item.classList.add("carousel-item");
                if (index === 0) item.classList.add("active");

                // Conteúdo do slide com link para a notícia completa
                item.innerHTML = `
        <a href="noticia.html?id=${index}" style="color: inherit; text-decoration: none;">
        <img src="${noticia.imagem}" class="d-block w-100" alt="${noticia.titulo}" style="max-height: 400px; object-fit: cover;">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>${noticia.titulo}</h5>
            <p>${noticia.texto.slice(0, 100)}...</p>
        </div>
        </a>
    `;

                carouselInner.appendChild(item);
            });
        })
        .catch(err => console.error("Erro ao carregar notícias do carrossel:", err));

    if (isNaN(id)) {
        document.getElementById("noticia-container").innerHTML = "<p>Notícia não encontrada.</p>";
        return;
    }

    fetch("/assets/data/carousel-news.json")
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
    <div class="position-relative">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="img-fluid w-100" style="max-height: 400px; object-fit: cover; filter: brightness(70%);">
        <h1 class="position-absolute bottom-0 start-0 text-white p-4 m-0 w-100" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
        ${noticia.titulo}
        </h1>
    </div>
    <div class="mt-4 px-3">
        <p>${noticia.texto.replace(/\n/g, "<br>")}</p>
        <a href="index.html" class="btn btn-outline-secondary mt-3">← Voltar</a>
    </div>
    `;
}

carregarNoticia();
