interface User5 {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User5, "email">;
// Equivalent to: { id: number; name: string }
// `UserWithoutEmail` excludes the `email` property from `User`.

const userWithoutEmail: UserWithoutEmail = { id: 1, name: "John Doe" };
