const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show_millionaries");
const sort = document.getElementById("sort");
const calc = document.getElementById("calculate_wealth");

RandomUser();
RandomUser();
RandomUser();

let data = [];

async function RandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const response = await res.json();

  const user = response.results[0]; // Use 'response.results[0]' instead of 'data.results[0]'

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.ceil(Math.random() * 1000000),
  };

  addData(newUser);
}

//double the money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

//sorting the data in the descending order
function sortData() {
  data.sort((a, b) => {
    return b.money - a.money;
  });

  updateDOM();
}

function addingNewUser() {
  RandomUser();
}

//showing the millionaries
function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

//total money calculator
function totalMoney() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  console.log(wealth);

  const wealthEle = document.createElement("div");
  wealthEle.innerHTML = `<h3>Total Wealth:<strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEle);
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item, index, arr) => {
    const ele = document.createElement("div");
    ele.classList.add("person");
    ele.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(ele);
  });
}

// formatting money
function formatMoney(num) {
  var p = num.toFixed(2).split(".");
  return (
    "$" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

// add EventListener
doubleBtn.addEventListener("click", doubleMoney);
sort.addEventListener("click", sortData);
showMillionairesBtn.addEventListener("click", showMillionaires);
calc.addEventListener("click", totalMoney);
addUserBtn.addEventListener("click", addingNewUser);
