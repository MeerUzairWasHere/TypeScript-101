interface User2 {
  id: number;
  name?: string;
  email?: string;
}

type CompleteUser = Required<User>;
// Equivalent to: { id: number; name: string; email: string }
// `CompleteUser` ensures all properties are required, including optional ones.

const completeUser: CompleteUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com", // All fields are now required
};
