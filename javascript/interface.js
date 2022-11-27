let mostrador = document.getElementById("mostrador");
let reiniciar = document.getElementById("reiniciar");
let jogadorX = document.getElementById("jogadorX");
let jogadorO = document.getElementById("jogadorO");

jogadorO.innerHTML = o;
jogadorX.innerHTML = x;

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

function handleClick() {


    if (playerTime == 0 && gameOver != true) {
        if (this.innerHTML == '') {
            this.innerHTML = `<div class="x rm"></div>`;
            board[this.id] = 'x';
            checkWin();
            if (gameOver == true) {
                mostrador.innerHTML = `O jogador "${symbols[playerTime]}" venceu o Jogo.`
            } else {
                checkempate();
                if (empate == true) {
                    mostrador.innerHTML = 'Opa, deu empate';
                    empate = false;
                } else {
                    playerTime = 1;
                    mostrador.innerHTML = `É a vez do jogador <h1>${symbols[playerTime]}</h1>`;
                }
            }
        }
    } else {
        if (this.innerHTML == '' && gameOver != true) {
            this.innerHTML = `<div class="o rm"></div>`;
            board[this.id] = 'o';
            checkWin();
            if (gameOver == true) {
                mostrador.innerHTML = `O jogador "${symbols[playerTime]}" venceu o Jogo.`
            } else {
                checkempate();
                if (empate == true) {
                    mostrador.innerHTML = 'Opa, deu empate';
                    empate = false;
                } else {
                    playerTime = 0;
                    mostrador.innerHTML = `É a vez do jogador <h1>${symbols[playerTime]}</h1>`;
                }
            }
        }
    }
}
