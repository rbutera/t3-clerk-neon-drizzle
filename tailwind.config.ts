import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lora)", ...fontFamily.sans],
        serif: ["var(--font-quattrocento)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
