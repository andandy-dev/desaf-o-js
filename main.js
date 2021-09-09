let countdown;

function setCountdown() {
    countdown = parseInt(prompt("Set the minutes for the countdown"));
    if (!(countdown > 0 && countdown < 99)) {
        alert("set a number greater than 0 and less than 99");
        setCountdown();
    }
    return countdown;
}

let timeMin = setCountdown();
let timeSec = 0;

function timer() {
    timeMin = parseInt(timeMin);
    timeSec = parseInt(timeSec);
    if (timeSec > 0) {
        timeSec--;
    } else {
        if (timeMin > 0) {
            timeMin--;
            timeSec = 59;
        } else {
            if (timeMin == 0 && timeSec == 0) {
                document.querySelector(".colons").classList.remove(".flicker");
            }
        }
    }
    if (timeSec < 10 || timeSec == 0) {
        timeSec = '0' + timeSec;
    }
    if (timeMin < 10 || timeMin == 0) {
        timeMin = '0' + timeMin;
    }
    document.querySelector(".seconds").innerHTML = timeSec;
    document.querySelector(".minutes").innerHTML = timeMin;

    if ((parseInt(timeMin) == 0) && (parseInt(timeSec) < 20)) {
        document.querySelector(".countDown").classList.add("countOver");
        document.querySelector(".title").innerHTML = "Countdown is almost over";
    }
}

function run() {
    setInterval(timer, 1000);
}