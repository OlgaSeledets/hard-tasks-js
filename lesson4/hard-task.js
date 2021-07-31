const text = '         Это моя строка Это моя строка       ';

const getString = function(text) {
    if (typeof(text) === 'number') {
        return ('Это не строка');
    } else if (text.length > 30) {
        return (text.trim().slice(0, 30) + '...');
    } else {
        return text.trim();
    }
}

console.log(getString(text));