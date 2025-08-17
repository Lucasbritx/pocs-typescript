/* https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types */
type StringNumberPair = [string, number];

const pair: StringNumberPair = ["hello", 42];

const first = pair[0];
const second = pair[1];

// Error: Index out of bounds
//const third = pair[2];

console.log({ first, second });
