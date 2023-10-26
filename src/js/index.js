const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const LinkDoVideo = video.src;  


//OBJATIVO 01 - clicar no botão "veja trailer", abrir a modal co o vídeo do trailer

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela 
    modal.classList.add("aberto");
    video.setAttribute("src", LinkDoVideo)
}); 

botaoFecharModal.addEventListener("click", ()=> {
    //passo 03 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});