function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'