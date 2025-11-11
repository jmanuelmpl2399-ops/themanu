// Espera a que cargue el contenido
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('saludarBtn');
  const anioSpan = document.getElementById('anio');

  anioSpan.textContent = new Date().getFullYear();

  btn.addEventListener('click', function() {
    alert('¡Hola! Estás probando tu primer sitio. 🎉');
  });
});
