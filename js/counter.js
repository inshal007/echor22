function updateTimer() {
    future = Date.parse("mar 27, 2022 09:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.querySelector('.days')
        .textContent = d;
    document.querySelector('.hours').textContent = h;
    document.querySelector('.minutes').textContent = m;
    document.querySelector('.seconds').textContent = s;
}
setInterval('updateTimer()', 1000);