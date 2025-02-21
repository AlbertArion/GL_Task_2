import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'entropy': "url('/images/ENTROPY CUREVE.svg')",
        'frame14': "url('/images/Frame14.jpg')",
        'frame26': "url('/images/Frame 2609340.svg')",
        'image11': "url('/images/image 11.svg')",
        'image13': "url('/images/image 13.svg')",
        'image1': "url('/images/image1.svg')",
        'image2': "url('/images/image2.svg')",
        'image3': "url('/images/image3.svg')",
        'LOGOBlk': "url('/images/LOGO-Blk.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
