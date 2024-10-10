export function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlElement = document.documentElement;

    if (!themeToggleBtn || !themeToggleDarkIcon || !themeToggleLightIcon) {
        console.error('Theme toggle elements not found');
        return;
    }

    function setTheme(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
            localStorage.setItem('color-theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
            localStorage.setItem('color-theme', 'light');
        }
    }

    // Set initial theme based on local storage or system preference
    const savedTheme = localStorage.getItem('color-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        setTheme(!htmlElement.classList.contains('dark'));
    });
}
