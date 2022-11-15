let mostrador = document.getElementById("mostrador");
let reiniciar = document.getElementById("reiniciar");
// let jogadorX = document.getElementById("jogadorX");
// let jogadorY = document.getElementById("jogadorY");

document.addEventListener("DOMContentLoaded", () => {
    mostrador.innerHTML = `É a vez do jogador <h1>${symbols[playerTime]}</h1>`;

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })

})



reiniciar.addEventListener('click', () => {
    let squares = document.querySelectorAll(".rm")

    squares.forEach((square) => {
        square.remove();
        reiniciar.style.display = 'none'
        mostrador.innerHTML = `É a vez do jogador <h1>${symbols[playerTime]}</h1>`;
        board = ['', '', '', '', '', '', '', '', ''];

    })
    gameOver = false

})