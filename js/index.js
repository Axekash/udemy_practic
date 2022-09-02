'use strict'



//изучение рекурсии

//решение методом рекурсии
// function sumTo(n) {
//     if(n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// };

// console.log(sumTo(4));

// решение методом цикла

// function sumTo(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumTo(100));

//решение методом арифметической прогрессии

// function sumTo(n) {
//     let sum = 0;

//     return sum = (n * (n + 1))/2;
// }

// console.log(sumTo(4));



// Вычисление факториала

function factorial(n) {
    // if(n == 1) {
    //     return n = 1;
    // } else {
    //    return n * factorial(n - 1);
    // }

    return (n != 1) ? n * factorial(n - 1) : n;
};

console.log(factorial(5));