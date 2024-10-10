(function (wp) {
    var registerPlugin = wp.plugins.registerPlugin;
    var useState = wp.element.useState;
    var useEffect = wp.element.useEffect;

    // Theme Toggle Button
    function ThemeToggleButton() {
        var [isDark, setIsDark] = useState(false);

        useEffect(function () {
            var editorWrapper = document.querySelector('.editor-styles-wrapper');
            if (editorWrapper) {
                if (isDark) {
                    editorWrapper.classList.add('dark');
                    document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
                    document.getElementById('theme-toggle-light-icon').classList.add('hidden');
                } else {
                    editorWrapper.classList.remove('dark');
                    document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
                    document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
                }
            }
        }, [isDark]);

        function toggleTheme() {
            setIsDark((prevIsDark) => !prevIsDark);
        }

        return wp.element.createElement(
            'button',
            {
                id: 'theme-toggle',
                type: 'button',
                onClick: toggleTheme,
                style: {
                    backgroundColor: isDark ? '#2d3748' : '#edf2f7', // Equivalent to dark:bg-gray-800 and bg-gray-200
                    padding: '8px', // Equivalent to p-2 (padding 8px)
                    outline: 'none', // focus:outline-none
                    transition: 'all 0.3s ease-in-out', // transition duration-300 ease-in-out
                    border: 'none',
                    cursor: 'pointer',
                },
            },
            wp.element.createElement('svg', {
                id: 'theme-toggle-dark-icon',
                className: 'w-5 h-5' + (isDark ? '' : ' hidden'),
                style: { width: '20px', height: '20px' },
                fill: 'currentColor',
                viewBox: '0 0 20 20',
                xmlns: 'http://www.w3.org/2000/svg',
                dangerouslySetInnerHTML: {
                    __html: `<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>`,
                },
            }),
            wp.element.createElement('svg', {
                id: 'theme-toggle-light-icon',
                className: 'w-5 h-5' + (isDark ? ' hidden' : ''),
                style: { width: '20px', height: '20px' },
                fill: 'currentColor',
                viewBox: '0 0 20 20',
                xmlns: 'http://www.w3.org/2000/svg',
                dangerouslySetInnerHTML: {
                    __html: `<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>`,
                },
            })
        );
    }

    // Append the theme toggle button to the left of the "View" button in the .editor-header__settings
    function appendThemeToggleInSettings() {
        const settingsBar = document.querySelector('.editor-header__settings');
        const viewButton = document.querySelector('.editor-preview-dropdown'); // Reference to the "View" button

        if (settingsBar && viewButton) {
            const themeToggleWrapper = document.createElement('div');
            themeToggleWrapper.id = 'theme-toggle-wrapper';
            settingsBar.insertBefore(themeToggleWrapper, viewButton); // Insert before the "View" button

            // Render the React component in the div
            wp.element.render(
                wp.element.createElement(ThemeToggleButton),
                document.getElementById('theme-toggle-wrapper')
            );
            console.log('Theme toggle button added to the left of the "View" button.');
        } else {
            console.warn('.editor-header__settings or "View" button not found.');
        }
    }

    // Register plugin
    registerPlugin('theme-toolbar-plugin', {
        render: () => {
            setTimeout(() => {
                appendThemeToggleInSettings();
            }, 1000);
            return null; // Return null as we are rendering via vanilla JS
        },
    });
})(window.wp);
