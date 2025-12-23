// HAMBURGER
const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav_items a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});


document.getElementById('checkbox').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('checkbox').checked = true;
}
document.getElementById('checkbox').addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

document.body.style.transition = 'background-color 0.3s, color 0.3s';

