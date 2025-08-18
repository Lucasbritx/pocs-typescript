/* https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions */

const colors = ['red', 'green', 'blue'] as const;
// colors is now of type readonly ['red', 'green', 'blue']

// Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'.ts(2339)
//colors.push("yellow")
