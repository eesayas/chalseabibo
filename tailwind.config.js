/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [{ pattern: /text-./ }, { pattern: /bg-./ }],
  theme: {
    extend: {},
  },
  plugins: [],
};
