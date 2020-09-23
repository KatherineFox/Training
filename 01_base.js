// alert(1)
// // 1 Переменные
// var name = 'Vladilen';
// //camelCase (firstName, lastName больше подходят JS)
// //first_name больше подходит Php, Python
// const firstName = 'Vladilen'
// //let age = 26
// const isProgrammer = true
// //age = 'twenty-six'
//
// name = 'Vlad'
// console.log(name)
// const $ = 'some value'
// // const if = 'mkef' // error (нельзя называть переменные зарезервированными словами, например if)
// const withNumber5 = '5'
// //const 5withNumber = 5 // error (нельзя называть переменные начиная с цифры)
//
// // 2 Мутирование
// // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// // console.log(age) // number
// // console.log(age.toString()) // string
//
// // ctrl + x - удалить строку
// // ctrl backslash - прокоментировать строку
// // const lastName = prompt('Введите фамилию') // prompt - функция, которая возвращает некоторое значение
// // alert(firstName + ' ' + lastName)
//
// // 3 Операторы
// let currentYear = 2020
// const birthYear = 2000
// const age = currentYear - birthYear
// //console.log(age)
//
// const a = 10
// const b = 5
//
// let c = 32
// // c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// с -= a
// с *= a
// с /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++) //мы изменили 'const' currentYear на 'let' для того, чтоб изменить значение переменной
// // оно не изменилось так как сначала мы вывели текущее значение, а потом добавили к нему 1
// console.log(currentYear) // теперь значение изменилось
// console.log(++currentYear) //тут мы сначала добавили 1, а потом вывели получившееся значение
// console.log(c)

// // 4 Типы данных
// const isProgrammer = true
// const name = 'Andrew'
// const age = 20
// //const x - error (в константу мы должны что-то занести по умолчанию)
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null) // неточность JS так как тип null - не object, а null

// 5 Приоритет операторов

// const fullAge = 20
// const birthYear = 2000
// const currentYear = 2020
//
// const isFullAge = (currentYear - birthYear) >= fullAge // mdn operator precedence - приоритет операторов (таблица)
// (...) - самый высокий приоритет

// 6 Условные операторы
// const courseStatus = 'pending' // типы готовности : ready, fail, pending; pending - в процессе
//
// if (courseStatus === 'ready'){
//     console.log('Курс уже готов и его можно проходить')
// } else if(courseStatus === 'pending'){
//     console.log('Курс пока находится в процессе разработки')
// } else{
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady){ //так как это boolean значение - можно не писать "isReady === true"
//     console.log('Все готово!')
// } else{
//     console.log('Все не готово!')
// }

//Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42
// const num2 = '42'
// console.log(num1 == num2) // ошибка, так как он сводит их к одному типу данных и проверяет, равняется ли строка 42 строке 42
// console.log(num1 === num2) // проверяет как на значению, так и по типу данных

// 7 Булевая логика (mdn logic operators)

// 8 Функции
// function calculateAge(year){
//     return 2020 - year
// }
// const myAge = calculateAge(2000)
// console.log(myAge)// либо console.log(calculateAge(year:2000))
// console.log(calculateAge(1999)) //можно ее вызывать несколько раз
// console.log(calculateAge(1993))
//
// function logInfoAbout(name, year) { //year - возраст
//     const age = calculateAge(year) // воспользуемся функцией внутри другой функции
//
//     if (age > 0){
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
//
//
// }
// logInfoAbout('Katherine', 2000 )

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд'] // это вариант правильнее
// // const cars =  new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
//
// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda'
// cars[cars.length]= 'Mazda'

// 10 Циклы
const cars = ['Мазда', 'Мерседес', 'Форд']
for (let i=0; i<cars.length; i++){
    const car = cars[i]
    console.log(car)
}
for (let car of cars){ //цикл для итерирования массивов, создаем не индекс, а какую-то переменную car, которая является елементом массива cars
    console.log(car)
}

const colors = ['Blue', 'Green', 'Red']
for(let i=0; i<colors.length; i++){
    const color = colors[i]
    console.log(color)
}
for (let color of colors){
    console.log(color)
}



// 11 Объекты
// const person = new Object({}); не самый правильный вариант
// const person = { // перечисление полей объекта
//     firstName : 'Kate',
//     lastName : 'Filonenko',
//     year : 2000,
//     languages : ['Rus', 'Ukr', 'Eng'],
//     hasHusband : false,
//     greet : function() { // function(){} является методом потому что эта функция определена в контексте объекта
//         console.log('greet from person')
//     }
// }


// console - объект, у которого есть метод log
// person.greet()
//Обращение к объектам
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages' // динамический ключ
// console.log(person[key])
// person.hasHusband = true
// console.log(person)
// person.isProgrammer = true // можно добавлять новые ключи

