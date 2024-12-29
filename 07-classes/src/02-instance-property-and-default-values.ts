// ## Classes - Instance Property / Default Property

// The checkedOut property in Book class is an instance property (or member variable). It's not specifically set in the constructor, so it could also be referred to as a default property or a property with a default value.

class Book {
  title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book("deep work ", "cal newport");
deepWork.checkedOut = true;
// deepWork.checkedOut = 'something else';
