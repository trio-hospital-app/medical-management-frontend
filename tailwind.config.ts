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
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      // },
      colors: {
        ha: {
          primary1: "#3f56cd",
          primary2: "#E8EBFF",
          secondary1: "#E7EBFF",
        },
      },
      // screens: {
      //   xs: '480px',
      //   ss: '620px',
      //   sm: '768px',
      //   md: '1060px',
      //   lg: '1200px',
      //   xl: '1700px'
      // }
    },
  },
  plugins: [],
};

export default tailwindConfig;
