// carregar o html do header

function carregarHeader() {
    fetch("/src/components/header.html")
        .then(response => response.text()) //transforma o html em texto
        .then(html => {
            //insere o html na div desejada.
            document.getElementById("header").innerHTML = html;
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