abstract class Car {
  // Protected властивості доступні в батьківському та похідних класах
  protected brand: string;
  protected year: number;
  // Private властивість доступна лише всередині батьківського класу
  private vinNumber: string;

  constructor(brand: string, year: number, vinNumber: string) {
    this.brand = brand;
    this.year = year;
    this.vinNumber = vinNumber;
  }

  // Загальний метод для отримання базової інформації
  public getBasicInfo(): string {
    return `Brand: ${this.brand}, Year: ${this.year}`;
  }

  // Публічний геттер — контрольований доступ до приватного поля
  public getVin(): string {
    return this.vinNumber;
  }

  // Абстрактний метод, який змушують реалізувати похідні класи
  public abstract getDescription(): void;
}

class Ford extends Car {
  // Public властивість (доступна скрізь)
  public model: string;
  // Private властивість конкретно для Ford (тип приводу)
  private driveType: string;

  constructor(model: string, year: number, vinNumber: string, driveType: string) {
    super("Ford", year, vinNumber); // Використання super()
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
  // Protected властивість, доступна в цьому класі та можливих його нащадках
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
  // Public властивість для типу двигуна
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

// Створення мінімум по 2 екземпляри для кожного похідного класу
const fordCar1 = new Ford("Focus", 2020, "1FA6P8CF...", "Front-Wheel");
const fordCar2 = new Ford("Mustang", 2023, "1FA6P8DH...", "Rear-Wheel");

const bmwCar1 = new BMW("3 Series", 2021, "WBA3R3C...", false);
const bmwCar2 = new BMW("M4", 2024, "WBA4Z9C...", true);

const toyotaCar1 = new Toyota("Camry", 2022, "4T1B11HK...", "Hybrid");
const toyotaCar2 = new Toyota("RAV4", 2023, "JTMBFREV...", "Petrol");

// Виклик методів для виведення опису автомобілів
fordCar1.getDescription();
fordCar2.getDescription();
bmwCar1.getDescription();
bmwCar2.getDescription();
toyotaCar1.getDescription();
toyotaCar2.getDescription();