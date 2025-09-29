import { tools, type Tools } from "@/data/tools";
import { cn } from "@/lib/utils";
import Name from "@/ui/Name";
import { motion } from "framer-motion";

export default function Tools() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center flex-col snap-start p-8"
      id="Tools"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl/snug font-[800] text-foreground mb-4 pt-20"
      >
        <Name name={"Tools"} textSize={4} />
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="text-foreground/75 font-medium tracking-wide leading-relaxed text-base md:text-lg mb-6 text-center"
      >
        A selection of tools and technologies I’m familiar with to design and
        build my projects.
      </motion.p>

      <motion.div
        className="w-[80%] mt-1 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {tools?.map((item: Tools, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={cn(
              `flex items-center gap-2 p-3 border border-zinc-600 rounded-[0.25rem] hover:bg-zinc-800 hover:text-white`
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
