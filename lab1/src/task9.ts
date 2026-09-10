// src/task9.ts

// Інтерфейс, що описує елемент бібліотеки
interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
}

// Клас Book реалізує інтерфейс LibraryItem
class Book implements LibraryItem {
  public isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public pages: number
  ) {}

  public borrow(): void {
    if (this.isBorrowed) {
      console.log(`Книга "${this.title}" вже позичена.`);
      return;
    }
    this.isBorrowed = true;
    console.log(`Книгу "${this.title}" позичено.`);
  }
}

// Клас Magazine реалізує інтерфейс LibraryItem
class Magazine implements LibraryItem {
  public isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public issueNumber: number
  ) {}

  public borrow(): void {
    if (this.isBorrowed) {
      console.log(`Журнал "${this.title}" (випуск №${this.issueNumber}) вже позичений.`);
      return;
    }
    this.isBorrowed = true;
    console.log(`Журнал "${this.title}" (випуск №${this.issueNumber}) позичено.`);
  }
}

// Клас DVD реалізує інтерфейс LibraryItem
class DVD implements LibraryItem {
  public isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public durationMinutes: number
  ) {}

  public borrow(): void {
    if (this.isBorrowed) {
      console.log(`DVD "${this.title}" вже позичено.`);
      return;
    }
    this.isBorrowed = true;
    console.log(`DVD "${this.title}" (${this.durationMinutes} хв.) позичено.`);
  }
}

// Клас Library керує масивом елементів бібліотеки
class Library {
  private items: LibraryItem[] = [];

  // Додавання елемента до бібліотеки
  public addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  // Пошук елемента за назвою
  public findItemByName(name: string): LibraryItem | undefined {
    return this.items.find((item) => item.title === name);
  }

  // Виведення списку доступних (не позичених) елементів
  public printAvailableItems(): void {
    const available = this.items.filter((item) => !item.isBorrowed);
    if (available.length === 0) {
      console.log("Немає доступних елементів.");
      return;
    }
    console.log("Доступні елементи:");
    available.forEach((item) => {
      console.log(`- "${item.title}" (${item.author})`);
    });
  }
}

// --- Перевірка ---

// Створення кількох елементів бібліотеки
const book = new Book("1984", "George Orwell", 328);
const magazine = new Magazine("National Geographic", "Various Authors", 245);
const dvd = new DVD("Inception", "Christopher Nolan", 148);

// Створення бібліотеки і додавання елементів
const library = new Library();
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

// Виведення списку доступних елементів до позичання
console.log("--- До позичання ---");
library.printAvailableItems();

// Позичання деяких елементів
console.log("\n--- Операції позичання ---");
book.borrow();
book.borrow(); // повторна спроба — має вивести попередження
dvd.borrow();

// Пошук елемента за назвою
console.log("\n--- Пошук ---");
const found = library.findItemByName("National Geographic");
console.log(`Знайдено: ${found ? `${found.title} (${found.author})` : "не знайдено"}`);

// Виведення списку доступних елементів після позичання
console.log("\n--- Після позичання ---");
library.printAvailableItems();