const searchForm = document.getElementById("search-form");
const search = document.getElementById("search");
const searchbtn = document.getElementById("search-btn");
const randombtn = document.getElementById("random");
const mealEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const singleMeal = document.getElementById("single-meal");

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  singleMeal.innerHTML = "";

  // Get search term
  const term = search.value;

  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.meals == null) {
          resultHeading.innerHTML = `No results found for '${term}'`;
        } else {
          resultHeading.innerHTML = `Search results for '${term}' :`;
          meal = data["meals"][0];

          //   console.log(`${meal["idMeal"]},${meal["strMeal"]} `);
          mealEl.innerHTML = data.meals
            .map(
              (meal) => `
        <div class="meal">
            <img src="${meal.strMealThumb}" />
                <div class="meal-info" data-mealID=${meal.idMeal} >
                    <h3>${meal.strMeal}</h3>
                </div>
        </div>
        `
            )
            .join("");
        }
      });

    //clear search text
    search.value = "";
  } else {
    alert("please enter something to search");
  }
}

//fetch meal by ID
function getMealByID(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      //   console.log(meal.strMeal);
      addMealToDOM(meal);
    });
}

function addMealToDOM(meal) {
  const ingredients = [];
  for (let i = 0; i < 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  singleMeal.innerHTML = `
    <div class="single-meal">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" />
        <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
        </div>
        <div>
        <p>${meal.strInstructions}</p>
        <h2>Ingredients<h2>
        <ul>
            ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
        </div>
    </div>`;
}
// Event listener
searchForm.addEventListener("submit", searchMeal);

mealEl.addEventListener("click", (e) => {
  const mealInfo = e.target.closest(".meal-info");

  if (mealInfo) {
    const mealID = mealInfo.getAttribute("data-mealID");
    console.log("Clicked meal ID:", mealID);
    getMealByID(mealID);
  }
});
