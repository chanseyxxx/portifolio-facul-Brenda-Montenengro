const links = document.querySelectorAll('nav.menu a');
const secoes = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const alvo = link.dataset.secao;

    // Oculta todas as seções
    secoes.forEach(sec => sec.classList.remove('ativa'));

    // Mostra a seção clicada
    document.getElementById(alvo).classList.add('ativa');

    // Destaca o link ativo
    links.forEach(l => l.classList.toggle('ativo', l === link));

    // Rolagem suave opcional
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
