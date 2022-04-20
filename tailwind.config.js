module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        height: {
            '100': '30rem',
            '128': '32rem',
            '140': '40rem',
          }             
    },



  },
  plugins: [require ('@tailwindcss/forms')],
}
