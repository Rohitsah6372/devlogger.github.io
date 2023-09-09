const settingsBtn = document.getElementById("settings-btn");
const setting = document.getElementById("setting");
const word = document.getElementById("word");
const text = document.getElementById("text");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsForm = document.getElementById("settings-form");
const scoreEl = document.getElementById("score");
const difficultySelect = document.getElementById("difficulty");

//List of word for game
const words = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "orange",
  "strawberry",
  "kiwi",
  "pineapple",
  "watermelon",
  "mango",
  "blueberry",
  "raspberry",
  "peach",
  "pear",
  "lemon",
  "lime",
  "coconut",
  "fig",
  "plum",
  "pomegranate",
];

//Intit word
let randomWord;

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//Init score
let score = 0;

//Init Time
let time = 10;

//focus on text on start
text.focus();

//start counting down (every 1s its gonna call function updateTime())
const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//updating score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//Update Time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);

    //end game
    gameOver();
  }
}

//game over show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final Score is ${score}</p>
    <button id='start-again' onclick="location.reload()">Start Again</button>
    `;
  endgameEl.style.display = "flex";
}

//to add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function checkInput(e) {
  e.preventDefault();
  const inputValue = e.target.value;

  if (inputValue === randomWord) {
    addWordToDOM();

    updateScore();
    e.target.value = "";
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
}

addWordToDOM();

//Event listerner for checking the input
text.addEventListener("input", checkInput);

//setting btn Click
settingsBtn.addEventListener("click", () => {
  settingsBtn.classList.toggle("hide");
});

//setting select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  console.log(difficulty);

  localStorage.setItem("difficulty", difficulty);
});
