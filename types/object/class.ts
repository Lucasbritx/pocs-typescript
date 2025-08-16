class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}

const newCar = new Car("Onix", "Chevrolet", 2011);
newCar.drive();


newCar.make = "Toyota";
newCar.model = "Etios";

newCar.drive();
