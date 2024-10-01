// Hamburger menu functionality part
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add event listeners for reports buttons
document.getElementById('online-report').addEventListener('click', function() {
    alert('Online Report Button Clicked!');
});

document.getElementById('phone-report').addEventListener('click', function() {
    alert('Phone Report Clicked!');
});

