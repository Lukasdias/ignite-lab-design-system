/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: '#000000',
            'gray-900': '#121214',
            'gray-800': '#202024',
            'gray-400': '#7c7c8a',
            'gray-100': '#e1e1e6',
            'gray-200': '#c4c4cc',
            'cyan-500': '#81d8f7',
            'cyan-300': '#a3e4fb',
        },
        fontSize: {
            xs: '0.875rem',
            sm: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
        fontFamily: {
            inter: 'Inter',
        },
        borderRadius: {
            none: '0',
            xs: '0.25rem',
        },
        extend: {},
    },
    plugins: [],
}
