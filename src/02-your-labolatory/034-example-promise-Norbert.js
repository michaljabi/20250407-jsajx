const collector1 = [];

collector1.push(1);

function setTimeoutAsync(callback, miliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback()
            resolve();
        }, miliseconds);
    })
}

async function czekaj1() {
    await setTimeoutAsync(() => { console.log('setitme done') }, 2000);
    console.log('po await')
}

czekaj1().then(() => { collector1.push(3); console.log(2) })

console.log('Koniec')