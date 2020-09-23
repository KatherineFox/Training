// const name = 'Катя'
// const age = 20
//
// function getAge(){
//     return age
// }
// const output = 'Привет, меня зовут' + name + ' и мой возраст' + age + 'лет' - не лучший вариант
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()}` // тернарные выражения (переменные, функции, не if)
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20? 'A' : 'B'}`
// console.log(output)

// const output =  `
//     <div>This is div </div>
//     <p>This is p</p>
// `
// console.log(output)

// const name = 'Катя'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2)) // что находится на 2-ом месте (начиная с 0-уля)
// console.log(name.indexOf('атя')) // есть ли такое сочетание символов
// console.log(name.indexOf('!')) // вернет -1
// console.log(name.startsWith('кат')) // false (не с маленькой начинается)
// console.log(name.startsWith('Кат')) // true ( с большой начинается)
// console.log(name.toLowerCase().startsWith('кат')) // можно пвывести подряд некоторое количество методов
// console.log(name.endsWith('тя'))
// console.log(name.repeat(3))
// const string = '    password    '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

// function logPerson(s, name, age){
//     if (age < 0){
//         age = 'Еще не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'Катя'
// const personAge = 20
// const output = logPerson`Имя : ${personName}, Возраст : ${personAge}` // строки заносятся в массивы 0, 1, 2, а значения - в свои переменные
//
// console.log(output)



