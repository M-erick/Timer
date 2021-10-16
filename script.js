 const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "25 Dec 2021";

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60 ;


    minsEl.innerHTML = formatTime(minutes);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML =days; 
    secondsEl.innerHTML = formatTime(seconds);
   // console.log(newYearDate - currentDate);
}

function formatTime(time) {
    return time <10 ? (`0${time}`): time;

}
countdown();
setInterval(countdown,1000);  