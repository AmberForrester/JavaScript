const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));


for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime() {

    let date = new Date();

    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

/* Determine the time in deg:

60 seconds = 360 deg so 1 sec = 360 / 60 = 6 deg
60 minutes = 360 deg so 1 min = 360 / 60 = 6 deg
12 hours = 360 deg so 1 hour = 360 / 12 = 30 deg

1 hour = 30 deg, that means that 60 min = 30 deg so 1 min = 30 / 60 = 0.5 or 1/2 deg

The formula for hours is (hours * 30 + minutes / 2)
*/

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;

}

getCurrentTime();

setInterval(getCurrentTime, 1000);