import type { Config } from 'tailwindcss';
// import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        // primary:"#fff4ec",
        primary:"white",
        grey: "#808080",
        orange: "#ffa500",
        primary_color: "#4285F4",
        blue:"rgba(146, 82, 254, 1)"
      },
    },
  },
  plugins: [],
}
export default config
