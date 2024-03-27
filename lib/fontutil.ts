import { Oxygen, Raleway, UnifrakturCook } from "next/font/google";

export const oxygen = Oxygen({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
  variable: "--font-oxygen",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "300", "400", "600"],
});

export const fraktur = UnifrakturCook({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraktur",
  weight: "700",
});
