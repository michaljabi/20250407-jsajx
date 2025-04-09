class Vehicle { }

class Car extends Vehicle { }


const car = new Car();

console.log(car instanceof Object);
console.log(car instanceof Vehicle);
console.log(car instanceof Car);

console.log(Object.getPrototypeOf(car) === Object.prototype);
console.log(Object.getPrototypeOf(car) === Car.prototype);
console.log(Object.getPrototypeOf(car) === Vehicle.prototype);

const secondCar = new Vehicle();

console.log(secondCar instanceof Object);
console.log(secondCar instanceof Car);
console.log(secondCar instanceof Vehicle);

console.log(Object.getPrototypeOf(secondCar) === Object.prototype);
console.log(Object.getPrototypeOf(secondCar) === Car.prototype);
console.log(Object.getPrototypeOf(secondCar) === Vehicle.prototype);

const thirdCar = {};

console.log(thirdCar instanceof Object);
console.log(thirdCar instanceof Car);
console.log(thirdCar instanceof Vehicle);

console.log(Object.getPrototypeOf(thirdCar) === Object.prototype);
console.log(Object.getPrototypeOf(thirdCar) === Car.prototype);
console.log(Object.getPrototypeOf(thirdCar) === Vehicle.prototype);