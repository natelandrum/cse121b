// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);



  // Activity 1 forEach and map
  const ul = document.querySelector("#favorite-foods")
  
  myInfo.favoriteFoods.forEach(food => {
    ul.innerHTML += `
    <li>${food}</li>`;
  })


  listItems = myInfo.favoriteFoods.map(food => `
    <li>${food}</li>`
  )

  ul.innerHTML = listItems.join("")


const dl = document.querySelector("#places-lived")

function foodTemplate(food) {
  return `<li>${food}</li>`;
}

function placeTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function htmlMarkup(list, callback) {
  const htmlList = list.map(callback)
  return htmlList.join("")
}

ul.innerHTML = htmlMarkup(myInfo.favoriteFoods, foodTemplate);

dl.innerHTML = htmlMarkup(myInfo.placesLived, placeTemplate);


const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < 30) {
    console.log(studentReport[i])
  }
}


let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}


studentReport.forEach(grade => {
  if (grade < 30) {
    console.log(grade);
  }
})

for (i in studentReport) {
  if (studentReport[i] < 30) {
    console.log(studentReport[i]);
  }
}

const today = new Date();

for (let i = 0; i < DAYS; i++) {
  let nextDay = new Date();
  nextDay.setDate(today.getDate() + i);
  console.log(nextDay.toLocaleDateString("en-US", { weekday: "long" }));
}
