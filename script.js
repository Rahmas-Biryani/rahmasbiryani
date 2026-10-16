/* Rahmas Biryani — static GitHub Pages website, no server required. */
(() => {
  'use strict';
  const BUSINESS_WHATSAPP = '919150579130';
  const menuButton = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const form = document.querySelector('#lead-form');
  const dateInput = document.querySelector('#lead-date');

  const today = new Date();
  const localToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  dateInput.min = localToday;
  document.querySelector('#year').textContent = String(today.getFullYear());

  menuButton.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!opened));
    menuButton.setAttribute('aria-label', opened ? 'Open navigation menu' : 'Close navigation menu');
    nav.classList.toggle('is-open', !opened);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      menuButton.focus();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const value = (id) => document.getElementById(id).value.trim();
    const phone = value('lead-phone');
    // Accept Indian and international formats, but reject non-telephone input.
    if (!/^[+\d\s().-]{7,25}$/.test(phone) || phone.replace(/\D/g, '').length < 7) {
      const phoneField = document.querySelector('#lead-phone');
      phoneField.setCustomValidity('Please enter a valid phone number.');
      phoneField.reportValidity();
      return;
    }

    if (value('lead-date') && value('lead-date') < localToday) {
      dateInput.setCustomValidity('Please select today or a future date.');
      dateInput.reportValidity();
      return;
    }

    const guests = value('lead-guests');
    const details = [
      'Hello Rahmas Biryani! I would like a catering quotation.',
      '',
      `Name: ${value('lead-name')}`,
      `Contact number: ${phone}`,
      `Event type: ${value('lead-event')}`,
      `Event date: ${value('lead-date') || 'To be confirmed'}`,
      `Expected guests: ${guests || 'To be confirmed'}`,
      `Event area: ${value('lead-location') || 'To be confirmed'}`,
      `Additional details: ${value('lead-message') || 'None yet'}`,
      '',
      'Please share catering menu options and availability. Thank you!'
    ];
    const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(details.join('\n'))}`;
    // The user must press Send in WhatsApp: a static website cannot send a message itself.
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });

  document.querySelector('#lead-phone').addEventListener('input', (event) => event.target.setCustomValidity(''));
  dateInput.addEventListener('input', (event) => event.target.setCustomValidity(''));
})();
