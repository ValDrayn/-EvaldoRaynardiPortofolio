import { projects, type Project } from "@/data/projects";
import Name from "@/ui/Name";
import ProjectCard from "@/ui/ProjectCard";

export default function Project() {
  return (
    <section
      id="Projects"
      className="flex justify-center items-center min-h-screen snap-start"
    >
      <div className="w-[80%] flex flex-col items-center">
        <h2 className="mb-8">
          <Name name={" Projects"} />
        </h2>
        <p className="text-foreground/75 font-medium tracking-wide leading-relaxed text-base md:text-lg mb-6 text-center">
          Here are some of my projects, created to explore ideas and improve my
          skills along the way.
        </p>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
          {projects.map((item: Project, index) => (
            <ProjectCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
