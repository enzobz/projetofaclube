function atualizarJogos() {
    // Substitua por uma chamada fetch para uma API real se desejar
    const jogos = [
        "Inter 2 x 1 Grêmio",
        "Inter 1 x 0 Juventude",
        "Inter 3 x 2 Flamengo"
    ];
    const ul = document.getElementById('jogos-list');
    ul.innerHTML = '';
    jogos.forEach(jogo => {
        const li = document.createElement('li');
        li.textContent = jogo;
        ul.appendChild(li);
    });
}

function atualizarNoticias() {
    const ul = document.getElementById('noticias-list');
    ul.innerHTML = '<li>Carregando notícias...</li>';

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://ge.globo.com/rss/times/internacional/')
    .then(response => response.json())
    .then(data => {
        const ul = document.getElementById('noticias-list');
        ul.innerHTML = '';
        data.items.slice(0, 5).forEach(noticia => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = noticia.title;
            a.href = noticia.link;
            a.target = "_blank";
            li.appendChild(a);
            ul.appendChild(li);
        });
    })
    .catch(() => {
        const ul = document.getElementById('noticias-list');
        ul.innerHTML = '<li>Não foi possível carregar as notícias.</li>';
    });
}

// Atualiza ao carregar e a cada 60 segundos
atualizarJogos();
atualizarNoticias();
setInterval(atualizarJogos, 60000);
setInterval(atualizarNoticias, 60000);