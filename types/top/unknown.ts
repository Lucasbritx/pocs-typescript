/* https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type */

function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: Property 'b' does not exist on type 'unknown'.
  a.b();
}