const newParagraph = document.createElement('p');
newParagraph.innerText ="Added with JavaScript";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://picsum.photos/200/300')
newImage.setAttribute('alt', 'Random Image');
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section")
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to the JavaScript Language</p>";
document.body.appendChild(newSection);