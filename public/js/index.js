"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },

    {
        quote: "The internet is the first thing that humanity has built that humanity doesn't understand, the largest \experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },

    {
        quote: "Persistance is to the character of man as carbon is to steel.",
        author: "Napoleon Hill",
    },

    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },

    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },

    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },

    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
{
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "H. Jackson Brown Jr., P.S. I Love You"
    },

    {
        quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
        author: "Steve Jobs"
    },

    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "Oscar Wilde, The Happy Prince and Other Stories"
    },

]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        }else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);