// Navigation toggle
window.addEventListener('load', function () {
      let main_navigation = document.querySelector('#primary-menu');
      document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            main_navigation.classList.toggle('hidden');
      });
});


import { initSvgConverter } from './modules/svg-converter';
import { initThemeToggle } from './modules/theme-toggle';


document.addEventListener('DOMContentLoaded', () => {
    initSvgConverter();
    initThemeToggle();
});
