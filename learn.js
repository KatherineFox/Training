// let prices = [1000, 2500, 1500]
// const sumOfPrices = prices.reduce(function(sum, elements){
//     return sum + elements
// })
//
// console.log(sumOfPrices)
//
// // let breeds = ['Munchkin', 'Oriental', 'Siberian cat']
// // breeds[0] = 'Oriental'
// // breeds[2] = 'Oriental'
// // console.log(breeds)
//
// let priceOfUniversity = [20000, 30000, 18000]
// const ChangeInPrice = priceOfUniversity.map(function(elements){
//     return elements + 5000
// })
//
// console.log(ChangeInPrice)
//
// let cats = [
//     {name : 'Nusya', age : 12, color : 'gray'},
//     {name : 'Motya', age : 11, color : 'black'},
//     {name : 'Malish', age : 'unknown', color : 'gray'}
// ]
// const pickedCats = cats.map(elements => elements.name)
// console.log(pickedCats)
//
// const pickedCat = cats.filter(function(c){
//     return c.color === 'black'
// })
// console.log(pickedCat)
//
//
// function calculateAge(year){
//     return 2020 - year
// }
// function info(name, year){
//     const age = calculateAge(year)
//     if (age > 0){
//         console.log('Имя кошки : ' + name + ' и ее возраст : ' + age)
//     } else {
//         console.log('Ошибка!')
//     }
// }
// info('Twilight', 2021)
//
//
// function calculator(a, b){
//     const c = a + b
//     const d = a - b
//     const e = a * b
//     const f = a / b
//     console.log(c, d, e, f)
// }
// calculator(10, 2)
//
// const seasons = ['Spring', 'Summer', 'Autumn', 'Winter']
// for (let i=0; i<seasons.length; i++){
//     const season = seasons[i]
//     console.log(season)
// }
// for (let season of seasons){
//     console.log(season)
// }
//
// const flowers = ['Dandelion', 'Rose', 'Daisy']
// for (let flower of flowers){
//     console.log(flower)
// }
//
// const characters = ['Robin', 'Peter', 'Pappy']
// for (let character of characters){
//     console.log(character)
// }
//
//
// const stringInt = '40'
// console.log(parseInt(stringInt) + 2)
//
// const floatInt = '23.1'
// console.log(parseFloat(floatInt))
//
// console.log(Number.parseInt(stringInt))
//
// console.log(+stringInt + 3)
//
// console.log(+(10.1+12.2).toFixed(1))
// console.log(parseFloat((10.2+12.2).toFixed(1)))
//
//
// console.log(parseInt(4n) - 3)
// console.log(23n + BigInt(10))
// console.log(parseInt(23n) - 10)
//
//
// const age = 20
// const name = 'Katherine'
// const inform = `Hello, my name is ${name} and my age is ${age}`
// console.log(inform)
//
//
// function getAge(){
//     return age
// }
//
// const getInfo = `Привет, мое имя ${name} и мой возраст ${getAge()}`
//
// const output =  `
//      <div>This is div </div>
//      <p>This is p</p>
//  `
//  console.log(output)
//

// greet('Katherine')
// console.dir(greet) // Отображает список свойств указанного JavaScript объекта
//
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)
//     } else console.log(++counter)
// }, 1000)

//
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)
//     } else{
//         console.log(++counter)
//     }
// }, 1000)

const cats = [
    {name : 'Malish', age : 11, color : 'gray'},
    {name : 'Nusya', age : 11, color : 'gray'},
    {name : 'Matilda', age : 11, color : 'black'}
]
const filteredCats = cats.filter(function(e){
    return e.color = 'gray'
})
console.log(filteredCats)

const numbers = [5, 2, 1]
const reducedNumbers = numbers.reduce(function(subtraction, elements){
    return subtraction - elements
})

console.log(reducedNumbers)


const sqrt1 = (num) => {return Math.sqrt(num)}
console.log(sqrt1(25))

function greeting (nam){
    console.log('Hello' + nam)
}