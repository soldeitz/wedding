import daisyui from "daisyui"
import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "californian": ["CalifornianFB", "normal"],
        "californian-italic": ["CalifornianFB", "italic"],
        "californian-bold": ["CalifornianFB", "bold"],
        "andaray": ["Andaray", "normal"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#112632",
          "secondary": "#339989",
          "accent": "#7de2d1",
          "neutral": "#000609",
          "base-100": "#fffafb",
          "info": "#00f8ff",
          "success": "#00a56a",
          "warning": "#f49e4c",
          "error": "#e85f5c",
        },
      }
    ],
  },
  plugins: [
    typography,
    daisyui,
  ],
} satisfies Config;
