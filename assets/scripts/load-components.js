// Função que ativa e desativa o Menu Hamburguer
function ativarMenuHamburguer() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const spans = toggle.querySelectorAll("span");
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('open');
        
        spans[0].classList.toggle("rotate-down");
        spans[1].classList.toggle("fade-out");
        spans[2].classList.toggle("rotate-up");
    });
}

// carregar o html do header
function carregarHeader() {
    fetch("/src/components/header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("header").innerHTML = html;
            ativarMenuHamburguer(); // ⚡ só chama aqui depois do header existir
        })
        .catch(error => console.error("Erro ao carregar header", error));
}

carregarHeader();

//carrega o html do footer

function carregarFooter() {
    fetch("/src/components/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        })

        .catch(error => console.error("erro ao carregar o footer" , error));
}

carregarFooter();