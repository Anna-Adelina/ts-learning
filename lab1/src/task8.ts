// Інтерфейс, що описує курс
interface Course {
  name: string;
  durationHours: number;
  students: string[];
}

// Клас OnlineCourse реалізує інтерфейс Course
class OnlineCourse implements Course {
  public students: string[] = [];

  constructor(
    public name: string,
    public durationHours: number
  ) {}

  // Реєстрація студента на курс
  public registerStudent(student: string): void {
    if (this.isStudentRegistered(student)) {
      console.log(`${student} вже зареєстрований на курс "${this.name}".`);
      return;
    }
    this.students.push(student);
    console.log(`${student} успішно зареєстрований на курс "${this.name}".`);
  }

  // Перевірка, чи студент вже зареєстрований
  public isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

// Клас CourseManager керує масивом курсів
class CourseManager {
  private courses: Course[] = [];

  // Додавання курсу
  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  // Видалення курсу за назвою
  public removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
  }

  // Пошук курсу за назвою
  public findCourse(courseName: string): Course | undefined {
    return this.courses.find((course) => course.name === courseName);
  }

  // Виведення списку всіх курсів разом із зареєстрованими студентами
  public printAllCourses(): void {
    this.courses.forEach((course) => {
      const studentsList = course.students.length > 0
        ? course.students.join(", ")
        : "немає зареєстрованих студентів";
      console.log(`Курс: "${course.name}" (${course.durationHours} год.) — ${studentsList}`);
    });
  }
}

// --- Перевірка ---

// Створення кількох курсів
const tsCourse = new OnlineCourse("TypeScript Basics", 20);
const jsCourse = new OnlineCourse("JavaScript Advanced", 30);
const reactCourse = new OnlineCourse("React for Beginners", 25);

// Створення менеджера курсів і додавання курсів
const manager = new CourseManager();
manager.addCourse(tsCourse);
manager.addCourse(jsCourse);
manager.addCourse(reactCourse);

// Реєстрація студентів на деякі курси
tsCourse.registerStudent("Anna");
tsCourse.registerStudent("Oleh");
tsCourse.registerStudent("Anna"); // повторна спроба — має вивести попередження

jsCourse.registerStudent("Maria");

// reactCourse навмисно лишаємо без студентів — перевірка виводу "немає зареєстрованих студентів"

// Перевірка isStudentRegistered
console.log(`\nAnna зареєстрована на TS курс? ${tsCourse.isStudentRegistered("Anna")}`);
console.log(`Petro зареєстрований на JS курс? ${jsCourse.isStudentRegistered("Petro")}`);

// Пошук курсу за назвою
const found = manager.findCourse("JavaScript Advanced");
console.log(`\nЗнайдений курс: ${found ? found.name : "не знайдено"}`);

// Видалення курсу
manager.removeCourse("React for Beginners");

// Виведення списку курсів разом із зареєстрованими студентами
console.log("\n--- Список курсів ---");
manager.printAllCourses();