const name = "Maurice";
function hello() {

}
const lastName = "Moss";
const user = {
  name,
  lastName,
  hello
};

console.log(name, lastName);
console.log(user);
console.log(user.name);

// W JS stosujemy zasadę "Favor const over let"
// Pozwala to nam na upewnienie się, że tam, gdzie nie potrzeba — nikt nie nadpisze nam wartości, z nowym typem....

export {};
