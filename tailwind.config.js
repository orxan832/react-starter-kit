// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            modal: 'rgba(255, 255, 255, 0.8)'
        }),
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}