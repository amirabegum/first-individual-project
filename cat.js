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

const simba = new Cat('simba', 3, 82, 'grey', 34, 1000 )

module.exports = {
    Cat,
    simba
}