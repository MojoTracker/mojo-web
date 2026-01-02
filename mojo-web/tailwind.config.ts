import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // If your components folder is in the root (like in your screenshot), add this:
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the utility 'font-beyonders' to the CSS variable
        beyonders: ["var(--font-beyonders)", "sans-serif"],
        coolvetica: ["var(--font-coolvetica)", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;