import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        footerImage: "url('/assets/images/osobowe.jpg')",
      },
      fontFamily: {
        Ravenwood: ['Ravenwood', 'sans-serif'],
      },
      screens: {
        'min-w-525': '525px',
        'min-w-850': '850px',
        'min-w-1350': '1350px',
      },
      animation: {
        fade: 'fade 1s ease-in',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
    },
  },
  plugins: [],
}
export default config
