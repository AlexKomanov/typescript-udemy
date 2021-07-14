class Vehicle {

    //Constructor
    constructor(public color: string) {} //short option for initialization of field and constructor
//Methods
    public drive(): void { //public is a default one
        console.log(`I'm vehicle and I'm driving!`)
    }
    stop(): void {
        console.log(`I'm vehicle and I've stopped!`)
    }

    protected beep(): void {
        console.log('Beeeeeeep!');
    }
}

class Car extends Vehicle{

//Constructor of the derived class
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private driving() {
        console.log(`I'm car and I'm driving!`)
        this.beep();
        console.log(`Color of the car is ${this.color}`)
    }

    stop() {
        console.log(`I'm car and I've stopped!`)
    }

    public startDriving(): void {
        this.driving();
    }
}

const vehicle = new Vehicle('Black');
const car = new Car(4, 'Red');

// vehicle.drive();
// vehicle.stop();
//
// car.startDriving();

console.log(`Color of the car is ${car.color}, number wheels is ${car.wheels}`)
