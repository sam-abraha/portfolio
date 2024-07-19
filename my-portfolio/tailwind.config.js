// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        charcoal : '#1F2937',
        coolgrey : '#6B7280',
        slategrey : '#374151',
        redprime : '#EF4444',
        teal : '#10B981',
        stone : '#fafaf9',
        darkblue : '#1E3A8A',
        grey : '#f4f6f8',
        narvik : '#EAE7DD',
        brown : '#99775C',
        projectcard : '#eceff1',
        primary : '#f6f6f6',
        secondary : '#f1f1f1',
        dimgrey : '#707072',

      },
      animation: {
        'flip-left': 'flipLeft 0.6s ease-out forwards',
        'flip-right': 'flipRight 0.6s ease-out forwards',
      },
      keyframes: {
        flipLeft: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(-180deg)' },
        },
        flipRight: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        fontFamily: {
          sans: ['Helvetica'],
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
