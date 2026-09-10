interface Payable {
  pay(): void;
}

abstract class Employee {
  constructor(
    public name: string,
    public age: number,
    public salary: number
  ) {}

  // Абстрактний метод для розрахунку річного бонусу
  public abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  public getAnnualBonus(): number {
    // Річний бонус — 10% від зарплати
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
    // Річний бонус — 20% від зарплати
    return this.salary * 0.20;
  }

  public pay(): void {
    console.log(`Processing payment of ${this.salary} for manager ${this.name}.`);
  }
}

// Створення масиву об'єктів типу Employee
const employees: Employee[] = [
  new Developer("Alice", 25, 3000),
  new Developer("Bob", 28, 3500),
  new Manager("Charlie", 35, 5000),
  new Manager("Diana", 32, 4800)
];

// Підрахунок загальної річної суми бонусів для всіх співробітників
let totalAnnualBonuses = 0;

employees.forEach((emp) => {
  const bonus = emp.getAnnualBonus();
  totalAnnualBonuses += bonus;
  console.log(`${emp.name} (${emp.constructor.name}) Annual Bonus: ${bonus}`);
});

console.log(`\nTotal Annual Bonuses for all employees: ${totalAnnualBonuses}`);