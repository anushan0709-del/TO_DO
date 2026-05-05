
function updateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    document.getElementById("time").textContent = time;

    const date = now.toDateString();
    document.getElementById("date").textContent = date;
}


setInterval(updateTime, 1000);
updateTime();
