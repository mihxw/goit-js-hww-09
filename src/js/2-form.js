// Об'єкт для зберігання даних форми
const formData = {
    email: '',
    message: '',
  };
  
  // Отримуємо елементи форми
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  
  // Завантажуємо дані з локального сховища при завантаженні сторінки
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  
  if (savedData) {
    formData.email = savedData.email;
    formData.message = savedData.message;
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
  
  // Обробка вводу в форму
  form.addEventListener('input', (e) => {
    const { name, value } = e.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
  
  // Обробка відправлення форми
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Перевірка, чи всі поля заповнені
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log(formData);
  
    // Очищення форми та локального сховища
    form.reset();
    localStorage.removeItem('feedback-form-state');
  });
  