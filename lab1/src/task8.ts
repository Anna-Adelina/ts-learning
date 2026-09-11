interface Course {
  name: string;
  durationHours: number;
  students: string[];
}

class OnlineCourse implements Course {
  public students: string[] = [];

  constructor(
    public name: string,
    public durationHours: number
  ) {}

  public registerStudent(student: string): void {
    if (this.isStudentRegistered(student)) {
      console.log(`${student} вже зареєстрований на курс "${this.name}".`);
      return;
    }
    this.students.push(student);
    console.log(`${student} успішно зареєстрований на курс "${this.name}".`);
  }

  public isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
  }

  public findCourse(courseName: string): Course | undefined {
    return this.courses.find((course) => course.name === courseName);
  }

  public printAllCourses(): void {
    this.courses.forEach((course) => {
      const studentsList = course.students.length > 0
        ? course.students.join(", ")
        : "немає зареєстрованих студентів";
      console.log(`Курс: "${course.name}" (${course.durationHours} год.) — ${studentsList}`);
    });
  }
}


const tsCourse = new OnlineCourse("TypeScript Basics", 20);
const jsCourse = new OnlineCourse("JavaScript Advanced", 30);
const reactCourse = new OnlineCourse("React for Beginners", 25);

const manager = new CourseManager();
manager.addCourse(tsCourse);
manager.addCourse(jsCourse);
manager.addCourse(reactCourse);

tsCourse.registerStudent("Anna");
tsCourse.registerStudent("Oleh");
tsCourse.registerStudent("Anna"); 

jsCourse.registerStudent("Maria");


console.log(`\nAnna зареєстрована на TS курс? ${tsCourse.isStudentRegistered("Anna")}`);
console.log(`Petro зареєстрований на JS курс? ${jsCourse.isStudentRegistered("Petro")}`);

const found = manager.findCourse("JavaScript Advanced");
console.log(`\nЗнайдений курс: ${found ? found.name : "не знайдено"}`);

manager.removeCourse("React for Beginners");

console.log("\n--- Список курсів ---");
manager.printAllCourses();