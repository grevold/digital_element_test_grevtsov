interface IFormDataUser {
  name: string;
  email: string;
  message?: string;
}

/**
 *
 */
export function isValidFormDataUser(event: SubmitEvent): IFormDataUser | false {
  // Функция для валидации email
  function validateEmail(email: string): boolean {
    const re = /^[^s@]+@[^s@]+.[^s@]+$/; // Регулярное выражение для проверки email
    return re.test(String(email).toLowerCase());
  }
  event.preventDefault();
  // Получаем значения полей
  const name = (
    document.getElementById("name") as HTMLInputElement
  ).value.trim();
  const email = (
    document.getElementById("email") as HTMLInputElement
  ).value.trim();

  // Переменные для хранения ошибок
  let isValid = true;

  // Очистка предыдущих сообщений об ошибках
  (document.getElementById("nameError") as HTMLElement).textContent = "";
  (document.getElementById("emailError") as HTMLElement).textContent = "";

  // Валидация имени
  if (!name) {
    (document.getElementById("nameError") as HTMLElement).textContent =
      "Имя обязательно для заполнения.";
    isValid = false;
  }

  // Валидация email
  if (!email) {
    (document.getElementById("emailError") as HTMLElement).textContent =
      "Email обязателен для заполнения.";
    isValid = false;
  } else if (!validateEmail(email)) {
    (document.getElementById("emailError") as HTMLElement).textContent =
      "Введите корректный email.";
    isValid = false;
  }

  if (isValid) {
    const formData: IFormDataUser = { name, email };
    return formData;
  } else {
    return false;
  }
}
