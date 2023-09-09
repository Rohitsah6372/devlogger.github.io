const container = document.getElementById("container");
const main = document.querySelector("main");
const voiceSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./images/one.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./images/two.jpg",
    text: "I'm Hungary",
  },
  {
    image: "./images/three.jpg",
    text: "I'm Tired",
  },
  {
    image: "./images/four.jpg",
    text: "I'm busy",
  },
  {
    image: "./images/five.jpg",
    text: "I'm travelling",
  },
  {
    image: "./images/six.jpg",
    text: "I'm ready",
  },
  {
    image: "./images/seven.jpg",
    text: "I'm dancing",
  },
  {
    image: "./images/eight.jpg",
    text: "I'm walking",
  },
  {
    image: "./images/nine.jpg",
    text: "I'm talking",
  },
  {
    image: "./images/ten.jpg",
    text: "I'm Angry",
  },
];

data.forEach(createBox);

//Create speech boxes
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;

  box.classList.add("div");
  box.innerHTML = `
  <img src="${image}" alt="${text}"/>
  <p class="info">${text}</p>
  `;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    //Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  //@todo - speak event
  main.appendChild(box);
}

//Init speech synth
const message = new SpeechSynthesisUtterance();

//Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voiceSelect.appendChild(option);
  });
}

//set text
function setTextMessage(text) {
  message.text = text;
}

//Speak Text
function speakText() {
  speechSynthesis.speak(message);
}

//set Voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

//voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);

//toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

//change voices
voiceSelect.addEventListener("change", setVoice);

//Read text button
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
