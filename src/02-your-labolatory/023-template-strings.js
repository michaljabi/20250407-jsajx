// let text = "Michał Jabi"

const user = {
    name: 'Kate',
    lastName: 'Moss',
    hello() { },
    birthDate: new Date(),
    // bigNumber: 90n
};
let text = `Michał



        ${90 + 1 + 2 + 3}
        ${{}}

        ${JSON.stringify(user)} 

                        Jabi`
// let text = "Michał Jabi"


console.log(text);

console.log(new Date('2025-04-07T10:32:52.967Z').toString())