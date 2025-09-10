/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases */

type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const user: User = { name: 'John', age: 30 };