// Theme management
const toggleModeButton = document.getElementById('toggle-mode');
let currentMode = localStorage.getItem('theme') || 'default';

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateContentForMode(savedTheme);
    }
});

    localStorage.setItem('theme', currentMode);
    updateContentForMode(currentMode);
});

// Update content based on theme
function updateContentForMode(mode) {
    const homeTitle = document.querySelector('#home h1');
    const homeText = document.querySelector('#home p');
    const footerText = document.querySelector('footer p');

    switch (mode) {
        case 'dark-mode':
            homeTitle.textContent = "Materi C++: Pak Nyoman (Mode Gelap)";
            homeText.textContent = "Selamat datang di situs pembelajaran C++! (Mode Gelap)";
            break;
        case 'mode-pink-1':
            homeTitle.textContent = "Materi C++: Pak Nyoman";
            homeText.textContent = "Selamat datang di situs pembelajaran C++!";
            break;
        case 'mode-pink-2':
            homeTitle.textContent = "Materi C++: Pak Nyoman (Mode Pink 2)";
            homeText.textContent = "Selamat datang di situs pembelajaran C++! (Mode Pink 2)";
            break;
        default:
            homeTitle.textContent = "Materi C++: Pak Nyoman";
            homeText.textContent = "Selamat datang di situs pembelajaran C++!";
            break;
    }
}

function setMode(mode) {
  document.body.className = mode;
}