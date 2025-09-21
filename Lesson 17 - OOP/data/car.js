class Car {
    #brand;
    #model;
    speed;
    isTrunkOpen;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = 0;
        this.isTrunkOpen = false;
    }

    displayInfo(){
        console.log(`${this.#brand} ${this.#model} ${this.speed} ${this.isTrunkOpen}`);
    }

    go() {
        if(this.speed+5 > 200 || this.isTrunkOpen)
            return;
        this.speed += 5;
    }

    brake() {
        if(this.speed-5 < 0)
            return;
        this.speed -= 5;
    }
    
    openTrunk() {
        if(this.speed > 0)
            return;
        this.isTrunkOpen = true;
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {
    acceleration;
    constructor(raceCarDetails) {
        super(raceCarDetails);
        this.acceleration = raceCarDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;
    }

    openTrunk() {
        this.isTrunkOpen = undefined;
    }

    closeTrunk() {
        this.isTrunkOpen = undefined;
    }
}

const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});
console.log(raceCar);

/*
const car1 = new Car({
    brand: "Toyota",
    model: "Corolla"
});
car1.openTrunk();
car1.go();
car1.displayInfo();
car1.closeTrunk();
car1.go();
car1.displayInfo();
car1.brake();
car1.brake();
car1.brake();
car1.displayInfo();

const car2 = new Car({
    brand: "Tesla",
    model: "Model 3"
});
car2.displayInfo();
car1.go();
car1.go();
car1.openTrunk();
car1.displayInfo();
car1.brake();
car1.displayInfo();

console.log(car1);
console.log(car2);
*/