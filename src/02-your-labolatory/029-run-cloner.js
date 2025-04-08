// var _ = require('lodash'); // CommonJS
import _ from 'lodash' // ESM (Ecma Script Modules) po 2015

// console.log(_);
// console.log(_.last([1, 2, 3]))

const user = {
    name: 'Michał'
}

const clonedUser = _.cloneDeep(user);

const notClonedUser = user;

console.log(clonedUser !== user);
console.log(notClonedUser === user);