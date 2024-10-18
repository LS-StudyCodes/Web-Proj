const footerLinks = document.querySelectorAll('footer a');

footerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Será desenvolvido no próximo projeto');
  });
});