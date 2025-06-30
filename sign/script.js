  const phoneInput = document.getElementById('num');
  const codeSelect = document.getElementById('codeSelect');
  const phoneOutput = document.getElementById('phoneOutput');
  const smsInfo = document.getElementById('smsWrapper');

  // Enter tugmasini ushlash
  phoneInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Formani submit qilmaslik uchun

      const code = codeSelect.value;
      const number = phoneInput.value;

      if (number.trim() !== "") {
        phoneOutput.textContent = `${code} ${number}`;
        smsInfo.style.display = 'block'; // matnni ko‘rsatish
      }
    }
  });
