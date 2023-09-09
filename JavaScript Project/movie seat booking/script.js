const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value;
// console.log(ticketPrice);

//save selected movie and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
  //this will return an array of selected items
  const selectedSeat = document.querySelectorAll(".row .seat.selected");

  //...selectedSeat is used for arrays
  const seatsIndex = [...selectedSeat].map((seat) => [...seats].indexOf(seat));

  //storing it in local system
  localStorage.setItem("selectedSeat", JSON.stringify(seatsIndex));

  console.log(seatsIndex);

  const selectedSeatCount = selectedSeat.length;

  count.innerText = selectedSeatCount;

  //calculating the price if tickedt
  const totalCost = selectedSeatCount * ticketPrice;
 
  //   console.log(totalCost);
  total.innerText = totalCost;
}

//Get data form local storage and populateUI
function populateUI() {
  const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));
  console.log(selectedSeat);

  if (selectedSeat !== null && selectedSeat.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeat.indexOf(index) >= -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  console.log(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//
container.addEventListener("click", (e) => {
  if (
    //The classList JavaScript is a read-only property that is used to return CSS classes in the form of an array.
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log(e.target);
    //to add class name
    //With a button or switch, a toggle button or toggle switch is a physical button or button found in software that turns on or off a device or feature
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

//Initial count and total set
updateSelectedCount();
