import { projects, type Project } from "@/data/projects";
import Name from "@/ui/Name";
import ProjectCard from "@/ui/ProjectCard";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function Project() {
  return (
    <section
      id="Projects"
      className="flex justify-center items-center min-h-screen snap-start"
    >
      <motion.div
        className="w-[80%] flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Title */}
        <motion.h2 className="mb-8" variants={itemVariants}>
          <Name name={"Projects"} textSize={"4"} />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-foreground/75 font-medium tracking-wide leading-relaxed text-base md:text-lg mb-6 text-center"
          variants={itemVariants}
        >
          Here are some of my projects, created to explore ideas and improve my
          skills along the way.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]"
          variants={containerVariants}
        >
          {projects.map((item: Project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
