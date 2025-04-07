// literał regexpowy /\d/ zmiast new RegExp('\\d')
// literał tablicowy [] zamiast new Array()

// literał obiektowy {} zamiast new Object()

console.log(new Object());
console.log({});

console.log(new Object({ name: 'Michał' }));
console.log({ name: 'Michał' });

console.log(new Function());

// sprawdzenie czy string od ^ początku do $ końca jest cyfrowy \d
console.log(/^\d+$/.test('231213'))
console.log(new RegExp('^\\d+$').test('231213'))