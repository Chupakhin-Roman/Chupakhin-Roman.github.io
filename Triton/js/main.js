let midnight = new Date();
midnight.setHours(0, 0, 0, 0);

setInterval(updateTimer, 1000);

function updateTimer() {
    var nowDate = new Date(),
        duration = midnight - nowDate,
        d = new Date(duration),
        sec = d.getSeconds(),
        min = d.getMinutes(),
        hour = d.getHours(),
        discount_hour = document.querySelectorAll('.discount_hour');
    for (i = 0; discount_hour.length; i++) {
        discount_hour[i].innerHTML = `${hour}:${min}:${sec}`;
    }
}