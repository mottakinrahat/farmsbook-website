/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,jpg}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

