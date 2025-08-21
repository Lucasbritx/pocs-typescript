/* https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards */
let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}