/*
 * @Author: Albert
 * @Date: 2025-02-20 12:23:19
 * @LastEditors: Albert
 * @LastEditTime: 2025-02-21 12:09:40
 * @FilePath: /workspace/GL_Task_2tailwind.config.ts
 * @Description: 
 * 
 */
import type { Config } from "tailwindcss";
import frame14 from  './public/image/Frame14.jpg'

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
        'entropy': "url('./public/image/ENTROPY CUREVE.svg')",
        'frame14': "url('/public/image/Frame14.jpg')",
        'frame26': "url('/public/image/Frame 2609340.svg')",
        'image11': "url('/public/image/image 11.svg')",
        'image13': "url('/public/image/image 13.svg')",
        'image1': "url('/public/image/image1.svg')",
        'image2': "url('/public/image/image2.svg')",
        'image3': "url('/public/image/image3.svg')",
        'LOGOBlk': "url('/public/image/LOGO-Blk.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
