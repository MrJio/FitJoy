// Tailwind Config
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#00bbe5",
        'secondary': "#00a7d2",
        'background': "#f9fafb", // Light gray for background
        'accent': "#00b2d3", // Slightly darker primary for accents
        'text-gray': "#6b7280" // Text color for contrast
      },
    },
  },
  plugins: [],
}
