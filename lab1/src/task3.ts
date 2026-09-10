import promptSync from "prompt-sync";

const prompt = promptSync();

// Типи для розміру та начинок — обмежують можливі значення (union types)
type Size = "small" | "large";
type Topping = "chocolate" | "caramel" | "berries";

// Ціни зберігаємо в об'єктах з чіткою типізацією через Record
const sizePrices: Record<Size, number> = {
  small: 10,
  large: 25,
};

const toppingPrices: Record<Topping, number> = {
  chocolate: 5,
  caramel: 6,
  berries: 10,
};

const MARSHMALLOW_PRICE = 5;

// Основна функція розрахунку — приймає вже перевірені типізовані дані
function calculateIceCreamPrice(
  size: Size,
  toppings: Topping[],
  hasMarshmallow: boolean
): number {
  let total = sizePrices[size];

  for (const topping of toppings) {
    total += toppingPrices[topping];
  }

  if (hasMarshmallow) {
    total += MARSHMALLOW_PRICE;
  }

  return total;
}

// Функція перевірки, чи введений розмір валідний
function parseSize(input: string): Size {
  const normalized = input.trim().toLowerCase();
  if (normalized === "small" || normalized === "large") {
    return normalized;
  }
  throw new Error("Невірний розмір. Введіть 'small' або 'large'.");
}

// Функція перевірки та парсингу начинок (введених через кому)
function parseToppings(input: string): Topping[] {
  const validToppings: Topping[] = ["chocolate", "caramel", "berries"];
  const entered = input
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter((t) => t.length > 0);

  if (entered.length === 0) {
    throw new Error("Потрібно вказати хоча б одну начинку.");
  }

  const toppings: Topping[] = [];
  for (const t of entered) {
    if (validToppings.includes(t as Topping)) {
      toppings.push(t as Topping);
    } else {
      throw new Error(`Невірна начинка: ${t}`);
    }
  }

  return toppings;
}

// --- Збір даних від користувача ---
console.log("=== Калькулятор вартості морозива ===");

const sizeInput = prompt("Розмір (small / large): ");
const size = parseSize(sizeInput ?? "");

const toppingsInput = prompt(
  "Начинки через кому (chocolate, caramel, berries): "
);
const toppings = parseToppings(toppingsInput ?? "");

const marshmallowInput = prompt("Додати маршмелоу? (yes/no): ");
const hasMarshmallow = (marshmallowInput ?? "").trim().toLowerCase() === "yes";

// --- Результат ---
const totalPrice = calculateIceCreamPrice(size, toppings, hasMarshmallow);
console.log(`Загальна вартість морозива: ${totalPrice} грн`);