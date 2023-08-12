/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg" : "#090917",
        "activeblue" : "#2CC8FD",
        "secondary" : "#1B1B37"
      }
    },
  },
  plugins: [],
}

