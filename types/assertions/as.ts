/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions */

let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Outputs: 18