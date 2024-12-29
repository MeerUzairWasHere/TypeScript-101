// ## Classes - Intro

// Classes in JavaScript are a blueprint for creating objects. They encapsulate data with code to manipulate that data. Classes in JavaScript support inheritance and can be used to create more complex data structures.

// A constructor in a class is a special method that gets called when you create a new instance of the class. It's often used to set the initial state of the object.

class Book {
  title: string;
  author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book("deep work ", "cal newport");
