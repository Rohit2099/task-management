/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                blueMain: {
                    100: "#034EA2",
                },
            },
            fontFamily: {
                jost: ["jost", "sans-serif"],
            },
        },
    },
    plugins: [],
};
