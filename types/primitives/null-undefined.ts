/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined */
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

console.log({ function: doSomething(null) });
