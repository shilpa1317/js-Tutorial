var clock = document.getElementById("clock");

function updateClock(){

    var now = new Date();

    var hour = String(now.getHours()).padStart(2,"0");
    var minute = String(now.getMinutes()).padStart(2,"0");
    var second = String(now.getSeconds()).padStart(2,"0");

    clock.innerText = hour + ":" + minute + ":" + second;
}

// First time display
updateClock();

// Update every 1 second
setInterval(updateClock, 1000);