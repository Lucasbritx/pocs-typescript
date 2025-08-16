/* https://www.typescriptlang.org/docs/handbook/2/functions.html#void */
// The inferred return type is void
function noop() {
  return;
}

console.log({ function: noop() });
