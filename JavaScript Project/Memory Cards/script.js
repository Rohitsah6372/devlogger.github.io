const cardContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardEl = [];

// Store card data
const cardsData = [
  {
    question: "What must a variable begin with?",
    answer: "A letter, $ or _",
  },
  {
    question: "What is a variable?",
    answer: "Container for a piece of data", // Corrected typo here
  },
  {
    question: "Example of Case Sensitive Variable",
    answer: "thisIsAVariable",
  },
  {
    question: "What is your name?",
    answer: "My name is Rohit Sah",
  },
];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
        <div class="inner-card">
          <div class="inner-card-front">
            <p>${data.question}</p>
          </div>
          <div class="inner-card-back">
            <p>${data.answer}</p>
          </div>
        </div>
  `;

  // Add click event listener to flip the card
  card.addEventListener("click", () => {
    card.classList.toggle("show-answer");
  });

  // Add to DOM cards
  cardEl.push(card);
  cardContainer.appendChild(card);
}

createCards();
