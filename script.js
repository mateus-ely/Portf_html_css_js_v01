/* =========================================================
   ROLAGEM DOS LINKS INTERNOS (#home, #about, #projects...)
   Só com CSS, clicar num link cujo #id já está na URL não
   rola a página de novo, e a rolagem suave às vezes para no
   meio do caminho. Aqui fazemos a rolagem na mão para que
   sempre chegue na section certa.
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = id.length > 1 && document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });   /* respeita o scroll-padding-top do CSS, então a navbar não cobre o título */
    history.pushState(null, '', id);                /* mantém o #id na URL, como o link faria */
  });
});
