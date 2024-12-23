// Modules - Global Scope "Gotcha"

// If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. In this case, declaring the same variable in two different files would cause a conflict.

// tutorial.ts

// ```ts
// let name = "shakeAdnBake";

// const susan = "susan";

// export let something = "something";
// ```

// actions.ts

// ```ts
// const susan = "susan";

// export const something = "something";
// ```

// tsconfig.json

// ```json
// "moduleDetection": "force",
// ```

// - output

// tsconfig.json

// ```json
// "module": "ESNext",
// ```

// ## Modules - Imports/Exports (including types)

// ```ts
// export function sayHello(name: string): void {
//   console.log(`Hello ${name}!`);
// }

// export let person = "susan";

// export type Student = {
//   name: string;
//   age: number;
// };

// const newStudent: Student = {
//   name: "peter",
//   age: 24,
// };

// export default newStudent;
// ```

// ```ts
// import newStudent, { sayHello, person, type Student } from "./actions";

// sayHello("TypeScript");
// console.log(person);
// console.log(newStudent);

// const anotherStudent: Student = {
//   name: "bob",
//   age: 23,
// };

// console.log(anotherStudent);
// ```

// ## Modules - Javascript Files

// When you set "allowJs": true in your tsconfig.json, TypeScript will process JavaScript files and can infer types to a certain extent based on the structure and usage of your JavaScript code.

// However, TypeScript's ability to infer types from JavaScript is not as robust as when working with TypeScript files. For example, it might not be able to infer complex types or types that depend on runtime behavior.

// - create example.js
// - export someValue, import in tutorial

// ```ts
//   "allowJs": true,
// ```
