const person = {
    name : 'katherine',
    age : 20,
    isProgrammer : true,
    language : ['ru', 'ua', 'eng'],
    'complex key' : 'Complex Value',
    ['key_' + (1 + 3)] : 'Computed key', //key_4
    greet() {
        console.log('greet from person')
    }
}
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
//
// console.log(person)
// person.greet()
//
// person.age++
// person.language.push('js')
// console.log(person.age)
// person['key_4'] = undefined
// delete person['key_4']

// Деструктуризация
// const name = person.name // получим поле name
// const age = person.age
// const languages = person.language

const {name, age, languages} = person
console.log(name, age, languages)

