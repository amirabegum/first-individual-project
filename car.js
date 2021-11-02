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

const mell = new Car('merc', 'C63 AMG', 500, 'SM04EDZ', 135000, 80, 'blue', 4000)
const edward = new Car('seat', 'Ibiza FR', 400, 'KS13MFE', 64000, 70, 'grey', 4000)

module.exports = {
    Car,
    mell,
    edward
}