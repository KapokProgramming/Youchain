import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gotham': 'radial-gradient(ellipse_at_right,_var(--tw-gradient-stops)) from-gray-700 via-gray-900 to-black',
        'sunset': 'bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400'
      },
    },
  },
  plugins: [],
}
export default config
