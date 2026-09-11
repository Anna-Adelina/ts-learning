interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
}

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

class Library {
  private items: LibraryItem[] = [];

  public addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  public findItemByName(name: string): LibraryItem | undefined {
    return this.items.find((item) => item.title === name);
  }

  // список доступних елементів
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

const book = new Book("1984", "George Orwell", 328);
const magazine = new Magazine("National Geographic", "Various Authors", 245);
const dvd = new DVD("Inception", "Christopher Nolan", 148);

const library = new Library();
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

console.log("--- До позичання ---");
library.printAvailableItems();

console.log("\n--- Операції позичання ---");
book.borrow();
book.borrow(); 
dvd.borrow();

console.log("\n--- Пошук ---");
const found = library.findItemByName("National Geographic");
console.log(`Знайдено: ${found ? `${found.title} (${found.author})` : "не знайдено"}`);

console.log("\n--- Після позичання ---");
library.printAvailableItems();