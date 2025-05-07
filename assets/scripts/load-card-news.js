function carregarJson() {
    fetch("/assets/data/news_card.json")
    .then(response => response.json())
    .then(noticias => {
        console.log(noticias);
        gerarCardnew(noticias);
    })
    .catch(error => console.error("Não foi possivel carregar o arquivo Json", error));
}

function gerarCardnew(noticias) {
    const container = document.getElementById("news");
    
    noticias.forEach((noticia, index) => {
        const card_div = document.createElement('div');
        card_div.classList.add('card', 'border-0', 'd-flex', 'justify-content-between', 'text-center', 'mb-4', 'p-2');
        card_div.style.width = '250px';
        
        card_div.innerHTML = `
        <img class="image-thumbnail rounded" src="${noticia.imagem}" alt="">
        <h3 class="fs-5 game-text m-0 mt-3">${noticia.titulo}</h3>
        <a href="news-full.html?id=${index}" class="btn btn-secondary mt-3">Ler mais</a>
        `;
        
        container.appendChild(card_div);
    });
}
carregarJson();