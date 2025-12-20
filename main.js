document.getElementById('checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Optional: Save the user's preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {   
    document.body.classList.add('dark-mode');
    document.getElementById('checkbox').checked = true;
}
document.getElementById('checkbox').addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Optional: Smooth transition for dark mode toggle
document.body.style.transition = 'background-color 0.3s, color 0.3s';
