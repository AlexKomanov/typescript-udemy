@classDecorator
class CarDecorator {
  @fieldDecorator
  color: string = "white";

  @accessDecorator
  get formattedColor(): string {
    return `This car color is ${this.color}.`;
  }

  @logError("The car has crashed!")
  drive(@parameterDecorator speed: string): void {
    throw new Error();
    console.log("I am driving");
  }
}

function classDecorator(constructor: Function){
    console.log(constructor);
    
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
  }

function fieldDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function accessDecorator(target: any, key: string) {
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
new CarDecorator().drive('123');
