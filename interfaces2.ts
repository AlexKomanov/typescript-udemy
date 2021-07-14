interface Reportable {
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

const cola = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Color: ${this.color}, Carbonated: ${this.carbonated}, Sugar: ${this.sugar}`;
    }
}

function printSummary(item: Reportable){
    console.log(item.summary())
};

printSummary(oldCivic);
printSummary(cola);
