import localFont from "next/font/local";

export const futura = localFont({
  src: [
    {
      path: "../styles/fonts/futura/Futura Book font.ttf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-futura",
  display: "swap",
  preload: false,
  fallback: ['Arial', 'sans-serif'],
});

export const mont = localFont({
  src: "../styles/fonts/mont/Mont-HeavyDEMO.otf",
  variable: "--font-mont",
  display: "swap",
  preload: false,
  fallback: ['Helvetica', 'sans-serif'],
});
