import FeaturedTechs from "@/components/FeaturedTechs";
import HeroSection from "@/components/HeroSection";
import { TechStack } from "@/types/TechStack";

const technologies: TechStack[] = [
  {
    id: 1,
    title: 'NextJS',
    description: 'NextJS the most modern technolgy of web development based in React componentes',
    imageUrl: ''
  }
]

export default function Home() {
  return (
    <>
      <HeroSection/>
    </>
  );
}
