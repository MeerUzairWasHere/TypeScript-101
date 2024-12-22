// Objects - Fundamentals

// In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: "audi", year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

let book = { title: "book", cost: 20 };

let pen = { title: "pen", cost: 5 };

let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = "new book"; // Error: Cannot assign to 'title' because it is a read-only property
