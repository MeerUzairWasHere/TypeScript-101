interface User4 {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User4, "id" | "name">;
// Equivalent to: { id: number; name: string }
// `UserPreview` picks only the `id` and `name` properties from `User`.

const preview: UserPreview = { id: 1, name: "John Doe" };
