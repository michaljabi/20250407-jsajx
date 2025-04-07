let myNumber = 200;
console.log(myNumber)
console.log(typeof myNumber)

console.log(typeof undefined)

// BUG w js!
console.log(typeof null)

// typeof NIE NADAJE SIĘ do typów obiektowych
console.log(typeof {})
console.log(typeof [])
console.log(typeof new Date())
console.log(typeof (() => { }))


let myNumber2 = 200;
console.log(myNumber2)
console.log(typeof myNumber2)

console.log(typeof myNumber2.toString())
console.log(myNumber2.toString())

console.log((myNumber2 + ''))
console.log(typeof (myNumber2 + ''))

console.log(`${myNumber2}`)

// Te typy proste, mają konstruktory (obiektowe) w JS:
console.log(String)
console.log(Number)
console.log(Boolean)

// Używamy ich to jawnego rzutowania:
console.log(String(myNumber2))
console.log(typeof String(myNumber2))

console.log(Number('9000'))
console.log(Number('90291'))

console.log(Number('87d8q7t736r'))
console.log(Number({}))
console.log(Number(null))
console.log(Number(undefined))

console.log(typeof NaN);

console.log(1 + '2')
console.log(1 / 'a' + 2)

console.log(Number.isNaN(NaN))
console.log(Number.isNaN(12))

console.log(isNaN(0))
console.log(isNaN(null))
// problem isNaN
console.log(isNaN(NaN))

console.log(isNaN(undefined))
console.log(isNaN())

console.log(NaN === NaN);
console.log(1 === 1);