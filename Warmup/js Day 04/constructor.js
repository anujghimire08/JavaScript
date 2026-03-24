//A constructor is a special function used to create multiple objects with the same structure.

//Before ES6, we created constructors using function constructors.
function person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.display = () =>
    console.log(`my name iz ${name}. i'm ${age} and I work as ${this.job}`);
}

const person1 = new person("anuj", 15, "Developer");
const person2 = new person("ram", 8, "Actor");
const person3 = new person("anuja", 12, "Broker");

person1.display();
person2.display();
person3.display();
