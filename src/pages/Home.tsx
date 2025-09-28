import Navbar from "../components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import StarBackground from "@/components/StarBackground";
import Intro from "@/components/Intro";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      className={cn(
        `h-screen bg-background text-foreground overflow-y-scroll overflow-x-hidden cursor-custom snap-y snap-mandatory`
      )}
    >
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <Intro />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}
