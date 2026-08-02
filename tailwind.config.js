/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html', './src/**/*.{js,jsx}'], theme: { extend: { fontFamily: { display: ['Space Mono', 'monospace'], body: ['Manrope', 'sans-serif'] }, colors: { ink: '#f6efff', paper: '#080510', saffron: '#b9fa73', moss: '#a9c8ff' }, boxShadow: { card: '0 16px 42px rgba(0,0,0,.28)' } } }, plugins: [] }
