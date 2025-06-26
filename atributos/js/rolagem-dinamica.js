document.addEventListener("scroll", () => {
  const transicao = document.querySelector(".transicao");
  const etapas = document.querySelectorAll(".etapa");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Quando começa a transição
  const startTransition = transicao.offsetTop;
  const endTransition = etapas[0].offsetTop;

  if (scrollY >= startTransition && scrollY <= endTransition) {
    const progress = (scrollY - startTransition) / (endTransition - startTransition);
    const invertedProgress = 1 - progress;

    // Tema escuro → clareia fundo
    if (document.body.classList.contains("dark-mode")) {
      const bgValue = Math.round(18 + (249 - 18) * progress); // #121212 → #f9f9f9
      const textValue = Math.round(238 - (238 - 51) * progress); // #eee → #333
      document.body.style.backgroundColor = `rgb(${bgValue},${bgValue},${bgValue})`;
      document.body.style.color = `rgb(${textValue},${textValue},${textValue})`;
    }
    // Tema claro → escurece fundo
    else {
      const bgValue = Math.round(249 - (249 - 18) * progress); // #f9f9f9 → #121212
      const textValue = Math.round(51 + (238 - 51) * progress); // #333 → #eee
      document.body.style.backgroundColor = `rgb(${bgValue},${bgValue},${bgValue})`;
      document.body.style.color = `rgb(${textValue},${textValue},${textValue})`;
    }
  } else {
    // Restaura as cores padrão do tema
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  }
});
