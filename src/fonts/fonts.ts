import { Roboto, Public_Sans, Advent_Pro, Capriola } from "next/font/google";

export const roboto = Roboto({ 
    subsets: ['latin'], 
    weight: '500',
    display: 'swap',
    variable: '--roboto-font'
});

export const publicSans = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--publicSans-font'
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