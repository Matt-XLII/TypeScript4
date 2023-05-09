"use strict";
class Animal {
    constructor(type, genus, color) {
        this.type = type;
        this.genus = genus;
        this.color = color;
    }
}
class Quadriped extends Animal {
    constructor(type, genus, legs, color) {
        super(type, genus, color);
        this.legs = legs;
    }
}
class Dog extends Quadriped {
    constructor(type, genus, legs, color) {
        super(type, genus, legs, color);
    }
}
class Cat extends Quadriped {
    constructor(type, genus, legs, color) {
        super(type, genus, legs, color);
    }
}
class Bird extends Animal {
    constructor(type, genus, color) {
        super(type, genus, color);
    }
}
class Fish extends Animal {
    constructor(type, genus, color) {
        super(type, genus, color);
    }
}
class Insect extends Animal {
    constructor(type, genus, color) {
        super(type, genus, color);
    }
}
const terre_neuve = new Dog("Terre Neuve", "canis", 4, "black");
const moon_moon = new Dog("Moon Moon", "canis", 4);
const european = new Cat("European", "felis", 4, "black");
const chartreux = new Cat("Chartreux", "felis", 4);
const maggot = new Insect("Maggot", "insect", "black");
const passerine = new Bird("Passerine", "bird");
const raven = new Bird("Raven", "bird", "black");
const thuna = new Fish("Thuna", "fish");
const shark = new Fish("Shark", "fish");
function bark(dog) {
    console.log(`${dog.type} says woof`);
}
function meow(cat) {
    console.log(`${cat.type} says meow`);
}
function fly(bird) {
    console.log(`${bird.type} flies`);
}
function swim(fish) {
    console.log(`${fish.type} swims`);
}
function pet(animal) {
    console.log(`You pet ${animal.type}`);
}
function feed(blackAnimal) {
    console.log(`You feed ${blackAnimal.type}`);
}
console.log(bark(terre_neuve));
console.log(meow(european));
console.log(fly(passerine));
console.log(swim(thuna));
console.log(pet(chartreux));
console.log(pet(moon_moon));
console.log(feed(terre_neuve));
console.log(feed(maggot));
