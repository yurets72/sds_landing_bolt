/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#181818',
        panel: '#1f1f1f',
        panel2: '#272727',
        text: '#f5f5f2',
        muted: '#b7b7b2',
        line: '#313131',
        accent: 'var(--accent, #F97316)',
        'accent-soft': 'var(--accent-soft, #FB923C)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1180px',
        prose: '800px',
        narrow: '700px',
        hero: '680px',
      },
    },
  },
  plugins: [],
};
