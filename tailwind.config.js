/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: "#3f96f3",
        bgBlueAlt: "#2f76d2",
        bgButton: "#fceb4f",
        bgErrorMsg: "#fceb4f",
        colorErrorMsg: "#983e4c",
        bgSuccessMsg: "#c6ebd4",
        colorSuccessMsg: "#44865c",
      }
    },
  },
  plugins: [],
}
