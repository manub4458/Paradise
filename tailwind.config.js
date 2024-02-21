/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": { max: "640px" },
    

			

			"md": { max: "768px" },
			// => @media (max-width: 767px) { ... }


      "lg": { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

      
			"xl": { max: "1280px" },
			// => @media (max-width: 1279px) { ... }

      "2xl": { max: "1536px" },
			// => @media (max-width: 1535px) { ... }


    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
