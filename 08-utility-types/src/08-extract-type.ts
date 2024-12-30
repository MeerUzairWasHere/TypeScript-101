type AllRoles = "admin" | "editor" | "viewer";
type ViewerOnly = Extract<AllRoles, "viewer">;
// Equivalent to: "viewer"
// `ViewerOnly` extracts only the "viewer" from `AllRoles`.

const role2: ViewerOnly = "viewer";
