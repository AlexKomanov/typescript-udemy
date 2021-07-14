class Vehicle {

    //Fields
    color: string;

    //Constructor
    constructor(color: string) {
        this.color = color;
    }

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

    private driving() {
        console.log(`I'm car and I'm driving!`)
        this.beep();
    }

    stop() {
        console.log(`I'm car and I've stopped!`)
    }

    public startDriving(): void {
        this.driving();
    }
}

const vehicle = new Vehicle('Black');
const car = new Car('Red');

vehicle.drive();
vehicle.stop();

car.startDriving();
