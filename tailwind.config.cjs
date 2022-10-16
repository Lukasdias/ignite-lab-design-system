/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#fff',
            black: '#000000',
            gray: {
                900: '#121214',
                800: '#202024',
                400: '#7c7c8a',
                200: '#e1e1e6',
                100: '#c4c4cc',
            },
            cyan: {
                500: '#81d8f7',
                300: '#a3e4fb',
            },
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
            sans: 'Inter, sans-serif',
        },
        borderRadius: {
            none: '0',
            xs: '0.25rem',
        },
        extend: {},
    },
    plugins: [],
}
