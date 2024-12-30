type Roles = "admin" | "editor" | "viewer";

type Permissions6 = Record<Roles, boolean>;
// Equivalent to: { admin: boolean; editor: boolean; viewer: boolean }
// `Permissions` creates a mapping of each role to a boolean value.

const permissions: Permissions6 = {
  admin: true,
  editor: false,
  viewer: true,
};
