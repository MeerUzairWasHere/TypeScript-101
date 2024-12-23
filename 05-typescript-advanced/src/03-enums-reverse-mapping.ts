// // ## Enums - Gotcha : Reverse Mapping

// In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

// In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

// enum ServerResponseStatus {
//   Success = "Success",
//   Error = "Error",
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   console.log(value);
// });

// enum ServerResponseStatus {
//   Success = 200,
//   Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === "number") {
//     console.log(value);
//   }
// });

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "Value",
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = "Value"; // This is not allowed

enum ServerResponseStatus {
  Success = "Success",
  Error = "Error",
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

// function getServerResponse2(): ServerResponse {
//   return {
//     result: "Success", // <-- This will not fly with string enum but ok with number
//     data: ["first item", "second item"],
//   };
// }

// ## Challenge

// - Define an enum named UserRole with members Admin, Manager, and Employee.
// - Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
// - Define a function named createUser that takes a User object as its parameter and returns a User object.
// - Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

// Define an enum named UserRole
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define a type alias named User
type User1 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

// Define a function named createUser
function createUser(user: User1): User1 {
  return user;
}

// Call the createUser function
const user1: User1 = createUser({
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ["john.doe@example.com", "123-456-7890"],
});

console.log(user1);
