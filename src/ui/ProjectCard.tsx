import type { Project } from "@/data/projects";
import { ArrowUpRight, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { CustomToastStyle } from "./CustomToastStyle";
import { toast } from "react-toastify";

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  const notify = () => {
    toast(CustomToastStyle, {
      closeButton: false,
      hideProgressBar: true,
    });
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className="
            relative p-5 rounded-2xl bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-zinc-700/60 active:scale-[0.98] hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.8)] cursor-pointer
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

            <a
              href={item.link ? String(item.link) : "#Projects"}
              target={item.link ? "_blank" : ""}
              onClick={(e) => {
                e.stopPropagation();
                !item.link ? notify() : null;
                !item.link ? e.preventDefault() : null;
              }}
            >
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-main text-zinc-950 shrink-0 shadow-md hover:bg-main/80 hover:scale-105 active:scale-90">
                <span className="material-symbols-outlined" aria-hidden="true">
                  <ArrowUpRight className="text-zinc-800" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-2xl bg-zinc-900 text-zinc-100  p-6 sm:p-8 md:p-10 shadow-2xl ring-1 ring-zinc-50/10
    "
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <Dialog.Title className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide mb-3">
                {item.title}
              </Dialog.Title>

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

            <Dialog.Close asChild>
              <button
                className="rounded-lg p-2 hover:bg-zinc-800 transition-colors ml-4"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </Dialog.Close>
          </div>

          <div className="grid gap-6">
            <figure className="aspect-video rounded-xl overflow-hidden">
              <img
                src={`/images/projects/${String(item.img)}`}
                alt={String(item.title)}
                className="w-full h-full object-cover"
              />
            </figure>
            <Dialog.Description className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {item.description
                ? item.description
                : "Belum ada deskripsi untuk project ini."}
            </Dialog.Description>

            {item.link && (
              <a
                href={String(item.link)}
                target="_blank"
                className="inline-flex items-center gap-2 self-start bg-main text-zinc-950 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-main/80 hover:scale-[1.02] active:scale-95 transition justify-between"
              >
                Show Project
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
