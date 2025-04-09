const emailData = [
    'adrian@site.com',
    'stefan@site.com',
    'jadwiga@domain.pl',
    'henryka@domain.pl',
    'anna@site.com'
]

let i = 0;
for (const e of emailData) {
    console.log(i++);
    if (e === 'jadwiga@domain.pl') {
        continue;
        //break;
    }
    console.log(e);

}

for (let i = 0; i < emailData.length; i++) {
    console.log(i);
    console.log(emailData[i]);
}

emailData.forEach((e, idx) => {
    console.log(idx)
    console.log(e)
    return;
})

// do Czego używamy for...in?

const user = { name: 'Michał', lastName: 'Nowak' }

for (const key in user) {
    console.log(key);
    console.log(user[key])
}

console.log(Object.entries(user))

console.log(Object.keys(user))
console.log(Object.values(user))


for (const [key, value] of Object.entries(user)) {
    console.log(key);
    console.log(value);
}