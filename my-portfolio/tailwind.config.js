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
        'purple-500': '#6b46c1',
        'blue-500': '#3182ce',
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
