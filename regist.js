document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("errorMsg");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = emailInput.value.trim();
  
      if (!validateEmail(email)) {
        errorMsg.textContent = "Email должен быть в одном из форматов: user@mail.ru, user@gmail.com и т.д.";
        return;
      }
  
      errorMsg.textContent = ""; 
      alert("Регистрация прошла успешно!");
  
      window.location.href = "main.html";
    });
  
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@(mail\.ru|gmail\.com|yandex\.ru|outlook\.com|bk\.ru)$/;
      return emailRegex.test(email);
    }
  });
  