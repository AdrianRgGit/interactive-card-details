/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "red-1": "#FF5151",
        "white-1": "#FFFFFF",
        "gray-1": "#DDDCDE",
        "gray-2": "#8E8593",
        "gray-3": "#21082F",
      },
    },
  },
  plugins: [],
};
