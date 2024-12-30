type MaybeUser = string | null | undefined;

type User10 = NonNullable<MaybeUser>;
// Equivalent to: string
// `User` removes `null` and `undefined` from `MaybeUser`.

const user10: User10 = "John Doe";
// const nullUser: User = null; // Error
