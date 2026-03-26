import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Dark Dot Matrix */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
          backgroundSize: '10px 10px',
          imageRendering: 'pixelated',
        }}
      />
      <div className="flex min-h-screen flex-col bg-background font-mono z-10">
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
