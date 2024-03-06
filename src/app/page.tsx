import TechSection from "@/components/TechSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { TechStack } from "@/types/TechStack";
import { Poppins, Nunito } from "next/font/google";
import { techStack } from "@/constants/techStack";

const poppins = Poppins({ subsets: ['latin'], weight: '200' });

export default function Home() {
  return (
    <div className={poppins.className}>
      <HeroSection />
      <TechSection technologies={techStack} />
      <ProjectsSection />
    </div>
  );
}
