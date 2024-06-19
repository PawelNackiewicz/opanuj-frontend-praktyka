function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    const isValid = !!input.value && Number(input.value) > 0 && Number(input.value) < 100 && Number(input.value) % 2 === 0
    result.innerHTML = isValid ? 'Valid' : 'Invalid';
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
