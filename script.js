// console.log("1. Вывести на страницу в одну строку через запятую числа от 10 до 20");

// let str = "";
// let i = 10;
// do {
//     str = str + i + ", ";
//     i++;
// } while (i <= 20);

// console.log(str);

// console.log("2. Вывести квадраты чисел от 10 до 20");

// let j = 10;
// let square;

// do {
//     square = j ** 2;
//     console.log(square);
//     j++;
// } while (j <= 20);

// console.log("3. Вывести таблицу умножения на 7");

// let squareSeven;

// for (let k = 1; k <= 10; k++) {
//     squareSeven = 7 * k;
//     console.log("7 * " + k + " = " + squareSeven);
// }

// console.log("4. Найти сумму всех целых чисел от 1 до 15");

// let l = 1;
// let sum = 0;

// do {
//     sum = sum + l;
//     l++;
// } while (l <= 15);
// console.log(sum);

// console.log("5. Найти произведение всех целых чисел от 15 до 35");

// let m = 15;
// let product = 1;

// do {
//     product = product * m;
//     m++;
// } while (m <= 35);
// console.log(product);

// console.log("6. Найти среднее арифметическое всех целых чисел от 1 до 500");

// let n = 1;
// let total = 0;

// do {
//     total = total + n;
//     n++;
// } while (n <= 500);
// const result = total / 500;
// console.log(result);

// console.log("7. Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80");

// let p = 30;
// let evenNumbersSum = 0;

// do {
//     if (p % 2 === 0) {
//         evenNumbersSum = evenNumbersSum + p;
//     }
//     p++;
// } while (p <= 80);
// console.log(evenNumbersSum);

// console.log("8. Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3");

// let q = 100;

// do {
//     if (q % 3 === 0) {
//         console.log(q);
//     }
//     q++;
// } while (q <= 200);

// console.log("9. Дано натуральное число. Найти и вывести на страницу все его делители...");

// const r = +prompt("Введите натуральное число");
// let divisor = 1;
// let counter = 0;
// let evenDivisorsSum = 0;

// console.log("Натуральное число: " + r);

// do {
//     if(r % divisor === 0) {
//         console.log(divisor);
//         if (divisor % 2 === 0) {
//             counter++;
//             evenDivisorsSum = evenDivisorsSum + divisor;
//         }
//     }
//     divisor++;
// } while (divisor <= r);

// console.log("Количество четных делителей: " + counter);
// console.log("Сумма четных делителей: " + evenDivisorsSum);

// console.log("10. Напечатать полную таблицу умножения от 1 до 10");

// let squareNumber;

// for (let s = 1; s <= 10; s++) {
//     for (let t = 1; t <= 10; t++) {
//         squareNumber = s * t;
//         console.log(s + " * " + t + " = " + squareNumber);
//     }
// }

console.log("11. Игра 'Угадай число' ");

let randomNumber = Math.floor(Math.random() * 11);
console.log("Рандомное число: " + randomNumber);

let userNumber = +prompt("Угадайте число от 0 до 10");
if (userNumber) {
    if (randomNumber === userNumber) {
        console.log("Поздравляю, Вы угадали!");
    } else {
        while (randomNumber !== userNumber) {
            userNumber = +prompt("Вы не угадали. Попробуйте ещё раз");
            if (userNumber) {
                if (randomNumber === userNumber) {
                    console.log("Поздравляю, Вы угадали!");
                    break;
                }
            } else {
                console.log("Очень жаль, вы были близки");
                break;
            }
        }
    }
} else {
    console.log("Очень жаль, вы были близки");
}

// console.log("12. Запросить у пользователя число, которое будет высотой вершины прямоугольного треугольника")

// let triangleHeight = +prompt("Введите высоту прямоугольного треугольника");
// let stars = "";
// for(v = 1; v <= triangleHeight; v++) {
//     stars = stars + "*";
//     console.log(stars);
// }
