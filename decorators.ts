class CarDecorator {
  @fieldDecorator
  color: string = "white";

  get formattedColor(): string {
    return `This car color is ${this.color}.`;
  }

  @logError("The car has crashed!")
  drive(): void {
    throw new Error();
    console.log("I am driving");
  }
}

function fieldDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
new CarDecorator().drive();
