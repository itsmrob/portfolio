import TechSection from "@/components/TechSection";
import HeroSection from "@/components/HeroSection";
import { TechStack } from "@/types/TechStack";
import { Poppins, Nunito } from "next/font/google";

const technologies: TechStack[] = [
  {
    id: 1,
    title: 'NextJS',
    description: 'NextJS the most modern technolgy of web development based in React componentes',
    imageUrl: ''
  }
]

const poppins = Poppins({ subsets: ['latin'], weight: '200' });

export default function Home() {
  return (
    <div className={poppins.className}>
      <HeroSection/>
      {/* <TechSection technologyStack={technologies}/> */}
    </div>
  );
}
