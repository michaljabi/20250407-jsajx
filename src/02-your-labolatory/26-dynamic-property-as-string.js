const myIllegalKey = 'last-name';
const user = {
    name: 'Kate',
    lastName: 'Moss',
    [myIllegalKey]: 'test'
};

// user[myIllegalKey] = 'test'

console.log(user)

console.log(user[myIllegalKey])