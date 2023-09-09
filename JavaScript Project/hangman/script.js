const wordEl = document.getElementById("word");
const wrongLetterEl = document.getElementById("wrong-letter");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// console.log(selectedWord);

const correctLetters = ["w", "i", "z"];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
        <span class=""letter >
        ${correctLetters.include(letter) ? letter : ""}</span>
        `
      )
      .join("")}
    `;

  console.log(wordEl.innerText);
}
