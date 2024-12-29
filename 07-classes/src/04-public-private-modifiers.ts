// ## Classes - Private and Public Modifiers

// - private and public modifiers

class Book3 {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork3 = new Book3("Deep Work", "Cal Newport");
deepWork3.checkOut();
console.log(deepWork3.isCheckedOut()); // true
// deepWork.toggleCheckedOutStatus(); // Error: Property 'toggleCheckedOutStatus' is private and only accessible within class 'Book'.

// ## Classes - Shorthand Syntax

// In TypeScript, if you want to use the shorthand for creating and initializing class properties in the constructor, you need to use public, private, or protected access modifiers.

class Book4 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
}
