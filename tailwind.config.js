/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Color Dictionary - Primary Colors
        'yellow': 'var(--color-yellow)',
        'grey-text': 'var(--color-grey-text)',
        'grey': 'var(--color-grey)',
        'white': 'var(--color-white)',
        'yellow-light': 'var(--color-yellow-light)',
        'beige-2': 'var(--color-beige-2)',
        'yellow-light-2': 'var(--color-yellow-light-2)',
        'grey-light-2': 'var(--color-grey-light-2)',
        'green-fark': 'var(--color-green-fark)',
        'blue-light-soft': 'var(--color-blue-light-soft)',
        'green-hover': 'var(--color-green-hover)',
        'red-alert': 'var(--color-red-alert)',
        'grey-middle': 'var(--color-grey-middle)',
        'blue-dark': 'var(--color-blue-dark)',
        
        // Legacy color mappings for backward compatibility
        'light-grey': 'var(--color-light-grey)',
        'yellow-logo': 'var(--color-yellow-logo)',
        'blue-light': 'var(--color-blue-light)',
        'orange-light': 'var(--color-orange-light)',
        'hero-bg': 'var(--color-hero-bg)',
        'yellow-hero': 'var(--color-yellow-hero)',
        'blue-hero': 'var(--color-blue-hero)',
      },
      fontFamily: {
        'montserrat': ['var(--font-family-montserrat)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      fontWeight: {
        'regular': 'var(--font-weight-regular)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      lineHeight: {
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
      },
    },
  },
  plugins: [],
}
