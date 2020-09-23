// 1 Number
// const num = 42
// const float = 42.42
// const pow = 10e3 // валидное число
//
// console.log(num)
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2,53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0) // это будет бесконечность
// console.log(Number.NaN) // NaN - Not a Number
// console.log(typeof NaN) // number
// console.log(2 / undefined) // NaN
// const weird = 2 / undefined
// console.log(isNaN(weird)) // true
// console.log(isNaN(42)) // false
// console.log(Number.isFinite(Infinity)) // true
// console.log(Number.isFinite(42)) // false
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2) // так как у строки нету итерации сложения JS делает это все одной строкой, канкатинируя строку с 2-йкой
// console.log(Number.parseInt(stringInt) + 2) //parsing integer(получится число, вместо строки)
// console.log(parseInt(stringInt) + 2) // тоже из строки в число
// console.log(Number(stringInt) + 2) // можем в number обернуть какое-либо число
// console.log(+stringInt + 2) // преобразование строки в число с помощью "+" перед переменной
//
// console.log(parseInt(stringFloat) + 2) // получим 42 так как parseInt работает с integer
// console.log(parseFloat(stringFloat) + 2) // получим 42.42
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) //0.6
// console.log(+(0.4+0.2).toFixed(1)) // toFixed вырезает значение после замятой, а не округляет, но это значение теперь строка поэтому пишем "+" перед числом
// console.log(parseFloat((0.4+0.2).toFixed(1)))

// 2 BigInt
// console.log(typeof 90071992547409919999999) // Number
// console.log(typeof 90071992547409919999999n) // BigInt, он работает только с BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n) // BigInt может быть отрицательным
// console.log(90071992547409919999999.23231n) - Это ошибка так как Integer - целый тип данных

// console.log(10n - 4) - это ошибка, так как тут работа с разными типами данных
// console.log(parseInt(10n) - 4) // 6
// console.log(10n - BigInt(4)) // 6n
// console.log(5n / 2n) // 2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5,3))
// console.log(Math.abs(-42))
// console.log(Math.max(42,12,23,11,422))
// console.log(Math.min(42,12,23,11,422))
// console.log(Math.floor(4.9)) // округление в нижчую сторону : 4
// console.log(Math.ceil(4.9)) // округление в большую сторону : 5
// console.log(Math.round(4.9))// возвращает число, округлённое к ближайшему целому
// console.log(Math.trunc(4.9)) //  возвращает целую часть числа путём удаления всех дробных знаков
// console.log(Math.random()) // выдает рандомное значение числа (при обновлении страницы выдает разные, а не одно и то же число)

// 4 Example
// function getRandomBetween(min, max){
//     return Math.random() * (max - min) + min
// }
// console.log(getRandomBetween(10, 42));
//
// function getRandomBetween(min, max){ //  с округлением в высшую часть
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42));





