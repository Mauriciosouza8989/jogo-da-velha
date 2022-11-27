let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['X', 'O'];
let gameOver = false;
let empate = false;
let x = 0;
let o = 0







function checkWin() {
    if (board[0] == board[1] && board[1] == board[2] && board[0] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[3] == board[4] && board[4] == board[5] && board[3] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[6] == board[7] && board[7] == board[8] && board[6] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[0] == board[3] && board[3] == board[6] && board[0] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[1] == board[4] && board[4] == board[7] && board[1] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[2] == board[5] && board[5] == board[8] && board[2] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[0] == board[4] && board[4] == board[8] && board[0] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
        reiniciar.style.display = "initial";
    } else if (board[2] == board[4] && board[4] == board[6] && board[2] != '') {
        gameOver = true;
        playerTime == 0 ? x += 1 : o += 1;
        jogadorO.innerHTML = o;
        jogadorX.innerHTML = x
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
