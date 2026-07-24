const slides = [...document.querySelectorAll('.slide')];
const previousButton = document.querySelector('.slide-button.previous');
const nextButton = document.querySelector('.slide-button.next');
const viewToggle = document.querySelector('.slide-view-toggle');
const currentSlide = document.querySelector('.current-slide');
const progress = document.querySelector('.slide-progress-bar span');
let activeSlide = 0;

function updateControls(index) {
  activeSlide = Math.max(0, Math.min(index, slides.length - 1));
  currentSlide.textContent = activeSlide + 1;
  progress.style.width = `${((activeSlide + 1) / slides.length) * 100}%`;
  previousButton.disabled = activeSlide === 0;
  nextButton.disabled = activeSlide === slides.length - 1;
  history.replaceState(null, '', `#slide-${activeSlide + 1}`);
}

function showSlide(index) {
  const target = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide) => slide.classList.remove('is-active'));
  slides[target].classList.add('is-active');
  updateControls(target);
}

previousButton.addEventListener('click', () => showSlide(activeSlide - 1));
nextButton.addEventListener('click', () => showSlide(activeSlide + 1));

function setAllView(showAll) {
  if (!showAll) {
    const headerHeight = document.querySelector('.slide-header').offsetHeight;
    activeSlide = slides.reduce((closest, slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().top - headerHeight);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: activeSlide, distance: Infinity }).index;
  }

  document.body.classList.toggle('show-all-slides', showAll);
  viewToggle.setAttribute('aria-pressed', String(showAll));
  viewToggle.textContent = showAll ? '슬라이드 보기' : '전체 보기';

  if (!showAll) {
    showSlide(activeSlide);
    window.scrollTo(0, 0);
  }
}

viewToggle.addEventListener('click', () => {
  setAllView(!document.body.classList.contains('show-all-slides'));
});

document.addEventListener('keydown', (event) => {
  if (document.body.classList.contains('show-all-slides')) return;
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.target.matches('input, textarea, select, [contenteditable="true"]')) return;

  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    event.preventDefault();
    showSlide(activeSlide + 1);
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    showSlide(activeSlide - 1);
  }
  if (event.key === 'Home') {
    event.preventDefault();
    showSlide(0);
  }
  if (event.key === 'End') {
    event.preventDefault();
    showSlide(slides.length - 1);
  }
});

const initialSlide = Number(location.hash.replace('#slide-', '')) - 1;
if (Number.isInteger(initialSlide) && initialSlide >= 0 && initialSlide < slides.length) {
  showSlide(initialSlide);
} else {
  updateControls(0);
}
