// Type - "any"

// In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - "unknown" and "never"

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
