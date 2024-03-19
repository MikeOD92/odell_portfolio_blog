import { Oxygen, Raleway, UnifrakturCook } from "next/font/google";

export const oxygen_init = Oxygen({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxygen",
  weights: ["300", "400"],
});

export const raleway_init = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weights: ["300", "400", "600"],
});

export const fraktur_init = UnifrakturCook({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraktur",
  weight: "700",
});
