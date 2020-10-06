// 1 Функции
// Function Declaration - ее можно вызывать до того, как мы ее создали в отличие от function expression
// function greet (name) {
//     console.log('Привет -', name)
// }
// Function Expression (когда мы создаем функцию и складываем ее в переменную)
// const greet2 = function greet2(name){ //можно заносить функцию в переменную    console.log('Привет 2 -', name)
//
// }

// greet('Катя')
// greet2('Катя')
// console.log(typeof greet) //function, но такого типа данных нету в js. Это хак для того, чтоб было проще разрабатывать и определять
// console.dir(greet) // Отображает список свойств указанного JavaScript объекта

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function(){ // встроенный метод. Внутрь передаем какую-то анонимную функцию, которая не имеет названия
// // функция setInterval возвращает новый интервал и в какой-то момент времени мы можем его очистить
// // setTimeout задает задержку, setInterval задает интервал
//    if (counter === 5){
//        clearInterval(interval) // глобальные функции. По аналогии есть clearTimeout
//    } else {
//        console.log(++counter)
//    }
// }, 1000) // timeout - к-ство милисекунд,т через которое нужно вызывать функцию

// 3 Стрелочные функции
function greet (name) {
    console.log('Привет -', name)
}
const arrow = (name) => { // стрелочная функция
    console.log('Привет -', name)
}
const arrow2 = name => console.log('Привет -', name)
arrow('Katherine')
arrow2('Katherine') // arrow и arrow2 идентичны

const pow2 = num => { // возводит в квадрат
    return num ** 2 // то же, что и Math.pow
}
console.log(pow2(5))
const pow2 = num =>  num ** 2







// 4 Параметры по умолчанию (задать параметры до вызова функции)
const sum = (a = 40, b = a * 2) => a + b
console.log(sum(41, 4)) // параметр меняется
console.log(sum()) // берет параметры по умолчанию = 120

function sumAll(...all){ // параметр rest (...) - берет и собирает в all все числа (получается массив)
    let result = 0
    for(let num of all){
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5) // это массив чисел
console.log(res)

// 5 Замыкание
// function createMember(name){
//     return function(lastName){
//         console.log(name + lastName)
//     }
// }
// const logWithLastName = createMember('Katherine') // name сохранилось в функции, а lastName варьируется
// console.log(logWithLastName('Filonenko'))
// console.log(logWithLastName('Gurzheeva'))
// Самая большая польза - создание приватных переменных