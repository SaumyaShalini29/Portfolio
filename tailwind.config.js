import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('./assets/back.jpeg')",
        blackOverlay: "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)"
      },
      perspective: {
        none: 'none',
        100: '100px',
        250: '250px',
        500: '500px',
        1000: '1000px',
      },
      transformOrigin: {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
      }
    },
  },
  plugins: [daisyui],
};
