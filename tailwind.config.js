/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['*'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin'),
    require('flowbite/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

