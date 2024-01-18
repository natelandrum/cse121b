const nums = ["one", "two", "three"];
const htmlNums = nums.map(num => `<li>${num}</li>`);
document.getElementById("myList").innerHTML = htmlNums.join("");


const grades = ["A", "B", "A"];

function gpa(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "B":
      return 3.0;
    default:
      return 0.0;
  }
}

const gpaPoints = grades.map(gpa);
console.log(gpaPoints);
gpaTotal = gpaPoints.reduce((total, gpa) => total + gpa, 0) / gpaPoints.length;
console.log(gpaTotal);


const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruits6 = fruits.filter(fruit => fruit.length > 6);
console.log(fruits6);


const nums2 = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = nums2.indexOf(luckyNumber);
console.log(luckyIndex);
