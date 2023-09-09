const currency_one = document.getElementById("from");
const amount_one = document.getElementById("number_from");
const currency_two = document.getElementById("to");
const amount_two = document.getElementById("number_to");

const rateEl = document.getElementById("rateEl");

const swap = document.getElementById("swap");

swap.addEventListener("click", (e) => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;

  calculate();
});

//fetching the exchange rates and updating the DOM
function calculate() {
  //   const amount_one = currency_one.value;
  //   const amount_two = currency_two.value;
  //   console.log(amount_one, amount_two);
  //   console.log(currency_one);

  fetch(
    `https://v6.exchangerate-api.com/v6/1305a01ae6ecd53f1f88e96f/latest/${currency_one.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[currency_two.value];
      console.log(rate);
      rateEl.innerText = `1 ${currency_one.value} = ${rate} ${currency_two.value}`;

      amount_two.value = (amount_one.value * rate).toFixed(2);
    });
  //   console.log(amount_one.value, amount_two.value);
}

currency_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
currency_two.addEventListener("change", calculate);
amount_two.addEventListener("input", calculate);

calculate();
