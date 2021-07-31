const NUM = 266219;

const multiplication = NUM.toString().split('').reduce((previous, next) => previous * next, 1) ** 3;

console.log(multiplication.toString().slice(0 , 2));