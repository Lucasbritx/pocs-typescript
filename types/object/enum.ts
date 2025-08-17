/* https://www.typescriptlang.org/docs/handbook/enums.html */

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Left);

enum StringDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(StringDirection.Left);