let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['X', 'O'];
let gameOver = false;
let empate = false;


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


function checkWin() {
    if (board[0] == board[1] && board[1] == board[2] && board[0] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[3] == board[4] && board[4] == board[5] && board[3] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[6] == board[7] && board[7] == board[8] && board[6] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[0] == board[3] && board[3] == board[6] && board[0] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[1] == board[4] && board[4] == board[7] && board[1] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[2] == board[5] && board[5] == board[8] && board[2] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[0] == board[4] && board[4] == board[8] && board[0] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    } else if (board[2] == board[4] && board[4] == board[6] && board[2] != '') {
        gameOver = true;
        reiniciar.style.display = "initial";
    }
}



function checkempate() {
    if (board[0] != '' && board[1] != '' && board[2] != '' && board[3] != '' && board[4] != '' && board[5] != '' && board[6] != '' && board[7] != '' && board[8] != '') {
        empate = true;
        reiniciar.style.display = 'initial';
        board = ['', '', '', '', '', '', '', '', ''];

    }
}