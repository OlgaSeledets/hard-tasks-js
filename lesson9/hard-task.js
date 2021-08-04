function date_time() {
    const date = new Date();
    const firstPart = date.toLocaleString('ru-ru', {weekday: 'long', month: 'long', day: 'numeric'});
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return  (`Сегодня ${firstPart} ${year} года, ${hours} часов ${minutes} минут ${seconds} секунд`);
}

document.getElementById('result').innerHTML = date_time();