/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      minWidth:{
        148:'148px',
        
      },
      colors:{
        'primary':"#1A253C",
        'secondary':"#303F60",
        'veryLightBlue':"#EDF6FF",
        'secodaryBlue':"#43AFFF",
        'lightBlue':"#43AFFF33",
        'lineColor':"#4D618E",
        'blueVariant2':"#557DA526",
        'inputbg':'#E8E8E833',
        borderColor:"#C6C6C6",
        errorBorder:'#FF333380',
        errorColor:'#FF0000'
      },
    },
  },
  plugins: [],
}
