import Reference from "../scripts/Reference.js"
import Scripture from "../scripts/Scripture.js"

let scriptureList;
const scriptureElement = document.querySelector("#scriptures");


const getScriptures = async () => {
    const response  = await fetch("https://natelandrum.github.io/cse121b/project/assets/scriptures.json");
    if (response.ok){
        scriptureList = await response.json();
    }
    displayScriptures(scriptureList);
}

const displayScriptures = (list) => {

    if (document.querySelector("#info2") == null)
    {
        infoMessage("Click on a scripture to start memorizing!\nYou can also filter the scriptures by sections.", "before");
    }

    list.forEach((scripture) => {

        const article = document.createElement("article");

        article.addEventListener("click", (e) => {
            if (e.target.nodeName == "H3" || e.target.nodeName == "P")
            {
                hideScriptures(e.target.parentNode);
            }
            else
            {
                hideScriptures(e.target)
            }
        }, {once: true})
        
        let r = new Reference(scripture.reference.book, scripture.reference.chapter, scripture.reference.startVerse, scripture.reference.endVerse);
        let s = new Scripture(scripture.scripture);

        article.data = s;

        const h3 = document.createElement("h3");
        h3.textContent = r.getDisplayText();

        const p = document.createElement("p");
        p.innerText = s.getDisplayText();
        p.classList.add("hidden");

        article.append(h3, p);

        scriptureElement.append(article);
    });
}

const reset = () => scriptureElement.innerHTML = "";

function filterScriptures(list, section=null)
{
    reset();
    let filter;
    if (section != null)
    {
        filter = section;
    }
    else
    {
        filter = document.querySelector("#filtered").value;
    }
    
    
    switch (filter) {
        case "old":
            displayScriptures(list.filter((_, idx) => idx < 25));
            break;

        case "new":
            displayScriptures(list.filter((_, idx) => idx >= 25 && idx < 50));
            break;

        case "bom":
            displayScriptures(list.filter((_, idx) => idx >= 50 && idx < 76));
            break;
        
        case "dc":
            displayScriptures(list.filter((_, idx) => idx >= 76));
            break;

        case "all":
            displayScriptures(list);
            break;
    }
}

function infoMessage(message, place)
{
        const p = document.createElement("p");
        p.innerText = message;
        p.style.color = "red";
        p.style.textAlign = "center";
        

        if (place == "after")
        {
            p.id = "info1";
            document.querySelector("main").append(p);
        }
        else if (place == "before")
        {
            p.id = "info2";
            document.querySelector("#filtered").after(p);
        }
        
    
}
function hideScriptures(target)
{
    reset();
    document.querySelector("#gridly").removeChild(document.querySelector("#info2"))

    target.querySelector("p").classList.remove("hidden");
    scriptureElement.appendChild(target);

    document.querySelector("#filtered").classList.add("hidden")

    const message = "Click on the scripture to hide random words until you have memorized the whole scripture."
    infoMessage(message, "after");

    main(document.querySelector("#filtered").value);
}

function main(currentSection)
{
    const mainElement = document.querySelector("article");
    const scripture = mainElement.data;

    mainElement.addEventListener("click", () =>
    {
        scripture.hideRandomWords(4);
        mainElement.querySelector("p").innerText = scripture.getDisplayText();
        
        if (scripture.isCompletelyHidden())
        {
            setTimeout(() => {
                reset();
                scripture.unhideAllWords();

                filterScriptures(scriptureList, currentSection);
                document.querySelector("#filtered").classList.remove("hidden");
                document.querySelector("#filtered").value = currentSection;

                document.querySelector("#gridly").removeChild(document.querySelector("#info1"))
              }, 4000);
            
        }
    })
}

getScriptures();
document.querySelector("#filtered").addEventListener("change", () => {filterScriptures(scriptureList)});