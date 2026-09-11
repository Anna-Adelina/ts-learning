abstract class Car {
  protected brand: string;
  protected year: number;
  private vinNumber: string;

  constructor(brand: string, year: number, vinNumber: string) {
    this.brand = brand;
    this.year = year;
    this.vinNumber = vinNumber;
  }

  public getBasicInfo(): string {
    return `Brand: ${this.brand}, Year: ${this.year}`;
  }

  public getVin(): string {
    return this.vinNumber;
  }

  public abstract getDescription(): void;
}

class Ford extends Car {
  public model: string;
  private driveType: string;

  constructor(model: string, year: number, vinNumber: string, driveType: string) {
    super("Ford", year, vinNumber); // super()
    this.model = model;
    this.driveType = driveType;
  }

  public getDescription(): void {
    console.log(
      `[Ford Model] ${this.model} | ${this.getBasicInfo()} | VIN: ${this.getVin()} | Drive: ${this.driveType}`
    );
  }
}

class BMW extends Car {
  public model: string;
  protected isMPerformance: boolean;

  constructor(model: string, year: number, vinNumber: string, isMPerformance: boolean) {
    super("BMW", year, vinNumber);
    this.model = model;
    this.isMPerformance = isMPerformance;
  }

  public getDescription(): void {
    console.log(
      `[BMW Model] ${this.model} | ${this.getBasicInfo()} | VIN: ${this.getVin()} | M-Performance: ${this.isMPerformance}`
    );
  }
}

class Toyota extends Car {
  public model: string;
  public engineType: string;

  constructor(model: string, year: number, vinNumber: string, engineType: string) {
    super("Toyota", year, vinNumber);
    this.model = model;
    this.engineType = engineType;
  }

  public getDescription(): void {
    console.log(
      `[Toyota Model] ${this.model} | ${this.getBasicInfo()} | VIN: ${this.getVin()} | Engine: ${this.engineType}`
    );
  }
}

const fordCar1 = new Ford("Focus", 2020, "1FA6P8CF...", "Front-Wheel");
const fordCar2 = new Ford("Mustang", 2023, "1FA6P8DH...", "Rear-Wheel");

const bmwCar1 = new BMW("3 Series", 2021, "WBA3R3C...", false);
const bmwCar2 = new BMW("M4", 2024, "WBA4Z9C...", true);

const toyotaCar1 = new Toyota("Camry", 2022, "4T1B11HK...", "Hybrid");
const toyotaCar2 = new Toyota("RAV4", 2023, "JTMBFREV...", "Petrol");

fordCar1.getDescription();
fordCar2.getDescription();
bmwCar1.getDescription();
bmwCar2.getDescription();
toyotaCar1.getDescription();
toyotaCar2.getDescription();