const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const primary = colors.indigo
const secondary = colors.pink
const info = colors.sky
const warning = colors.amber
const success = colors.emerald
const error = colors.red

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        primary,
        secondary,
        info,
        warning,
        success,
        error,
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          active: 'var(--color-text-active)',
          hover: 'var(--color-text-hover)',
          icon: 'var(--color-text-icon)',
        },
      },
      backgroundColor: {
        skin: {
          'fill': 'var(--color-fill)',
          'fill-active': 'var(--color-fill-active)',
          'fill-hover': 'var(--color-fill-hover)',
          'icon-fill': 'var(--color-icon-fill)',
        },
      },
      fontFamily: {
        serif: ['REM'],
        sans: ['Inter'],
      },
    },
  },
}
