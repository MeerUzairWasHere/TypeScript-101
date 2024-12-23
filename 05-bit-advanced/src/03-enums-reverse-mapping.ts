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
