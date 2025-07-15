// tailwind.config.js
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                shake: {
                "0%": { transform: "translateX(0)" },
                "15%": { transform: "translateX(-6px)" },
                "30%": { transform: "translateX(6px)" },
                "45%": { transform: "translateX(-4px)" },
                "60%": { transform: "translateX(4px)" },
                "75%": { transform: "translateX(-2px)" },
                "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                shakeOnce: "shake 0.5s ease-in-out 1",
            },
        },
    },
    plugins: [],
}