interface Payable {
  pay(): void;
}

abstract class Employee {
  constructor(
    public name: string,
    public age: number,
    public salary: number
  ) {}

  public abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  public getAnnualBonus(): number {
    return this.salary * 0.10;
  }

  public pay(): void {
    console.log(`Processing payment of ${this.salary} for developer ${this.name}.`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  public getAnnualBonus(): number {
    return this.salary * 0.20;
  }

  public pay(): void {
    console.log(`Processing payment of ${this.salary} for manager ${this.name}.`);
  }
}

const employees: Employee[] = [
  new Developer("Alice", 25, 3000),
  new Developer("Bob", 28, 3500),
  new Manager("Charlie", 35, 5000),
  new Manager("Diana", 32, 4800)
];

let totalAnnualBonuses = 0;

employees.forEach((emp) => {
  const bonus = emp.getAnnualBonus();
  totalAnnualBonuses += bonus;
  console.log(`${emp.name} (${emp.constructor.name}) Annual Bonus: ${bonus}`);
});

console.log(`\nTotal Annual Bonuses for all employees: ${totalAnnualBonuses}`);