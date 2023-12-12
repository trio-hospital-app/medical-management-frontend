// tailwind.config.ts
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: [
    // './src/pages/*/.{js,ts,jsx,tsx,mdx}',
    // './src/components/*/.{js,ts,jsx,tsx,mdx}',
    // './src/app/*/.{js,ts,jsx,tsx,mdx}',
    // './src/pages/*/.{js,ts,jsx,tsx,mdx}',
    // './src/layouts/*/.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ha: {
          primary1: "#3f56cd",
          primary2: "#E8EBFF",
          secondary1: "#E7EBFF",
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
