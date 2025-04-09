function getAsyncNumber(checkCondition) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello')
        }, 5000)
    })
}

const value = await getAsyncNumber(true);
console.log(value);
console.log("DOPIERO JA")

// to matix, bo w realu wygląda to tak:

getAsyncNumber(true)
    .then((value) => {
        console.log(value);
    }).then(() => {
        console.log("DOPIERO JA")
    })

// co nam daje await - i jak to się zachowa wtedy?
// po e30
