const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const dummyTransactions = [
//   {
//     id: 1,
//     text: "Flower",
//     amount: -20,
//   },
//   {
//     id: 2,
//     text: "Salary",
//     amount: 380,
//   },
//   {
//     id: 3,
//     text: "Book",
//     amount: -10,
//   },
//   {
//     id: 4,
//     text: "Camera",
//     amount: -150,
//   },
// ];

function updateDOM(b, i, e) {
  balance.innerText = `$${b}`;
  money_plus.innerText = `+$${i}`;
  money_minus.innerText = `-$${e}`;
}

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

function addTransaction(e) {
  e.preventDefault(); // Fixed typo 'preventDedfault' to 'preventDefault'

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Enter the Text and Amount correctly");
  } else {
    const transaction = {
      id: generateID(),
      text: text.value, // Removed the '+' before 'text.value'
      amount: +amount.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateValues();

    updateLocalStorage();

    text.value = "";
    amount.value = "";
  }
}

//remove transaction by id
function removeTransaction(id) {
  //filtering out the transactions whose transaction.id === id

  transactions = transactions.filter((i) => i.id !== id);

  updateLocalStorage();

  init();
}

//generate random ID
function generateID() {
  return Math.floor(Math.random() * 10000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount > 0 ? "+" : "-";

  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })"></button>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((i) => i.amount);

  const balanceValue = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  console.log(balanceValue);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  console.log(income);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + Math.abs(item), 0)
    .toFixed(2);
  console.log(expense);

  updateDOM(balanceValue, income, expense);
}

//Updating the local storage
function updateLocalStorage() {
  //calling the local Storage by using setItem and storing data in the form of string
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener("submit", addTransaction); // Corrected typo 'addTransact' to 'addTransaction'
