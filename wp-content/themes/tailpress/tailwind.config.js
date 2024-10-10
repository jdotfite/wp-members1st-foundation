const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './src/blocks/**/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: {
                ...tailpress.colorMapper(tailpress.theme('settings.color.palette', theme)),
                'brand-yellow': 'var(--color-brand-yellow)',
                'brand-red': 'var(--color-brand-red)',
                'brand-dark-blue': 'var(--color-brand-dark-blue)',
                'text-primary': 'var(--text-primary)',
                'color-global-white': 'var(--color-global-white)',
                'gray-lightest': 'var(--color-gray-lightest)',
                'gray-lighter': 'var(--color-gray-lighter)',
                'gray-light': 'var(--color-gray-light)',
                'gray-mid-light': 'var(--color-gray-mid-light)',
                'gray-mid-dark': 'var(--color-gray-mid-dark)',
                'gray-dark': 'var(--color-gray-dark)',
                'gray-darker': 'var(--color-gray-darker)',
                'gray-darkest': 'var(--color-gray-darkest)',
                'm1-red': '#ee3129',
                'm1-blue-dark': '#213d70',
                'almost-black': '#121212',
                'weak-black': '#212121',
                'ui-btn-red': '#902121',
                'ui-link-red': '#ed7e7e',
                'hover-red': '#ed4840'
                // Add other color variables as needed
            },
            fontSize: {
                ...tailpress.fontSizeMapper(tailpress.theme('settings.typography.fontSizes', theme)),
                '2.5xl': '1.75rem',
                '3.5xl': '2rem',
                '4.5xl': '2.5rem'
            },
            spacing: {
                '4.5': '1.125rem',
                '13': '3.25rem',
                '14': '3.5rem',
                '15': '3.75rem',
                '16': '4rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '19': '4.75rem',
                '20': '5rem'
            },
            fontFamily: {
                'primary': ['var(--font-primary)', 'sans-serif'],
                'secondary': ['var(--font-secondary)', 'sans-serif']
            },
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        }
    },
    plugins: [
        tailpress.tailwind
    ]
};