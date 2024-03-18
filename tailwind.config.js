/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        secondary: '#000223',
        hover_secondary: '#202244'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-nav-izq': {
          width: '91.666667%',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          borderRadius: '0.375rem',
          '&:hover': {
            borderBottomWidth: '1px',
            borderBottomColor: '#202244',
            backgroundColor: '#202244',
          },
          '&:focus': {
            borderBottomWidth: '1px',
            borderBottomColor: '#202244',
            backgroundColor: '#202244',
          },
        },
      });
    },
  ],
}

