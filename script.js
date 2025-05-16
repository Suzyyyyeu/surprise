
function abrirCarta() {
    document.getElementById("mensagem").style.display = "block";
    document.getElementById("instrucoes").style.display = "none";
    document.getElementById("carta").style.display = "none";

    // Começa a animação de corações
    setInterval(() => {
        const coracao = document.createElement("div");
        coracao.classList.add("coracao");
        coracao.innerText = "💖";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.fontSize = Math.random() * 20 + 20 + "px";
        document.getElementById("coracoes").appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }, 300);
}
