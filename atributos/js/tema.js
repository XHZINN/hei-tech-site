document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggle-theme');
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');

  if (!toggleBtn || !sunIcon || !moonIcon) {
    console.error('Botão ou ícones não encontrados.');
    return;
  }

  function updateIcons(isDark) {
    if (isDark) {
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

  function setDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
    localStorage.setItem('darkMode', enabled);
    updateIcons(enabled);
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setDarkMode(!isDark);
  });

  // Inicialização
  const saved = localStorage.getItem('darkMode') === 'true';
  setDarkMode(saved);
});
