import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation:{
        'loop-scroll':'loop-scroll 50s linear infinite'
      },
      keyframes:{
        'loop-scroll':{
          from:{transform:'translateX(0)'},
          to:{transform:'translateX(-100%)'}
        },
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'palette-1': {
          'lime': '#B7EE52',
          'light-green': '#96C441',
          'medium-green': '#769B32',
          'olive-green': '#587423',
          'dark-green': '#3B4F15',
          'almost-black-green': '#202D08',
          'black': '#0C1302'
        },
        'palette-2': {
          'pastel-green': '#B6E673',
          'light-green': '#94BC5D',
          'medium-green': '#749347',
          'olive-green': '#556D33',
          'dark-green': '#3B4920',
          'almost-black-green': '#1D2B0E',
          'black': '#0C1305',
          'white-smooth':'#E7E9E9'
        },
        'palette-3': {
          'light-gray': '#E7E9E9',
          'light-medium-gray': '#BFC1C1',
          'medium-gray': '#999A9A',
          'dark-medium-gray': '#747676',
          'dark-gray': '#525353',
          'very-dark-gray': '#313232',
          'black': '#141414'
        },
        'palette-4': {
          'mint': '#C5F4A5',
          'light-green': '#94D46B',
          'medium-green': '#76AA52',
          'olive-green': '#5A8230',
          'dark-green': '#3E5C29',
          'almost-black-green': '#253917',
          'black': '#0E1907'
        },
        'palette-5': {
          'light-gray': '#DBDED7',
          'light-medium-gray': '#B4B6B0',
          'medium-gray': '#8E908B',
          'dark-medium-gray': '#6A6C68',
          'dark-gray': '#4B4946',
          'very-dark-gray': '#29292B',
          'black': '#111110'
        },
        'pallette-rgb':{
          'gray-50%-opacity':'rgba(153, 154, 154, 0.70)'
        }
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    })
  ],
}