class CarDecorator {
  color: string = "white";

  get formattedColor(): string {
    return `This car color is ${this.color}.`;
  }

  @logError
  drive(): void {
    throw new Error();
    console.log("I am driving");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (error) {
      console.log("Darn! The car is crashed!");
    }
  };
}

new CarDecorator().drive();
