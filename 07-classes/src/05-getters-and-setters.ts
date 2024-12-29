// ## Classes - Getters and Setters

// Getters and setters are special methods in a class that allow you to control how a property is accessed and modified.They are used like properties, not methods, so you don't use parentheses to call them.

class Book5 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }
  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork5 = new Book5("deep work", "cal newport");
console.log(deepWork5.info);
// deepWork5.checkOut = true;
console.log(deepWork5.someInfo);
console.log(deepWork5.checkOut);
