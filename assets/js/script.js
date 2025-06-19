// script.js
// Example: Show an alert when the contact form is submitted
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out!');
            form.reset();
        });
    }
});
