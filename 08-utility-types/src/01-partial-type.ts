interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// Equivalent to: { id?: number; name?: string; email?: string }
// `PartialUser` is a type where all properties of `User` are optional.

const updateUser: PartialUser = {
  email: "newemail@example.com", // Only the email is required, others are optional
};
