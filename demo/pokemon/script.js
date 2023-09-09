// Select the HTML elements
const nameElement = document.getElementById(".name");
const heightElement = document.getElementById('.height');
const eyeColorElement = document.getElementById('.eye_color');

// Select the button and add a click event listener
document.querySelector('#clicked').addEventListener('click', (e) => {
    e.preventDefault();  // Prevent from refreshing

    const randomNumber = Math.ceil(Math.random() * 83);
    console.log(`Random number is ${randomNumber}`);

    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
        .then(response => response.json())
        .then(data => {
            // Update the HTML elements with the retrieved data
            nameElement.innerHTML = data.name;
            heightElement.innerHTML = data.height;
            eyeColorElement.innerHTML = data.eye_color;

            console.log(data.name);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
