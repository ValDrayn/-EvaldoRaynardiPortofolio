import { tools, type Tools } from "@/data/tools";
import { cn } from "@/lib/utils";
import Name from "@/ui/Name";

export default function Tools() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center flex-col snap-start"
      id="Tools"
    >
      <h1 className="text-4xl/snug font-[800] text-foreground mb-4 ">
        <Name name={"Tools"} textSize={"4"} />
      </h1>
      <p className="text-foreground/75 font-medium tracking-wide leading-relaxed text-base md:text-lg mb-6 text-center">
        A selection of tools and technologies I’m familiar with to design and
        build my projects.
      </p>
      <div className="w-[80%] mt-1 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
        {tools?.map((item: Tools, index) => (
          <div
            key={index}
            className={cn(
              `flex items-center gap-2 p-3 border border-zinc-600 rounded-[0.25rem] hover:bg-zinc-800 hover:text-white `
            )}
          >
            <img
              src={`/images/logos/${item.img}.png`}
              alt={String(item.name)}
              className="w-14 bg-white/30 p-1 group-hover:bg-zinc-900"
            />
            <div>
              <h4 className="font-bold">{item.name}</h4>
              <p className="opacity-80">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
