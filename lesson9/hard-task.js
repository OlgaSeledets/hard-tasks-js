const date = new Date();
const firstPart = date.toLocaleString('ru-ru', {weekday: 'long', month: 'long', day: 'numeric'});
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
let hourWord;

function hourWordCheck() {
    if (hours === 1 || hours === 21) {
        hourWord = 'час';
    } else if (hours === 2 || hours === 3 || hours === 4 || hours === 22 || hours === 23) {
        hourWord = 'часа';
    } else if ((hours >= 5 && hours <= 20) || hours === 0) {
        hourWord = 'часов';
    }
    return hourWord;
}

function dateTime1() {
    return  (`Сегодня ${firstPart} ${year} года, ${hours} ${hourWordCheck()} ${minutes} минут ${seconds} секунд`);
}

document.getElementById('result1').innerHTML = dateTime1();

setInterval(() => {
    document.getElementById('result1').innerHTML = dateTime1();
}, 1000);

function dateTime2() {
    const date = new Date();
    const firstPart = date.toLocaleString('ru-ru', {month: '2-digit', day: '2-digit'});
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return  (`${firstPart} ${year} - ${hours}:${minutes}:${seconds}`);
}

document.getElementById('result2').innerHTML = dateTime2();

setInterval(() => {
    document.getElementById('result2').innerHTML = dateTime2();
}, 1000);
