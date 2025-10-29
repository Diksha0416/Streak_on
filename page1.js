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

let savedata = null;
let savestreak = null;
let data = document.getElementById("data");
let streak = document.getElementById("streak");
let middle = document.getElementById("middle");
savedata=data;
savestreak=streak;

function hobbies(){
    data.remove();
    streak.remove();
    middle.appendChild(streak);
    streak.style.animation = "moveright 0.5s linear forwards"
    middle.appendChild(data);
    data.style.animation = "moveleft 0.5s linear forwards"
}

function work(){
    data.remove();
    streak.remove();
    middle.appendChild(data);
    data.style.animation = "moveright 0.5s linear forwards"
    middle.appendChild(streak);
    streak.style.animation = "moveleft 0.5s linear forwards"

}