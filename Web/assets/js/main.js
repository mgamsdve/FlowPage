import '../css/styles.css'


lucide.createIcons();

document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    // Ferme toutes les autres
    document.querySelectorAll('.faq-content').forEach(c => {
      c.style.maxHeight = null;
    });
    document.querySelectorAll('.faq-icon').forEach(i => {
      i.textContent = '+';
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.textContent = '−';
    }
  });
});

const exempleItems = document.querySelectorAll('#exemples .ex-item');

if (exempleItems.length) {
  const obs = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }),
    { threshold: 0.15 }
  );

  exempleItems.forEach(item => obs.observe(item));
}
