class Vehicle{
    constructor(manufacturer, model, year, type, numberOfDoors) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.type = type;
    this.numberOfDoors = numberOfDoors;
  }
  showVehicleData(){
    console.log(`${this.manufacturer} ${this.model}, ${this.year} (${this.type}),${this.numberOfDoors} doors`)
  }
}

class Car extends Vehicle{
constructor(manufacturer, model, year, type, numberOfDoors){
super(manufacturer, model, year, type, numberOfDoors);}
}

class Motorcycle extends Vehicle{
    constructor(manufacturer, model, year, engineDisplacement){
        super(manufacturer, model, year,);
        this.engineDisplacement = engineDisplacement;
    }
     showVehicleData() {
    console.log(`${this.manufacturer} ${this.model}, ${this.year}, ${this.engineDisplacement} cc`);
  }
}

const mycar = new Car("Ford", "Ka", "2008", "Sedan", 4);
mycar.showVehicleData();

const mymotorcycle = new Motorcycle(
  "Harley-Davidson",
  "Sportster Iron 883",
  "2022",
  "883"
);
mymotorcycle.showVehicleData();
