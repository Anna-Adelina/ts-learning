interface Animal {
  name: string;
  age: number;
  canFly?: boolean;       
  move(): string;
  makeSound?(): string;   
}

class Cat implements Animal {
  name: string;
  age: number = 4;

  constructor(name: string) {
    this.name = name;
  }

  move(): string {
    return `${this.name} біжить на чотирьох лапах.`;
  }

  makeSound(): string {
    return `${this.name} каже: Няв!`;
  }
}

class Bird implements Animal {
  name: string;
  age: number = 2;
  canFly: boolean;

  constructor(name: string, canFly: boolean = true) {
    this.name = name;
    this.canFly = canFly;
  }

  move(): string {
    return this.canFly
      ? `${this.name} летить у небі.`
      : `${this.name} ходить по землі.`;
  }

  makeSound(): string {
    return `${this.name} каже: Цвірінь!`;
  }
}

class Fish implements Animal {
  name: string;
  age: number = 1;

  constructor(name: string) {
    this.name = name;
  }

  move(): string {
    return `${this.name} пливе у воді.`;
  }
}

const cat: Animal = new Cat("Мурчик");
const bird: Animal = new Bird("Кеша");
const penguin: Animal = new Bird("Пінгвін", false);
const fish: Animal = new Fish("Немо");

console.log(cat.move());
console.log(cat.makeSound?.());

console.log(bird.move());
console.log(bird.makeSound?.());

console.log(penguin.move());

console.log(fish.move());
console.log(fish.makeSound?.() ?? `${fish.name} не видає звуків.`);