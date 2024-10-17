const play1 = document.querySelector('#green');
const play2 = document.querySelector('#blue');
const reset = document.querySelector('#red');
const play1Point = document.querySelector('#play1Points');
const play2Point = document.querySelector('#play2Points');
const selectedValue = document.querySelector('#selectedValue');
const container = document.querySelector('#container');

let gameOver = false;

const message = document.createElement('p')
message.style.color = 'gold';
message.style.textAlign = 'center';
message.style.fontSize = '1.55em';
play1.addEventListener('click', function () {
    if (gameOver) return;
    let currentPointsPlay1 = parseInt(play1Point.innerHTML);
    currentPointsPlay1++;
    play1Point.innerHTML = currentPointsPlay1;
    if (currentPointsPlay1 === parseInt(selectedValue.value)) {
        play1Point.style.color = 'rgb(100, 216, 148)';
        play2Point.style.color = 'rgb(227, 71, 113)';
        message.innerText = "Player 1 WIN !!!"
        gameOver = true;
        play1.disabled = true;
        play2.disabled = true;
        play1.classList.add('disabled');
        play2.classList.add('disabled');
        container.append(message);
    }
})

play2.addEventListener('click', function () {
    if (gameOver) return;
    let currentPointsPlay2 = parseInt(play2Point.innerHTML);
    currentPointsPlay2++;
    play2Point.innerHTML = currentPointsPlay2;
    if (currentPointsPlay2 === parseInt(selectedValue.value)) {
        play1Point.style.color = 'rgb(227, 71, 113)';
        play2Point.style.color = 'rgb(100, 216, 148)';
        gameOver = true;
        play1.disabled = true;
        play2.disabled = true;
        play1.classList.add('disabled');
        play2.classList.add('disabled');
        message.innerText = "Player 2 WIN !!!"
        container.append(message);
    }
})
reset.addEventListener('click', function () {
    play1Point.innerHTML = 0;
    play2Point.innerHTML = 0;
    play1Point.style.color = '';
    play2Point.style.color = '';
    play1.disabled = false;
    play2.disabled = false;
    gameOver = false;
    play1.classList.remove('disabled');
    play2.classList.remove('disabled');
    message.innerText = '';
})