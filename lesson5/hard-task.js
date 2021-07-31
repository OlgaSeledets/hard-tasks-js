const arrNum = ['1100', '1200', '2200', '2300', '3300', '3400', '4400'];

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i].charAt(0) === '2' || arrNum[i].charAt(0) === '4') {
        console.log(arrNum[i]);
    }
}

const NUM = 100;
let prime = true;

for (let i = 2; i <= NUM; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
        }
    }
    if (prime === true) {
        console.log(i, 'Делители этого числа 1 и ', i);
    }
    prime = true;
}