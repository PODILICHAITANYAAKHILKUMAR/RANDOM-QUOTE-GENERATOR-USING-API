let text = document.querySelector("#quoteText");
let author = document.querySelector("#nameText");
const getNewQuote = async () =>
{
    var url="https://type.fit/api/quotes";
    const response=await fetch(url);
    const allQuotes = await response.json();
    const index = Math.floor(Math.random()*allQuotes.length);
    text.innerHTML =`''  ${allQuotes[index].text}  ''`;
    author.innerText = `-- ${allQuotes[index].author}`;

}
getNewQuote();