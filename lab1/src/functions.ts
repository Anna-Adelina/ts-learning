function greetUser(name: string, age: number = 18): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

// 2 аргументами
console.log(greetUser("Anna", 19));

// значення за замовчуванням 
console.log(greetUser("Baddie"));