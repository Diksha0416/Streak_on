let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let currenthrs = parseInt(hours.innerHTML,10);
let currentmts = parseInt(minutes.innerHTML,10);
let currentsec = parseInt(seconds.innerHTML,10);
let change = document.getElementById("change");
let circle = document.getElementById("bg")

let time = document.getElementById("time")

// acthrs ones.. are used for saving actual set time
// currenthrs ones... will do changes in timer

function homereturn(){
    let container = document.getElementById("ctn")
    container.style.transition = "transform 2s ease, opacity 2s ease";
    container.style.transform = "scale(0.95)"
    container.style.opacity = "0"

    setTimeout(()=>{
        window.location.href = "page1.html";
    },1400)
}

// up
function uph(){  
    currenthrs= (currenthrs+1)%24;
    if(currenthrs<10){
        hours.innerHTML = "0"+currenthrs;
    }
    else
    hours.innerHTML = currenthrs;
}
function upm(){  
    currentmts= (currentmts+1)%60;
    if(currentmts<10){
        minutes.innerHTML = "0"+currentmts;
    }
    else
    minutes.innerHTML = currentmts;
}
function ups(){  
    currentsec= (currentsec+1)%60;
    if(currentsec<10){
        seconds.innerHTML = "0"+currentsec;
    }
    else
    seconds.innerHTML = currentsec;
}
// down
function downh(){  
    currenthrs= (currenthrs-1)%24;
    if(currenthrs==-1){
        currenthrs=23;
    }
    if(currenthrs<10){
        hours.innerHTML = "0"+currenthrs;
    }
    else
    hours.innerHTML = currenthrs; 
}
function downm(){  
    currentmts= (currentmts-1)%60;
    if(currentmts==-1){
        currentmts=59;
    }
    if(currentmts<10){
        minutes.innerHTML = "0"+currentmts;
    }
    else
    minutes.innerHTML = currentmts;
}
function downs(){  
    currentsec= (currentsec-1)%60;
    if(currentsec==-1){
        currentsec=59;
    }
    if(currentsec<10){
        seconds.innerHTML = "0"+currentsec;
    }
    else
    seconds.innerHTML = currentsec;
}
let acthrs = 0, actmins = 0, actsecs = 0, savehrs = 0, savemins = 0, savesecs=0;
let actlength = 0, proglength=0;
function settimer(){
    console.log(currenthrs)
    let h = currenthrs < 10 ? "0"+currenthrs :currenthrs;
    let m = currentmts < 10 ? "0"+currentmts :currentmts;
    let s = currentsec < 10 ? "0"+currentsec :currentsec;
    time.innerHTML = `${h}:${m}:${s}`;

    acthrs = currenthrs;
    actmins = currentmts;
    actsecs = currentsec;
    
    actlength = acthrs * 60*60 + actmins*60 + actsecs;
    circle.style.strokeDashoffset=0;

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
}
function timer(){
    console.log(currentmts)
    if (currentsec > 0) {
    currentsec--;
    } 
    else if (currentmts > 0) {
    currentmts--;
    currentsec = 59;
    }
     else if (currenthrs > 0) {
    currenthrs--;
    currentmts = 59;
    currentsec = 59;
    }
     else {
    // Timer finished
    clearInterval(timerInterval)
    change.classList.remove("fa-pause");
    change.classList.add("fa-play")
    savehrs = acthrs - currenthrs;
    savemins = actmins - currentmts;
    savesecs = actsecs - currentsec;
    let actime = acthrs * 3600 + actmins * 60 + currentsec;
    let curtime = currenthrs * 3600 + currentmts * 60 + currentsec;
    let savetime = actime - curtime
    saveTimeSpent(savetime)
    alert("Time’s up! Your "+ savehrs+" hrs,"+savemins+" mins and "+savesecs+" sec time is saved." )
    }
    
    proglength = currenthrs * 60*60 + currentmts*60+ currentsec;
    circle.style.strokeDashoffset = 550*(1 - proglength/actlength);

    let h = currenthrs < 10 ? "0"+currenthrs :currenthrs;
    let m = currentmts < 10 ? "0"+currentmts :currentmts;
    let s = currentsec < 10 ? "0"+currentsec :currentsec;
    time.innerHTML = `${h}:${m}:${s}`;
}
let timerInterval;
let isRunning = false;
function startstop(){
    if(isRunning){
        // ⏸ Pause timer
        clearInterval(timerInterval);
        isRunning = false;
        change.classList.remove("fa-pause");
        change.classList.add("fa-play")
    }
    else{
        // ▶ Start timer
        timerInterval = setInterval(timer,1000)
        isRunning = true;
        change.classList.remove("fa-play");
        change.classList.add("fa-pause")
    } 
}

function pausesave(){
    //-------------------
    clearInterval(timerInterval);
    savehrs = acthrs - currenthrs;
    savemins = actmins - currentmts;
    savesecs = actsecs - currentsec;
    let actime = acthrs * 3600 + actmins * 60 + currentsec;
    let curtime = currenthrs * 3600 + currentmts * 60 + currentsec;
    let savetime = actime - curtime
    saveTimeSpent(savetime)
    alert("Your "+ savehrs+" hrs,"+savemins+" mins and "+savesecs+" sec time is saved." )
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";

}
function reset(){
    let h = acthrs < 10 ? "0" + acthrs : acthrs;
    let m = actmins < 10 ? "0" + actmins : actmins;
    let s = actsecs < 10 ? "0" + actsecs : actsecs;
    time.innerHTML = `${h}:${m}:${s}`;
    currenthrs = acthrs;
    currentmts = actmins;
    currentsec = actsecs;
    clearInterval(timerInterval);
    isRunning = false;
    change.classList.remove("fa-pause");
    change.classList.add("fa-play");
    circle.style.strokeDashoffset=0;
}

function saveTimeSpent(savetime){
    const today = new Date().toISOString().split("T")[0];
    const totalSeconds = savetime;

    let records = JSON.parse(localStorage.getItem("stoprecords")) || {};
    records[today] = (records[today] || 0) + totalSeconds;
    localStorage.setItem("stoprecords", JSON.stringify(records));
    console.log("Saving time:", records[today]);
}