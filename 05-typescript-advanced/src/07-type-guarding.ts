// ## Type Guarding

type ValueType = string | number | boolean;

let value: ValueType;
const randomValue = Math.random();
value = randomValue < 0.33 ? "Hello" : randomValue < 0.66 ? 123.456 : true;

function checkValue(value: ValueType) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

checkValue(value);

// ## Equality Narrowing

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSoundEquality(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

// ## Check for property

function makeSoundProperty(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// ## "Truthy"/"Falsy" guard

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("No string provided");
  }
}

printLength("Hello");
printLength(null);
printLength(undefined);

// ## "instanceof" type guard

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const yearInput = checkInput(new Date());
const randomString = checkInput("2020-05-05");
console.log(yearInput);
console.log(randomString);

// ## Type Predicate

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPersonGenerator = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const individual = randomPersonGenerator();

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}

if (isStudent(individual)) {
  individual.study();
} else {
  individual.login();
}

// ## Optional - type "never" gotcha

const specificPerson: Person = {
  name: "anna",
  study: () => console.log("Studying"),
};

if (isStudent(specificPerson)) {
  specificPerson.study();
} else {
  console.log(specificPerson); // TypeScript ensures `specificPerson` is `never` here
}

// ## Discriminated Unions and exhaustive check using the never type

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;

    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const updatedState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});
