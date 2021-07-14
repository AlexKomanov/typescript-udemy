interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
    }
};

function printVehicle(vehicle: Vehicle){
    // console.log(`Name: ${vehicle.name}, `);
    // console.log(`Year: ${vehicle.year}, `);
    // console.log(`Broken: ${vehicle.broken}, `);
    console.log(vehicle.summary())
};

printVehicle(oldCivic);
