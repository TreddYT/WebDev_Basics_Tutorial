let secretNumber;
let attempts = 0;
let bestScore = null;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const messageText = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const bestText = document.getElementById("best");

const randomInt = () => {
    const rand = Math.random();
    const result = rand * 100 + 1;
    return Math.floor(result);
};

const initGame = () => {
    secretNumber = randomInt();
    attempts = 0;
    attemptsText.textContent = attempts;
    showMessage("Make your first guess");
    guessInput.value = "";
    guessInput.disabled = false;
    checkBtn.disabled = false;

    console.log("Secret number: ", secretNumber);
};

const handleGuess = () => {
    const raw = guessInput.value;
    const guess = Number(raw);
    
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        showMessage("Enter a whole number between 1 and 100.", "error");
        return;
    };

    attempts += 1;
    attemptsText.textContent = attempts;

    if (guess === secretNumber) {
        showMessage("Correct! The number was " + secretNumber, "success");
        endRound();
    } else if (guess < secretNumber) {
        showMessage("Too low. Try a higher number.", "warn");
    } else {
        showMessage("Too high. Try a lower number.", "warn");
    };
};

const showMessage = (text, type) => {
    messageText.textContent = text;
    messageText.className = "message " + type;
};

const endRound = () => {
    if (bestScore === null || attempts < bestScore) {
        bestScore = attempts;
        bestText.textContent = bestScore;
    };

    guessInput.disabled = true;
    checkBtn.disabled = true;
};

checkBtn.addEventListener("click", handleGuess);
resetBtn.addEventListener("click", initGame);

guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleGuess();
    };
});

initGame();