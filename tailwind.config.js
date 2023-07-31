/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      
    extend: {
      backgroundImage: {
        'orange-pattern': "url('/orange_background.png')",
      }
    },
  },
  plugins: [],
}

