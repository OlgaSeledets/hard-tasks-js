const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();
const today = date.getDay() - 1;

week.forEach((day, index) => {
    const e = document.getElementById(`day-${index}`);
    e.innerHTML = day;
    e.style.fontStyle = index > 4 ? 'italic' : '';
    e.style.fontWeight = today === index ? 'bold' : ''
})

// 1
// function callback(day, index) {
//     const e = document.getElementById(`day-${index}`);
//     e.innerHTML = day;
//     e.style.fontStyle = index > 4 ? 'italic' : '';
//     e.style.fontWeight = today === index ? 'bold' : ''
// }

// week.forEach(callback);

// 2
// for (let i = 0; i < week.length; i++) {
//     const day = week[i];
//     const e = document.getElementById(`day-${i}`);
//     e.innerHTML = day;
//     e.style.fontStyle = i > 4 ? 'italic' : '';
//     e.style.fontWeight = today === i ? 'bold' : ''
// }