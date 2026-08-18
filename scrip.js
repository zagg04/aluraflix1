const dadosCampanhas = {
    "2026": {
        titulo: "ESPANHA (2026)",
        texto: "Bicampeonato em solo norte-americano! A Espanha fez uma campanha impecável. Nas fases finais, eliminou forças europeias e venceu a Argentina por 1 a 0 na prorrogação no MetLife Stadium, com gol decisivo de Ferran Torres.",
        imagem: https://www.portalbenicio.com.br/espanha-e-campea-da-copa-do-mundo-2026/,
        status: "Campeã Invicto",
        sede: "EUA / MEX / CAN"
    },
    "2022": {
        titulo: "ARGENTINA (2022)",
        texto: "A consagração de Lionel Messi no Catar. A Argentina superou a derrota na estreia, venceu batalhas épicas no mata-mata e conquistou o tri em uma final inesquecível contra a França decidida nos pênaltis.",
        imagem: https://gazetaregional.com.br/wp-content/uploads/2022/12/selecao-argentina-camepa-da-copa-22.jpg,
        status: "Campeã (Pênaltis)",
        sede: "Catar"
    },
    "2018": {
        titulo: "FRANÇA (2018)",
        texto: "Com um futebol veloz e eficiente comandado por Mbappé e Griezmann, a seleção francesa conquistou o bicampeonato mundial na Rússia, superando a Croácia por 4 a 2 na decisão.",
        imagem: https://assets.goal.com/images/v3/bltd17be07c2d0d2f35/GettyImages-999564106_(1).jpg?auto=webp&format=pjpg&width=640&quality=60a2b0a7r0e4ec1vmjyxk3akyub,
        status: "Campeã Regular",
        sede: "Rússia"
    },
    "2002": {
        titulo: "BRASIL (2002)",
        texto: "O Pentacampeonato perfeito na Ásia: 7 jogos, 7 vitórias. O trio 'R' (Ronaldo, Rivaldo e Ronaldinho) deu um show e o Fenômeno definiu a final contra a Alemanha com 2 gols.",
        imagem: "https://via.placeholder.com/600x350/0f172a/ffcc00?text=BRASIL+2002",
        status: "100% de Aproveitamento",
        sede: "Japão / Coreia do Sul"
    },
    "1970": {
        titulo: "BRASIL (1970)",
        texto: "Considerada a maior seleção de todos os tempos. Pelé, Jairzinho, Tostão, Gérson e Rivellino deram um espetáculo no México, culminando no 4 a 1 sobre a Itália na decisão.",
        imagem: "https://via.placeholder.com/600x350/0f172a/ffcc00?text=BRASIL+1970",
        status: "Tricampeonato Definitivo",
        sede: "México"
    },
    "1930": {
        titulo: "URUGUAI (1930)",
        texto: "O primeiro capítulo da história das Copas. Sediando o torneio, o Uruguai venceu todos os confrontos e superou a rival Argentina na grande final por 4 a 2 no Estádio Centenário.",
        imagem: "https://via.placeholder.com/600x350/0f172a/e2e8f0?text=URUGUAI+1930",
        status: "Primeiro Campeão",
        sede: "Uruguai"
    }
};

function atualizarCampanha() {
    const select = document.getElementById("select-ano");
    const ano = select.value;
    const dados = dadosCampanhas[ano];

    if (dados) {
        document.getElementById("titulo-campeao").innerText = dados.titulo;
        document.getElementById("detalhe-campanha").innerText = dados.texto;
        document.getElementById("img-campeao").src = dados.imagem;
        document.getElementById("img-campeao").alt = "Campeão " + ano;

        const statBoxes = document.querySelectorAll(".stat-box strong");
        if (statBoxes.length >= 2) {
            statBoxes[0].innerText = dados.status;
            statBoxes[1].innerText = dados.sede;
        }
    }
}
