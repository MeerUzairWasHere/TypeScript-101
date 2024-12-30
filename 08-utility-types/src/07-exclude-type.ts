type AvailableRoles = "admin" | "editor" | "viewer";
type RestrictedRoles = Exclude<AvailableRoles, "viewer">;
// Equivalent to: "admin" | "editor"
// `RestrictedRoles` excludes "viewer" from `AvailableRoles`.

const role: RestrictedRoles = "admin";
