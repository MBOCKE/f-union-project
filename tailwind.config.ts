// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        summit: {
          purple: "#2D0A54",
          red: "#E33E33",
          blue: "#0070B8",
          dark: "#1A1A1A",
        }
      },
    },
  },
  plugins: [],
};
export default config;