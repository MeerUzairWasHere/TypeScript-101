// ## Generics - Promise Example

// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.

async function someFunc1(): Promise<string> {
  return "Hello World";
}

const result2 = someFunc1();

// ## Generics - Generate Array

// generate an array of strings
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(3, "hello"));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(3, "hello"); // ["hello", "hello", "hello"]
let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]

console.log(arrayStrings);
console.log(arrayNumbers);

// ## Generics - Part 5

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result234 = pair<number, string>(123, "Hello");
console.log(result234); // Output: [123, "Hello"]

// ## Generics - Inferred Type and Type Constraints

function pair32<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result = pair32(123, "Hello");

//  const [name,setName] = useState('')
//  const [products,setProducts] = useState<Product[]>([])

// type constraint on the generic type T, generic type can be either a number or a string.

function processValue<T extends number | string>(value: T) {
  console.log(value);
}

processValue("hello");
processValue(12);
// processValue(true);

// ## Generics - Type Constraints 2

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

// T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.

// function printName<T extends Student>(input: T): void {
//   console.log(input.name);
// }

// printName(student);

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }

// printName(product);

// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
// In other words, T must have at least the same properties and methods that { name: string } has.
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);

// ## Generics - Default Value

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ["random", 1],
};

// data is located in the data property

// const { data } = axios.get(someUrl);

// axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }

// ## Fetch Data

// - typically axios and React Query (or both 🚀🚀🚀)
// - we won't set any state values

// const url = "https://www.course-api.com/react-tours-project";

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.error(errMsg);
//     // throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// });

// // return empty array
// // throw error in catch block
// // we are not setting state values in this function

// ## Challenge - Fetch Data

// - setup type and provide correct return type

// const url = "https://www.scourse-api.com/react-tours-project";

// // Define a type for the data you're fetching.
// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
//   // Add more fields as necessary.
// };

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: Tour[] = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.error(errMsg);

//     // throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });

// ## ZOD Library

// - Tour Data "Gotcha"

//  sh
// npm install zod

// - [Zod](https://zod.dev/)
// - [Error Handling in Zod](https://zod.dev/ERROR_HANDLING)

// import { z } from "zod";
// const url = "https://www.course-api.com/react-tours-project";

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
//   somethign: z.string(),
// });

// // extract the inferred type
// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const rawData: Tour[] = await response.json();
//     const result = tourSchema.array().safeParse(rawData);
//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }
//     return result.data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.log(errMsg);

//     // throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });
