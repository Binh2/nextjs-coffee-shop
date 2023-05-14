/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors: {
        "brown": {
          50: "#FEEBD7",
          100: "#FED4A9",
          200: "#FDA854",
          300: "#F77D03",
          400: "#A65402",
          500: "#4F2801",
          600: "#412101",
          700: "#2D1701",
          800: "#1E0F00",
          900: "#0F0800",
          950: "#0A0500"
        },
        "green": {
          50: "#EEFDD8",
          100: "#DCFCB0",
          200: "#BAF962",
          300: "#9AF618",
          400: "#6DB607",
          500: "#3E6804",
          600: "#325303",
          700: "#264002",
          800: "#182702",
          900: "#0C1401",
          950: "#060A00"
        },
        "pink": {
          50: "#FBEAF1",
          100: "#F6D5E3",
          200: "#EDABC8",
          300: "#E580AC",
          400: "#DC5690",
          500: "#D22C74",
          600: "#A9235D",
          700: "#7F1A46",
          800: "#54122F",
          900: "#2A0917",
          950: "#15040C"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-pattern': 'url("/bg.png")',
      },
      fontFamily: {
        'primary': ['Ubuntu'],
        'second': ['sans-serif']
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(brown|green|pink)-(50|100|200|300|400|500|600|700|800|900|950)/
  }]
}
