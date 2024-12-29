// ## Classes - ReadOnly Modifier

// - readonly modifier

class Book2 {
  readonly title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork2 = new Book2("deep work ", "cal newport");

// deepWork2.title = "something else"; Cannot assign to 'title' because it is a read-only property.ts(2540)
