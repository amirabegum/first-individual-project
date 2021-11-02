class Person {
    constructor(name, age, occupation, tiredness, strength, children ){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.country = 'UK'
        this.legs = 2; 
        this.tiredness = tiredness;
        this.strength = strength;
        this.children = children;

    }

    birthday(){
        this.age++;
    }

    sleep(){
        this.tiredness -= 10;
        this.strength += 10; 
    }

    exercise(){
        this.tiredness += 10;
        this.strength -= 10;
    }

    kids(){
        this.children++;

    }
}

class Car {
    constructor(make, model, bhp, reg, mileage, speed, colour, price){
        this.make = make;
        this.model = model;
        this.bhp = bhp;
        this.reg = reg;
        this.mileage = mileage;
        this.wheels = 4;
        this.speed = speed;
        this.colour = colour;
        this.price = price;
    }

    accident(){
        this.price -= 1000;
    }

    fuel(){
        this.speed += 10;
    }

    drive(){
        this.speed += 10;
        this.fuel -= 10;
        this.mileage += 100;
    }

    remap(){
        this.bhp += 100;
    }

}

class Cat {
    constructor (name, age, hunger, color, exhaustion, happiness){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.legs = 4;
        this.color = color;
        this.eyes = 2;
        this.exhaustion = exhaustion;
        this.happiness = happiness;

    }

    train(){
        this.hunger += 10;
    }

    sleep(){
        this.exhaustion -= 10;
    }

    eat(){
        this.hunger -= 5;
    }

    play(){
        this.happiness++;
    }
}


const amira = new Person('amira', 22, 'tester', 75, 80, 2)
const chris = new Person ('chris', 38, 'Doctor', 25, 100, 5)
const simba = new Cat('simba', 3, 82, 'grey', 34, 1000 )
const mell = new Car('merc', 'C63 AMG', 500, 'SM04EDZ', 135000, 80, 'blue', 4000)
const edward = new Car('seat', 'Ibiza FR', 400, 'KS13MFE', 64000, 70, 'grey', 4000)

module.exports = {
    Person,
    amira,
    chris,
    Cat,
    simba,
    Car,
    mell,
    edward
}

