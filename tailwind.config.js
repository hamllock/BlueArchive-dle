/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BlueArchiveRED: '#880d1d',
        BlueArchiveYELLOW: '#ac882b',
        BlueArchiveBLUE: '#337296',
        BlueArchivePURPLE: '#8455a1',
        BlueArchiveNORMAL: '#484e6e'
      }
    }
  },
  plugins: []
};
