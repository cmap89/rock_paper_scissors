const choices = ['rock', 'paper', 'scissors'];

const resetBtn = document.querySelector('#reset');
const statusDisplay = document.querySelector('#prompts');


const pRockBtn = document.querySelector('#rock');
const pPaperBtn = document.querySelector('#paper');
const pScissorsBtn = document.querySelector('#scissors');

const phrase1 = 'Rock breaks Scissors.';
const phrase2 = 'Paper covers Rock.';
const phrase3 = 'Scissors cuts Paper.';

const winningPhrase = 'You win! Congratulations!';
const losingPhrase = 'Sorry, try again.';
const gameLosingPhrase = 'Sorry, you lost... :(';
const drawPhrase = "It's a draw! Please try again.";

const scorePhrase = document.querySelector('#scoreDisp');
const pScoreDisp = document.querySelector('#pScoreCount');
const cpuScoreDisp = document.querySelector('#cpuScoreCount');
let p1Score = 0;
let cpuScore = 0;

function gameOver() {
    if (p1Score === 5 || cpuScore === 5) {
        scorePhrase.innerHTML = 'Final Score:'
        pRockBtn.disabled = true;
        pPaperBtn.disabled = true;
        pScissorsBtn.disabled = true;

    };

    if (p1Score === 5) {
        statusDisplay.innerHTML = `${winningPhrase}`
    } else if (cpuScore === 5) {
        statusDisplay.innerHTML = `${gameLosingPhrase}`
    };
}

function rockOutcomes() {
    let num = Math.floor(Math.random() * choices.length);
    statusDisplay.innerHTML = `The CPU chose ${choices[num]}`;
    if (num === 2) {
        p1Score += 1;
        setTimeout(() => statusDisplay.innerHTML = `${phrase1} ${winningPhrase}`, 900);
    } if (num === 1) {
        cpuScore += 1;
        setTimeout(() => statusDisplay.innerHTML = `${phrase2} ${losingPhrase}`, 900);
    } if (num === 0) {
        setTimeout(() => statusDisplay.innerHTML = `${drawPhrase}`, 900);
    };
    setTimeout(() => pScoreDisp.innerHTML = `Player One: ${p1Score}`, 900);
    setTimeout(() => cpuScoreDisp.innerHTML = `CPU: ${cpuScore}`, 900);
    setTimeout(gameOver, 900)
};

pRockBtn.addEventListener('click', rockOutcomes);

function paperOutcomes() {
    let num = Math.floor(Math.random() * choices.length);
    statusDisplay.innerHTML = `The CPU chose ${choices[num]}`;
    if (num === 2) {
        cpuScore += 1;
        setTimeout(() => statusDisplay.innerHTML = `${phrase3} ${losingPhrase}`, 900);
    } if (num === 1) {
        setTimeout(() => statusDisplay.innerHTML = `${drawPhrase}`, 900);
    } if (num === 0) {
        p1Score += 1;
        setTimeout(() => statusDisplay.innerHTML = `${phrase2} ${winningPhrase}`, 900);
    };
    setTimeout(() => pScoreDisp.innerHTML = `Player One: ${p1Score}`, 900);
    setTimeout(() => cpuScoreDisp.innerHTML = `CPU: ${cpuScore}`, 900);
    setTimeout(gameOver, 900)
}

pPaperBtn.addEventListener('click', paperOutcomes);

function scissorsOutcomes() {
    let num = Math.floor(Math.random() * choices.length);
    statusDisplay.innerHTML = `The CPU chose ${choices[num]}`;
    if (num === 2) {
        setTimeout(() => statusDisplay.innerHTML = `${drawPhrase}`, 900);
    } if (num === 1) {
        p1Score += 1;
        setTimeout(() => statusDisplay.innerHTML = `${phrase3} ${winningPhrase}`, 900);
    } if (num === 0) {
        cpuScore += 1;
        setTimeout(() => statusDisplay.innerHTML = `${phrase1} ${losingPhrase}`, 900);
    };
    setTimeout(() => pScoreDisp.innerHTML = `Player One: ${p1Score}`, 900);
    setTimeout(() => cpuScoreDisp.innerHTML = `CPU: ${cpuScore}`, 900);
    setTimeout(gameOver, 900)
}

pScissorsBtn.addEventListener('click', scissorsOutcomes);



resetBtn.addEventListener('click', function () {
    statusDisplay.innerHTML = 'Choose an option to play against the CPU.';
    p1Score = 0;
    cpuScore = 0;
    pScoreDisp.innerHTML = `Player One: ${p1Score}`;
    cpuScoreDisp.innerHTML = `CPU: ${cpuScore}`;
    pRockBtn.disabled = false;
    pPaperBtn.disabled = false;
    pScissorsBtn.disabled = false;
});