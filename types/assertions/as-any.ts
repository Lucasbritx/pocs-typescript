/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any */

let anyValue: any = 42;
console.log(anyValue);

// we can assign any value to anyValue, regardless of its type
anyValue = "Hello, world!";
console.log(anyValue);
anyValue = true;
console.log(anyValue);

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
//obj.foo();
//obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

console.log(n);
