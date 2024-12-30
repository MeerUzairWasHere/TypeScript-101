interface User3 {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User3>;
// Equivalent to: { readonly id: number; readonly name: string }
// `ReadonlyUser` makes all properties of `User` immutable.

const user: ReadonlyUser = { id: 1, name: "Jane Doe" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
