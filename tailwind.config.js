/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      "Jost": ["Jost", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'logo': 'conic-gradient(from 360deg at 50% 50%, rgba(231, 129, 107, 1) 0%, rgba(231, 129, 107, 0) 100%)',
        'oval': 'url(./assets/images/main/oval-background.svg)',
        'webDesign': 'url(./assets/images/main/webDesign.svg)',
        'appDesign': 'url(./assets/images/main/appDesign.svg)',
        'graphicDesign': 'url(./assets/images/main/graphicDesign.svg)',
        'basicBackground': 'url(./assets/images/footer/background.svg)',
        'aboutUsBackground2': 'url(./assets/images/aboutUs/background-2.svg)',
      },
      boxShadow: {
        'mobile': '20px -40px 80px rgba(93, 2, 2, 0.5)',
      },
      dropShadow: {
        'text': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundPosition: {
        'top': 'top-102px',
      },
    },
  },
  plugins: [],
}
