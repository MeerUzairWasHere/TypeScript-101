// ## Classes - Instance Property / Default Property

// The checkedOut property in Book class is an instance property (or member variable). It's not specifically set in the constructor, so it could also be referred to as a default property or a property with a default value.

class Book1 {
  title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork1 = new Book1("deep work ", "cal newport");
deepWork1.checkedOut = true;
// deepWork.checkedOut = 'something else';
