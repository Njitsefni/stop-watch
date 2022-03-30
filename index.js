const timeDisplay = document.querySelector(".time");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resetBtn = document.querySelector(".resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        /* daje startTime wartość równą Date.now()*/
        startTime = Date.now() -elapsedTime ;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(paused == false){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);

    }
});
resetBtn.addEventListener("click", () => {
    startTime = 0;
    clearInterval(intervalId);
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    intervalId;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
   
});


function updateTime() {
    /* za pierwszym razem jest równe 0 ponieważ startTime=Date.now()*/
    elapsedTime = Date.now() - startTime ;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 360)) % 60);

    
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length >2? unit : "0" + unit;
    }
}



