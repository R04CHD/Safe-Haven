document.addEventListener('DOMContentLoaded', () => {
  // Google Analytics configuration for the supplied tracking ID.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-EQVXBV2MJQ');

  const bookingForm = document.querySelector('#booking-form');

  if (!bookingForm) return;

  const status = document.querySelector('#form-status');

  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      status.textContent = 'Please complete the required fields before sending your request.';
      status.className = 'form-status error';
      bookingForm.reportValidity();
      return;
    }

    const name = bookingForm.elements.name.value.trim();
    const email = bookingForm.elements.email.value.trim();
    const phone = bookingForm.elements.phone.value.trim();
    const dueDate = bookingForm.elements.due_date.value.trim();
    const suburb = bookingForm.elements.suburb.value.trim();
    const message = bookingForm.elements.message.value.trim();
    const subject = 'Safe Haven consultation request';
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not supplied'}`,
      `Estimated due date / baby's age: ${dueDate}`,
      `Suburb: ${suburb}`,
      '',
      `Message: ${message || 'No additional details supplied'}`
    ].join('\n');

    window.location.href = `${bookingForm.action}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = `Thanks${name ? `, ${name}` : ''}. Your email app should open with your request ready to send.`;
    status.className = 'form-status success';
  });
});
