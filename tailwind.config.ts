import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/(private)/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#179C5F',
        'light-red': '#EC6D6D',
        'light-blue': '#D6E3E9',
        'dark-blue': '#00294A',
      },
    },
  },
  plugins: [],
}
export default config
