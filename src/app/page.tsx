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
    <div className='container mx-auto p-4'>
      <section className="flex items-center justify-center mt-14 p-0">
        <HeroSection />
      </section>
      <section className="flex items-center justify-center">
        {/* <FeaturedTechs technologyStack={technologies} /> */}
      </section>
      {/* <section className="stack-section min-h-screen flex items-center justify-center">
        <p>Here goes my stack of technologies</p>
      </section> */}
      {/* <section className="projects-section min-h-screen flex items-center justify-center">
        <p>Here goes my projects and GitHub links</p>
      </section> */}
    </div>
  );
}
