import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className='container mx-auto p-4'>
      <section className="introduction-section min-h-screen flex items-center justify-center">
        <HeroSection />
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
