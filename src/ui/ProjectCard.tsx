import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div
      className="
    relative p-5 rounded-2xl bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 flex flex-col transition-all duration-300 ease-out 
    hover:-translate-y-2 hover:bg-zinc-700/60 active:scale-[0.98] hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.8)]
  "
    >
      <figure className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
        <img
          src={`/images/projects/${String(item.img)}`}
          alt={String(item.title)}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4 flex-1 ">
        <div>
          <h3 className="text-lg font-medium mb-2 tracking-wide text-zinc-100">
            {String(item.title)}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="h-7 text-sm text-zinc-400 bg-zinc-50/5 px-3 rounded-md grid place-items-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-10 h-10 rounded-lg grid place-items-center bg-main text-zinc-950 shrink-0 shadow-md">
          <span className="material-symbols-outlined" aria-hidden="true">
            <ArrowUpRight className="text-zinc-800" />
          </span>
        </div>
      </div>

      <a href={item.link} target="_blank" className="absolute inset-0"></a>
    </div>
  );
}
