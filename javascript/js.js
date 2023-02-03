
let hours__div = document.getElementById("no__of__hours");
let minutes__div = document.getElementById("no__of__minutes");
let seconds__div = document.getElementById("no__of__seconds");
let milliseconds__div = document.getElementById("no__of__milliseconds");

let start__btn = document.getElementById("start__button");
let pause__btn = document.getElementById("pause__button");
let reset__btn = document.getElementById("reset__button");

let [hrs, mins, secs, millisecs] = [0, 0, 0, 0];

let id;
let isPaused = true;
start__btn.addEventListener("click", () => {
    if (isPaused === false) {
        return;
    }
    isPaused = false;
    id = setInterval(timer, 10);
})

pause__btn.addEventListener("click", () => {
    if (isPaused) {
        return;
    }
    isPaused = true;
    clearInterval(id);
})

reset__btn.addEventListener("click", () => {
    [hrs, mins, secs, millisecs] = [0, 0, 0, 0];
    clearInterval(id);
    isPaused = true;
    updateScreen();
})

function timer() {

    millisecs += 10;

    if (millisecs === 1000) {
        millisecs = 0;
        secs++;
    }

    if (secs === 60) {
        secs = 0;
        mins++;
    }

    if (mins === 60) {
        mins = 0;
        hrs++;
    }

    updateScreen();
}

function updateScreen() {
    let modified__hrs = (hrs < 10) ? ("0" + hrs) : hrs;
    let modified__mins = (mins < 10) ? ("0" + mins) : mins;
    let modified__secs = (secs < 10) ? ("0" + secs) : secs;
    let modified__millisecs = (millisecs < 10) ? ("00" + millisecs) : 
                            ((millisecs < 100) ? ("0" + millisecs) : millisecs);

    milliseconds__div.innerHTML = modified__millisecs;
    seconds__div.innerHTML = modified__secs;
    minutes__div.innerHTML = modified__mins;
    hours__div.innerHTML = modified__hrs;
}




