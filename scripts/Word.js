class Word
{
    #text;
    #isHidden;

    constructor (text)
    {
        this.#text = text;
        this.#isHidden = false;
    }

    hide()
    {
        this.#isHidden = true;
    }

    show()
    {
        this.#isHidden = false;
    }

    isHidden() 
    {
        return this.#isHidden;
    }

    getDisplayText()
    {
        if (!this.#isHidden)
        {
            return this.#text;
        }
        else
        {
            return this.#text.replace(/[A-Za-z]/g, '_');
        }
    }
}

export default Word;