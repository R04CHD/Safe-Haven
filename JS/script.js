document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  const feedback = [
    { quote: 'I would personally like to thank Julia for her personalised approach and skills that she taught me, what a great practitioner!', name: 'Pooja' },
    { quote: 'I learnt so much from Julia, she was very encouraging, knowledgeable, and supportive. I feel a lot more confident.', name: 'Suzanne' },
    { quote: 'Julia was supportive, lovely and respectful, I am glad I could learn a lot with her!', name: 'Alene' },
    { quote: 'Julia, you are a world of knowledge and thank you for everything.', name: 'Allisa' },
    { quote: 'Shout out to Julia for her gentle approach and helpful suggestions, she made us feel totally at ease.', name: 'Bianca' },
    { quote: 'Your kindness, patience and calm energy meant more to us than you know. Your support and knowledge has made me feel capable.', name: 'Teegan' },
    { quote: 'A huge thank you for your help in teaching us the fine art of safe sleep spaces. Your guidance has been invaluable.', name: 'Alice' },
    { quote: 'It is very heartfelt from me to you. You made me feel at ease and it was so lovely welcoming you into my home, with no stigma.', name: 'Rachana' },
    { quote: 'Thank you for using all of your expertise to make me and my husband feel comfortable and educated in all possible ways.', name: 'Mavis' }
  ];
  const quote = document.querySelector('.quote-band blockquote');
  const byline = document.querySelector('.quote-byline');
  const count = document.querySelector('.quote-count');
  if (quote && byline && count) {
    let current = 1;
    const show = (index) => {
      current = (index + feedback.length) % feedback.length;
      quote.textContent = `“${feedback[current].quote}”`;
      byline.innerHTML = `${feedback[current].name} <span>· Family feedback</span>`;
      count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(feedback.length).padStart(2, '0')}`;
    };
    document.querySelector('.quote-prev')?.addEventListener('click', () => show(current - 1));
    document.querySelector('.quote-next')?.addEventListener('click', () => show(current + 1));
  }

  const form = document.querySelector('#booking-form');
  if (form) {
    const status = document.querySelector('#form-status');
    form.addEventListener('submit', (event) => {
      if (form.action.includes('YOUR_FORM_ID')) {
        event.preventDefault();
        if (status) status.textContent = 'Please add your Formspree Form ID to the form action before sending enquiries.';
        return;
      }
      if (status) status.textContent = 'Sending your enquiry...';
    });
  }
});
