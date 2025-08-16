interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

console.log({ greet: greet({ name: "Lucas", age: 25 }) });
