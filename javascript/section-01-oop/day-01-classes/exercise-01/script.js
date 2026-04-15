class Car {
  constructor(manufacturer, model, year, type, numberOfDoors) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.type = type;
    this.numberOfDoors = numberOfDoors;
  }
  showCarData() {
    console.log(
      `${this.manufacturer} ${this.model}, ${this.year} (${this.type}),${this.numberOfDoors} doors`,
    );
  }
}

class Motorcycle {
  constructor(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
  }
  showMotorcycleData() {
    console.log(`${this.manufacturer} ${this.model}, ${this.year}`);
  }
}

const mycar = new Car("Ford", "Ka", "2008", "Sedan", 4);
mycar.showCarData();

const mymotorcycle = new Motorcycle(
  "Harley-Davidson",
  "Sportster Iron 883",
  "2022",
);
mymotorcycle.showMotorcycleData();