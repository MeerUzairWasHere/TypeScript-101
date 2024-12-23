// // ## Enums

// // Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

// enum ServerResponseStatus {
//   Success = 200,
//   Error = "Error",
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ["first item", "second item"],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);
