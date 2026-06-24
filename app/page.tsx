import { About } from "@/components/sections/about/about";
import { Certificates } from "@/components/sections/certificates/certificates";
import { Contact } from "@/components/sections/contact/contact";
import { Footer } from "@/components/sections/footer/footer";
import { Hero } from "@/components/sections/hero/hero";
import { MobileProjects } from "@/components/sections/mobile-projects/mobile-projects";
import { Navbar } from "@/components/sections/navbar/navbar";
import { Projects } from "@/components/sections/projects/projects";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MobileProjects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
