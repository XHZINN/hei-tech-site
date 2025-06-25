const motivos = document.querySelectorAll('.motivo');

const observer = new IntersectionObserver(
entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        motivos.forEach(m => m.classList.remove('foco')); // remove de todos
        entry.target.classList.add('foco'); // aplica no que está visível
    }
    });
},
{
    threshold: 0.6 // 60% da seção visível para aplicar
}
);

motivos.forEach(motivo => observer.observe(motivo));

