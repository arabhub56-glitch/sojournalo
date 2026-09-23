import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F1E7",
          deep: "#EEE6D3",
          card: "#FCFAF4",
          line: "#E3D8BE",
        },
        ink: {
          DEFAULT: "#15212F",
          soft: "#2C3D50",
          muted: "#55677A",
        },
        teal: {
          DEFAULT: "#259C93",
          light: "#5FCFC3",
          pale: "#D8EFEA",
          deep: "#166E67",
        },
        indigo: {
          DEFAULT: "#3B4A6B",
          soft: "#5A6A93",
        },
        navy: {
          DEFAULT: "#101A28",
          soft: "#182233",
          border: "#243347",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #15212F 0%, #259C93 100%)",
        "teal-gradient": "linear-gradient(135deg, #259C93 0%, #5FCFC3 100%)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 40s linear infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
