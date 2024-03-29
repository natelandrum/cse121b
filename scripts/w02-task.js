/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Nathan Ray Landrum";
const currentYear = 2024;
const profilePicture = "images/profile.webp";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFoods = ["Mole", "Pizza", "Tacos", "Sushi", "Spaghetti", "Cheeseburgers"];
foodElement.innerHTML = favFoods.join(", ");
let newFood = "Chicken Wings";
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(", ")}`;
