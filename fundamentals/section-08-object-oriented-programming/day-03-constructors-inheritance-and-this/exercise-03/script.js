class Employee {
  name = "";
  salary = 0;
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  showEmployee() {
    console.log(`Name: ${this.name}`);
    console.log(`Salary: $${this.salary}`);
  }
}

class Manager extends Employee {
  sector = "";

  constructor(name, salary, sector) {
    super(name, salary);
    this.sector = sector;
  }
  showEmployee() {
    console.log(`Name: ${this.name}`);
    console.log(`Salary: $${this.salary} + Bonus`);
  }

  showManagerRole() {
    console.log(`${this.name} is the ${this.sector} Department Manager.`);
  }
}

const manager1 = new Manager("Ana", 100, "Technology");
manager1.showEmployee();
manager1.showManagerRole();

const employee2 = new Employee("Maddy", 50);
employee2.showEmployee();

