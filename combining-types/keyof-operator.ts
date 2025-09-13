/* https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content */
interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';