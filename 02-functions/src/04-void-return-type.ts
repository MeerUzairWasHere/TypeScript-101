// Functions - "void" return type

// In TypeScript, void is a special type that represents the absence of a value. When used as a function return type, void indicates that the function does not return a value.

// // function logMessage(message: string): void {
//   console.log(message);
//   return "hi";    //error
// }

// logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!

// It's important to note that in TypeScript, a function that is declared with a void return type can still return a value, but the value will be ignored.For example, the following code is valid TypeScript:

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!

