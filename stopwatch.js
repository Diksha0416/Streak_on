let hrs = document.getElementById("hours")
let min = document.getElementById("minutes")
let secs = document.getElementById("seconds")
let addbtn = document.getElementById("resetcheck");
let disptime = document.getElementById("time")
let [seconds, minutes, hours, savehrs, savemins, savesecs] =[0,0,0,0,0,0]
let change = document.getElementById("change");

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10? "0" + hours : hours;
    let m = minutes < 10? "0" + minutes : minutes;
    let s = seconds < 10? "0" + seconds : seconds;
    disptime.innerHTML = h + ":" + m + ":" + s; 

    const ball = document.querySelector(".ball");
    let tottalSeconds = hours * 3600 + minutes * 60 + seconds;
    let angle = -90 + tottalSeconds * 6;
    ball.style.transform = `rotate(${angle}deg)`;
}

function createcheckbox(hours, minutes, seconds){
    addbtn.innerHTML = "";

    let h = hours < 10? "0" + hours : hours;
    let m = minutes < 10? "0" + minutes : minutes;
    let s = seconds < 10? "0" + seconds : seconds;
    disptime.innerHTML = h + ":" + m + ":" + s; 

    hrs.innerHTML = hours < 10? "0" + hours : hours;
    min.innerHTML = minutes < 10? "0" + minutes : minutes;
    secs.innerHTML = seconds < 10? "0" + seconds : seconds;

    let heading = document.createElement("h1");
    let div = document.createElement("div");
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")

    heading.textContent = "Want to save time?"
    button1.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    button2.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    
    heading.classList.add("hrr");
    div.classList.add("divrr")
    button1.classList.add("butrr")
    button2.classList.add("butrr")

    addbtn.appendChild(heading)
    addbtn.appendChild(div)
    div.appendChild(button1);
    div.appendChild(button2)

    button1.onclick=function(){
        alert("Your "+ hours+" hrs,"+minutes+" mins and "+seconds+" sec time is saved." );
        addbtn.innerHTML = "";

        hrs.innerHTML = "00"
        min.innerHTML = "00"
        secs.innerHTML = "00"
        // disptime.innerHTML="0"+hours+":"+"0"+minutes+":"+"0"+seconds;
    };
    button2.onclick=function(){
        addbtn.innerHTML = "";
        hrs.innerHTML = "00"
        min.innerHTML = "00"
        secs.innerHTML = "00"
    }
    
}

let timerInterval;
let isRunning = false;
function startstop(){
    if(isRunning){
        // ⏸ Pause timer
        clearInterval(timerInterval);
        createcheckbox(hours, minutes, seconds)        
        isRunning = false;
        change.classList.remove("fa-pause");
        change.classList.add("fa-play")
    }
    else{
        // ▶ Start timer
        addbtn.innerHTML = "";
        timerInterval = setInterval(stopwatch,1000)
        isRunning = true;
        change.classList.remove("fa-play");
        change.classList.add("fa-pause")
    } 
}

function reset(){   
    clearInterval(timerInterval);
    addbtn.innerHTML = "";
    savehrs = hours;
    savemins = minutes;
    savesecs = seconds;

    createcheckbox(savehrs, savemins, savesecs);
    isRunning = false;
    change.classList.remove("fa-pause");
    change.classList.add("fa-play");

    hours=0;
    minutes=0;
    seconds=0;
    disptime.innerHTML="0"+hours+":"+"0"+minutes+":"+"0"+seconds;

    const ball = document.querySelector(".ball");
    ball.style.transition = "none";              // temporarily disable animation
    ball.style.transform = "rotate(-90deg)"; 
    
    setTimeout(() => {
        ball.style.transition = "transform 1s linear";
    }, 50);

}

function pausesave(){
    //-------------------
    clearInterval(timerInterval);
    savehrs = hours;
    savemins = minutes;
    savesecs = seconds;
    alert("Your "+ hours+" hrs,"+minutes+" mins and "+seconds+" sec time is saved." )
    hours=0;
    minutes=0;
    seconds=0;
    disptime.innerHTML="0"+hours+":"+"0"+minutes+":"+"0"+seconds;
    
}



