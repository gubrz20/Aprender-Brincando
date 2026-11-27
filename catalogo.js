const filters = document.querySelector('.filters');
const games = [...document.querySelectorAll('[data-topic]')];
filters.hidden = false;
filters.addEventListener('click', event => {
  const selected = event.target.closest('button');
  if (!selected) return;
  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }
  const topic = selected.textContent;
  for (const game of games) {
    game.hidden = topic !== 'Todos' && game.dataset.topic !== topic;
  }
  const count = games.filter(game => !game.hidden).length;
  document.querySelector('[role=status]').textContent = count === 1 ? '1 jogo disponível' : count + ' jogos disponíveis';
});
