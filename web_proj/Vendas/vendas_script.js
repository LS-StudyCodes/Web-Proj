const form = document.querySelector('.vendas-form form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (isValid) {
    inputs.forEach(input => {
      input.value = '';
    });

    alert('Mensagem enviada!');
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});