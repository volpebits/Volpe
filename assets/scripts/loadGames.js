function carregarJson() {
    fetch("/assets/data/games.json")
        .then(response => response.json())
        .then(games => {
            console.log(games);
            gerarCards(games)
        })
        .catch(error => console.error("Não foi possivel carregar o arquivo Json", error))
}


function gerarCards(games) {
    const container = document.getElementById("cardsGames");
    
    games.forEach(game => {
        const card_div = document.createElement('div');
        card_div.classList.add('more-container');
        
        card_div.innerHTML = `
        <img src="${game.imagem}" alt="${game.alt}">
        <h3 class="game-text">${game.legenda}</h3>
        `;
        
        container.appendChild(card_div);
    });
    
}
carregarJson();