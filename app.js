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
const drawPhrase = "It's a draw! Please try again.";


function rockOutcomes() {
    let num = Math.floor(Math.random() * choices.length);
    statusDisplay.innerHTML = `The CPU chose ${choices[num]}`;
    if (num === 2) {
        setTimeout(() => statusDisplay.innerHTML = `${phrase1} ${winningPhrase}`, 1000);
    } if (num === 1) {
        setTimeout(() => statusDisplay.innerHTML = `${phrase2} ${losingPhrase}`, 1000);
    } if (num === 0) {
        setTimeout(() => statusDisplay.innerHTML = `${drawPhrase}`, 1000);
    };
    pRockBtn.disabled = true;
    pPaperBtn.disabled = true;
    pScissorsBtn.disabled = true;
};

pRockBtn.addEventListener('click', () => rockOutcomes());

function paperOutcomes() {
    let num = Math.floor(Math.random() * choices.length);
    statusDisplay.innerHTML = `The CPU chose ${choices[num]}`;
    if (num === 2) {
        setTimeout(() => statusDisplay.innerHTML = `${phrase3} ${losingPhrase}`, 1000);
    } if (num === 1) {
        setTimeout(() => statusDisplay.innerHTML = `${drawPhrase}`, 1000);
    } if (num === 0) {
        setTimeout(() => statusDisplay.innerHTML = `${phrase2} ${winningPhrase}`, 1000);
    };
    pRockBtn.disabled = true;
    pPaperBtn.disabled = true;
    pScissorsBtn.disabled = true;
}

pPaperBtn.addEventListener('click', () => paperOutcomes());

function scissorsOutcomes() {
    let num = Math.floor(Math.random() * choices.length);
    statusDisplay.innerHTML = `The CPU chose ${choices[num]}`;
    if (num === 2) {
        setTimeout(() => statusDisplay.innerHTML = `${drawPhrase}`, 1000);
    } if (num === 1) {
        setTimeout(() => statusDisplay.innerHTML = `${phrase3} ${winningPhrase}`, 1000);
    } if (num === 0) {
        setTimeout(() => statusDisplay.innerHTML = `${phrase1} ${losingPhrase}`, 1000);
    };
    pRockBtn.disabled = true;
    pPaperBtn.disabled = true;
    pScissorsBtn.disabled = true;
}

pScissorsBtn.addEventListener('click', () => scissorsOutcomes());



resetBtn.addEventListener('click', function () {
    statusDisplay.innerHTML = 'Choose an option to play against the CPU.';
    pRockBtn.disabled = false;
    pPaperBtn.disabled = false;
    pScissorsBtn.disabled = false;
});