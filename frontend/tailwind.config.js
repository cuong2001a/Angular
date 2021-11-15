module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    // enabled: process.env.TAILWIND_MODE === 'build',
    content: [
      './src/**/*.{html,ts}',
      './src/index.html',
      './src/**/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '45': '2.8125rem',
        '300': '18.75rem',
        '250': '15.625rem'
      },
      width: {
        '45': '2.8125rem',
        '260': '16.25rem',
        '450': '28.125rem'
      },
      inset: {
        '201': '12.5625rem',
        '31': '1.9375rem'
      },
      margin: {
        '31': '1.9375rem'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
      },
      rotate: {
        '45': '45deg',
        '90': '90deg',
        '135': '135deg',
        '180': '180deg',
        '270': '270deg',
      },

    },
  },
  variants: {
    transitionProperty: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
    extend: {
      // translate: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transformOrigin: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transform: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // animation: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // scale: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // display: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // fontFamily: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // divideColor: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // scale: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // backgroundImage: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // opacity: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // backgroundOpacity: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // animation: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // borderRadius: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // boxShadow: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transitionDuration: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // rotate: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // inset: ['hover', 'focus'],
      // borderColor: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // divideColor: ['hover', 'focus'],
      // borderWidth: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transitionProperty: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transitionDuration: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transitionDelay: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      // transitionTimingFunction: ['active', 'hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
    },
  },
  plugins: [],
}
