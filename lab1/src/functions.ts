// Функція з параметром за замовчуванням
function greetUser(name: string, age: number = 18): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Виклик з обома аргументами
console.log(greetUser("Anna", 19));

// Виклик без другого аргументу — використає значення за замовчуванням (18)
console.log(greetUser("Baddie"));