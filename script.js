const desafios = [
    "Coma sua comida favorita hoje",
    "Assista um filme",
    "Leia 10 páginas de um livro",
    "Caminhe por 20 minutos",
    "Jogue seu jogo favorito",
    "Vá tomar um sorvete",
    "Passe 2 horas sem redes sociais",
    "Escute um álbum inteiro de músicas",
    "Beba água!",
    "Tire um cochilo",
    "Mande um pix para o professor Lucas"

];

const botao = document.getElementById("btnSortear");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");
let giros = 0;

function sortear() {
    const indice = Math.floor(Math.random() *desafios.length);
    resultado.textContent = desafios[indice];
    giros++;
    contador.textContent = "Giros: " + giros;

}

botao.addEventListener("click", sortear);
