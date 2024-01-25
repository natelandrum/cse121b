/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {};
myProfile.name = "Nathan Ray Landrum"
myProfile.photo = "images/profile.webp";
myProfile.favoriteFoods = ["Mole", "Pizza", "Tacos", "Sushi", "Spaghetti", "Cheeseburgers"];
myProfile.hobbies = ["Programming", "Family Time", "Streaming"];
myProfile.placesLived = [];



/* Populate Profile Object with placesLived objects */
myProfile.placesLived.push({place: "Franklin", length: "7 years"});
myProfile.placesLived.push({place: "Cochran", length: "12 years"});
myProfile.placesLived.push({place: "Tlalnepantla", length: "10 years"});



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo
document.querySelector("#photo").alt = "Nathan Landrum Profile Photo"

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li)
})

/* Places Lived DataList */
let placesHTML = myProfile.placesLived.map(place => `
<dt>${place.place}</dt>
<dd>${place.length}</dd>
`)
document.querySelector("#places-lived").innerHTML = placesHTML.join("")

