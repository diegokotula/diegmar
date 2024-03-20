const botoes = document .querySelectorAll(".botao");
for (let i=0; i < boteos.length; i++){
    botoes [i].onclick = function() {
        for (let j=0; j<botoes.length; j++){
             boteos[j].classList.remove ("ativo");
        }
        botoes [i].classList.add("ativo")
    }
}