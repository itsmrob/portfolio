import { Roboto, Public_Sans, Advent_Pro, Capriola, Roboto_Slab } from "next/font/google";

export const roboto = Roboto({ 
    subsets: ['latin'], 
    weight: '500',
    display: 'swap',
    variable: '--roboto-font'
});

export const publicSans = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--public-sans-font'
})

export const capriola = Capriola({
    subsets: ["latin"],
    weight: "400",
    variable: "--capriola-font",
  });
export const adventPro = Advent_Pro({
    subsets: ["latin"],
    weight: "400",
    variable: "--advent-pro-font",
  });

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: '400',
  variable: '--roboto-slab-font'
})