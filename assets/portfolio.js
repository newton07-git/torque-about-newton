'use strict';

// The project routes are native links and work without JavaScript.
const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.card[data-category]')];
const count = document.querySelector('#project-count');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    let visible = 0;
    cards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) visible += 1;
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  });
});

const video = document.querySelector('#hero-video');
const motionControl = document.querySelector('#motion-control');
if (video && motionControl) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateControl = () => {
    motionControl.textContent = video.paused ? 'Play animation' : 'Pause animation';
  };
  const play = () => {
    video.play().catch(updateControl);
  };
  if (reducedMotion.matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
  motionControl.hidden = false;
  updateControl();
  video.addEventListener('play', updateControl);
  video.addEventListener('pause', updateControl);
  video.addEventListener('error', () => {
    motionControl.hidden = true;
  });
  if (!reducedMotion.matches) play();
  motionControl.addEventListener('click', () => {
    if (video.paused) play();
    else video.pause();
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) video.pause();
  });
}
