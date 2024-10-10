import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'border-animation': 'border-animation 2s infinite', // Añade esta línea
        shake: 'shake 7.0s ease-in-out infinite', // Aquí mantén tu animación shake
        'bg-position': 'bg-position 5s linear infinite', // Añadir la animación para el fondo
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        "bg-position": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        'border-animation': { // Aquí agregamos 'border-animation'
          '0%, 100%': {
            borderColor: 'transparent',
          },
          '50%': {
            borderColor: 'rgba(255, 255, 255, 0.5)', // Cambia el color del borde según tus necesidades
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
