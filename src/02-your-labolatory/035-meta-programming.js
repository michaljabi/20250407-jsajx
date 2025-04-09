const money = {
    value: 20,
    currency: 'PLN',
    [Symbol.toPrimitive](value) {

        if (value === 'string') {
            return `My wallet: ${this.value} ${this.currency}`
        }
        // else if (value === 'default' || value === 'number') {
        //     return this.value;
        // }
        return '[money object]'
    },
    *[Symbol.iterator]() {
        return {};
    }
}


console.log(`My wallet: ${money.value} ${money.currency}`)

console.log(`${money}`)
console.log(money + 2000);
console.log(Number(money) + 2000);
// console.log(String(money))

for (const m of money) {
    console.log(m);
}