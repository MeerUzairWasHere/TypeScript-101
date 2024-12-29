// ## Classes - Implement Interface

// In TypeScript, an interface is a way to define a contract for a certain structure of an object. This contract can then be used by a class to ensure it adheres to the structure defined by the interface.

// When a class implements an interface, it is essentially promising that it will provide all the properties and methods defined in the interface. If it does not, TypeScript will throw an error at compile time.

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const hipster = new Person("shakeAndBake", 100);
hipster.greet();
