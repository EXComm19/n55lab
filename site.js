document.documentElement.classList.add('js');

(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#site-menu');

  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
    document.body.classList.toggle('menu-open', open);
  };

  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      toggle?.focus();
    }
  });

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const productCards = [...document.querySelectorAll('[data-product-category]')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      productCards.forEach((card) => {
        card.hidden = filter !== 'all' && !card.dataset.productCategory.split(' ').includes(filter);
      });
      document.querySelector('#product-results')?.focus({ preventScroll: true });
    });
  });

  document.querySelectorAll('[data-launch-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const status = form.querySelector('[role="status"]');
      if (!input?.checkValidity()) {
        input?.reportValidity();
        return;
      }
      const address = input.value.trim();
      if (status) status.textContent = 'Your email app will open so you can confirm your launch-list request.';
      window.location.href = `mailto:apothecary@n55lab.com?subject=${encodeURIComponent('Join the N°55 launch list')}&body=${encodeURIComponent(`Please add ${address} to the N°55 launch list.`)}`;
    });
  });
})();
