console.log('first')

    ; (() => {
        console.log('IFFE')
    })();

// to jest TASK
setTimeout(() => {
    console.log('2nd')
    // to trafi do tzw. "kolejki TASKÓW"
});


// to jest Mikrotask
queueMicrotask(() => {
    console.log('first microtask')
})
Promise.resolve().then(() => {
    console.log('3rd')
    // to trafi do tzw. "kolejki mikrotasków"
});
Promise.resolve().then(() => {
    console.log('3rd')
    // to trafi do tzw. "kolejki mikrotasków"
});
Promise.resolve().then(() => {
    console.log('3rd')
    // to trafi do tzw. "kolejki mikrotasków"
});
Promise.resolve().then(() => {
    console.log('3rd')
    // to trafi do tzw. "kolejki mikrotasków"
});



console.log('last')


//co to jest event-loop


/// tricki:

function giveMeANumber() {
    setTimeout(() => console.log('User requested number 10'));
    return 10;
}

console.log(giveMeANumber());