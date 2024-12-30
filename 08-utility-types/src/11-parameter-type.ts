function greet(name: string, age: number): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

type GreetParams = Parameters<typeof greet>;
// Equivalent to: [string, number]
// `GreetParams` extracts the types of `greet`'s parameters.

const params: GreetParams = ["John", 30];
