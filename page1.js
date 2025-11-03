const api_url="https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")
let stk = document.getElementById("streakct")

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
function btnstop(){
    let container = document.getElementById("ctn")
    container.style.transition = "transform 2s ease, opacity 2s ease";
    container.style.transform = "scale(0.95)"
    container.style.opacity = "0"

    setTimeout(()=>{
        window.location.href='stopwatch.html'
    },1400)
}

function btnsett(){
    let container = document.getElementById("ctn")
    container.style.transition = "transform 2s ease, opacity 2s ease";
    container.style.transform = "scale(0.95)"
    container.style.opacity = "0"

    setTimeout(()=>{
        window.location.href='start timer.html'
    },1400)
}


function updstreak(){
    let records = JSON.parse(localStorage.getItem("stoprecords")) || {};

    let dates = Object.keys(records);
    if(dates.length === 0) return 0;

    dates.sort()

    let streaks= 1;
    let currtstreak = 1;

    for(let i = dates.length - 2; i >=0; i--){
        let date1 = new Date(dates[i])
        let date2 = new Date(dates[i+1])

        let datediff = (date2-date1) / (1000 * 60 * 60 * 24)

        if(datediff ===1){
            currtstreak++;
            streaks = Math.max(streaks, currtstreak);
        }
        else if (datediff>1){
            currtstreak = 1;
        }
    }
    stk.innerText = streaks;
}
updstreak()