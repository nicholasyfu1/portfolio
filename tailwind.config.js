/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 300ms ease-in-out',
        pingonce: 'ping 400ms linear 1',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '80%': { transform: 'rotate(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
