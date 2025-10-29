const api_url="https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json()
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
getquote(api_url);
setInterval(() => {
    getquote(api_url);
}, 86400000);
