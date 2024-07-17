import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      chivo: 'Chivo'
    },
    fontSize: {
      title: '52px',
      body: '18px'
    },
    lineHeight: {
      title: '62px',
      body: '28px'
    },
    colors: {
      white: '#FFFFFF',
      black: '#121725',
      gray: '#C2CBE5',
      darkgray: '#5A668A',
      darkergray: '#2C344B',
      green: '#54E6AF'
    },
    extend: {
      backgroundImage: {
        'mobile-patern': "url('/mobile/image-host.jpg')",
      },

    },
  },
  plugins: [],
};
export default config;
