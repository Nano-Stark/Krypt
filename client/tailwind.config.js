module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        mf: "990px",
      },
    },
  },
  plugins: [],
}