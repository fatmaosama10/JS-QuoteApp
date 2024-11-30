const quotes = [
    `“Be yourself; everyone else is already taken.”― Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe`,
    `“So many books, so little time.” ― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein`,
    `“A room without books is like a body without a soul.” ― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― William W. Purkey`,
    `“You only live once, but if you do it right, once is enough.” ― Dr. Seuss`,
    `“Be the change that you wish to see in the world.” ― Mahatma Gandhi`
];

let lastIndex = -1;

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

button.addEventListener("click", () => {
    let randomIndex;

    // Generate a new random index that is different from the last one
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    // Update the quote text
    quoteElement.textContent = quotes[randomIndex];
});