const p1Button = document.querySelector('#p1Button');
const p21Button = document.querySelector('#p2Button');
const scoreDisplayP1 = document.querySelector('#scoreDisplayP1');
const scoreDisplayP2 = document.querySelector('#scoreDisplayP2');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#select');

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        scorePlayer1++;
        if (scorePlayer1 === winningScore) {
            isGameOver = true;
            scoreDisplayP1.classList.add('green');
            scoreDisplayP2.classList.add('red');
        }
        scoreDisplayP1.textContent = scorePlayer1;
    }
})

p21Button.addEventListener('click', function () {
    if (!isGameOver) {
        scorePlayer2++;
        if (scorePlayer2 === winningScore) {
            isGameOver = true;
            scoreDisplayP2.classList.add('green');
            scoreDisplayP1.classList.add('red');
        }
        scoreDisplayP2.textContent = scorePlayer2;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scoreDisplayP1.textContent = '0';
    scoreDisplayP2.textContent = '0';
    scoreDisplayP1.classList.remove('green','red');
    scoreDisplayP2.classList.remove('green','red');
}