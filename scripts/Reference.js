class Reference
{
    #book;
    #chapter;
    #startVerse;
    #endVerse;

    constructor (book, chapter, startVerse, endVerse)
    {
        this.#book = book;
        this.#chapter = chapter;
        this.#startVerse = startVerse;
        this.#endVerse = endVerse;
    }

    getDisplayText()
    {
        if (this.#startVerse === this.#endVerse)
        {
            return `${this.#book} ${this.#chapter}:${this.#startVerse}`;
        }
        else
        {
            return `${this.#book} ${this.#chapter}:${this.#startVerse}-${this.#endVerse}`;
        }
    }
}

export default Reference;