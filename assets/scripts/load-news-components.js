function carregarNoticias() {
    fetch("/assets/data/news_card.json")
        .then(res => res.json())
        .then(noticias => {
            gerarCarrossel(noticias.slice(0, 3));  // só os 3 primeiros para o carrossel
            gerarCards(noticias.slice(3));         // do 4º em diante para os cards
        })
        .catch(err => console.error("Erro ao carregar notícias:", err));
}

function gerarCarrossel(noticias) {
    const carouselInner = document.querySelector("#carouselExampleCaptions .carousel-inner");
    const indicators = document.querySelector("#carouselExampleCaptions .carousel-indicators");

    carouselInner.innerHTML = "";
    indicators.innerHTML = "";

    noticias.forEach((noticia, index) => {
        // Indicadores do carrossel
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

        // Slides do carrossel
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        item.innerHTML = `
        <a href="news-full.html?id=${index}" style="color: inherit; text-decoration: none;">
            <img src="${noticia.imagem}"
            class="d-block w-100" 
            alt="${noticia.titulo}" 
            style="height: 400px; object-fit: cover;">
            <div class="carousel-caption d-block bg-dark bg-opacity-50 rounded p-3">
                <h5>${noticia.titulo}</h5>
                <p>${noticia.texto.slice(0, 100)}...</p>
            </div>
        </a>
    `;
        carouselInner.appendChild(item);
    });
}

function gerarCards(noticias) {
    const container = document.getElementById("news");
    container.innerHTML = ""; // limpa antes de inserir

    noticias.forEach((noticia, index) => {
        const card_div = document.createElement('div');
        card_div.classList.add('card', 'border-0', 'd-flex', 'justify-content-between', 'text-center', 'mb-4', 'p-2');
        card_div.style.width = '250px';

        // Index do card deve considerar que começa a partir do 3º item do array original
        const realIndex = index + 3;

        card_div.innerHTML = `
            <img 
                class="image-thumbnail rounded" 
                src="${noticia.imagem}"
                alt="${noticia.titulo}" 
                style="width: 100%; height: 150px; object-fit: cover;"
            >
            <h3 class="fs-5 game-text m-0 mt-3">${noticia.titulo}</h3>
            <a href="news-full.html?id=${realIndex}" class="btn btn-secondary mt-3">Ler mais</a>
        `;


        container.appendChild(card_div);
    });
}

carregarNoticias();
