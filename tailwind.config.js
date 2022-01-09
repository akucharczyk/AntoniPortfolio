module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  variants: {
    textColor: ['group-hover'],
  },
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
        rotate: "rotate 30s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotateZ(0) translate(-50%, -50%)",
            "transform-origin": "0 0",
          },
          "50%": {
            transform: "rotateZ(180deg) translate(-50%, -50%)",
            "transform-origin": "0 0",
          },
          "100%": {
            "transform-origin": "0 0",
            transform: "rotateZ(360deg) translate(-50%, -50%)",
          },
        },
      },
    },
  },
  plugins: [],
}
