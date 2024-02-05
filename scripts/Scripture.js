import Word from "./Word.js"

class Scripture
{
    #words = [];

    constructor(text)
    {
        let splitText = text.split(" ");

        splitText.forEach(word => this.#words.push(new Word(word)));
    }

    isCompletelyHidden()
    {
        for (let word of this.#words)
        {
            if (!word.isHidden())
            {
                return false
            }
        }

        return true
    }

    hideRandomWords(numberToHide)
    {
        let hiddenWords = 0;
        
        while (hiddenWords < numberToHide && !this.isCompletelyHidden())
        {
            const randomIndex = Math.floor(Math.random() * this.#words.length);

            if (!this.#words[randomIndex].isHidden())
            {
                this.#words[randomIndex].hide();
                hiddenWords++;
            }
        }
    }

    unhideAllWords()
    {
        this.#words.forEach(word => word.show());
    }

    getDisplayText()
    {
        let displayText = "";

        this.#words.forEach((word, idx) => {
            if (isNaN(word.getDisplayText()) || idx === 0)
            {
                displayText = `${displayText}${word.getDisplayText()} `
            }
            else
            {
                displayText = `${displayText}\n\n${word.getDisplayText()} `
            }
            
        })

        displayText.trim();

        return displayText;
    }
}

export default Scripture;