const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Elon Musk",
  "Jeff Bezos",
  "Bernard Arnault & Family",
  "Bill Gates",
  "Mark Zuckerberg",
  "Warren Buffet",
  "Larry Ellison",
  "Larry Page",
  "Sergey Brin",
  "Mukesh Ambani",
];

// Store the list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  // Use spread operator to make a full copy of the array
  [...richestPeople]
    .map((a) => ({
      value: a,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");

  if (dragStartIndex !== dragEndIndex) {
    swapItems(dragStartIndex, dragEndIndex);
  }
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);

  // Update the data-index attributes
  listItems[fromIndex].setAttribute("data-index", toIndex);
  listItems[toIndex].setAttribute("data-index", fromIndex);
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".person-name").innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });

  check.addEventListener("click", checkOrder); // Fixed event name here
}