const langOne = prompt('ru или en?');

if (langOne === 'ru') {
    console.log('Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье');
} else if (langOne === 'en') {
    console.log('Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday');
}

const langTwo = prompt('ru или en?');

switch (langTwo) {
    case 'en':
        console.log('Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday');
        break;
    case 'ru':
        console.log('Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье');
        break;
}

const langThree = prompt('ru или en?');

let arr = [langThree];

arr['ru'] = ['Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье'];
arr['en'] = ['Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday'];

console.log(arr[langThree]);

let namePerson = prompt('Введите имя пользователя');

let result = namePerson === 'Артём' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';

console.log(result);