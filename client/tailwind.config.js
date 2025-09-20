// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#E23744",
                    light: "#FF5C6C",
                    dark: "#B71C2B",
                },
                secondary: {
                    DEFAULT: "#F5F5F5", // light gray
                    dark: "#E0E0E0",
                },
                accent: {
                    yellow: "#FFC107",
                    green: "#4CAF50",
                    blue: "#2196F3",
                    orange: "#FF7043",
                },
                neutral: {
                    light: "#FAFAFA",
                    gray: "#9E9E9E",
                    dark: "#212121",
                },
                background: {
                    light: "#FFFFFF",
                    dark: "#121212",
                },
            },
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
                heading: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                soft: "0 4px 12px rgba(0,0,0,0.05)",
                card: "0 6px 20px rgba(0,0,0,0.08)",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
};
