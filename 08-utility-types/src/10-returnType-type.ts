function getUser() {
  return { id: 1, name: "John Doe" };
}

type User11 = ReturnType<typeof getUser>;
// Equivalent to: { id: number; name: string }
// `User` is inferred as the return type of `getUser`.

const user21: User11 = { id: 1, name: "John Doe" };
