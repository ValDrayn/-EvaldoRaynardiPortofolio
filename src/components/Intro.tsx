import Name from "@/ui/Name";
import profile from "../../public/images/profilepolos.png";
import rocket from "../../public/images/rocket.png";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export default function Intro() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    `University Student`,
    // `FrontEnd Developer`,
    `Evaldo Raynardi`,
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [finished, setFinished] = useState(false);
  const [isFill, setIsFill] = useState(false);
  const Wrapper: React.ElementType = isFill ? "div" : "span";

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const period = 2000;

  useEffect(() => {
    if (finished) return;

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      if (i === toRotate.length - 1) {
        setFinished(true);
      } else {
        setIsDeleting(true);
        setDelta(period);
      }
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleIsFill = (bool: boolean) => {
    if (bool === true) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  };

  return (
    <section
      className="flex items-center w-full justify-center min-h-screen snap-start"
      id="Home"
    >
      <div className="flex md:max-[920px]:flex-col flex-col md:flex-row items-center justify-center w-full px-6 gap-8">
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[40%] flex items-center justify-center md:order-2 md:max-[920px]:order-1 "
        >
          <div className="relative group transition-transform duration-300 animate-updown hover:translate-y-5">
            <img
              src={profile}
              alt=""
              className="w-40 sm:w-52 md:max-[920px]:w-52 md:w-auto rounded-full border-[5px] border-main p-[0.8rem] shadow-[0_0_200px_10px_rgba(255,255,255,0.4)] transition-shadow duration-300 group-hover:shadow-[0_0_250px_20px_rgba(255,255,255,0.8)]"
              draggable="false"
            />
            <img
              src={rocket}
              alt=""
              className="absolute bottom-[-0.5rem] right-0 w-10 sm:w-14 md:w-20"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[40%] flex flex-col justify-start text-center md:text-left md:order-1 md:max-[920px]:order-2 md:max-[920px]:text-center md:max-[920px]:w-[80%]"
        >
          <span className="tracking-wider text-xl sm:text-2xl md:text-[2rem] leading-tight font-medium md:max-[920px]:text-xl">
            Welcome to my Portofolio
          </span>

          <div className="font-audio font-[700] tracking-wider mt-2 text-4xl sm:text-5xl md:text-[5rem] md:max-[920px]:text-5xl">
            <Wrapper className="lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] text-[3rem] lg:max-[1175px]:text-[3.5rem]">{`Hi! I'm `}</Wrapper>{" "}
            <Name name={text} onDoFill={handleIsFill} textSize={6} />
          </div>

          <p className="text-foreground/75 font-medium tracking-wide leading-relaxed text-sm lg:text-lg md:text-md sm:text-base mt-4 text-center md:text-justify md:max-[920px]:font-medium md:max-[920px]:text-sm md:max-[920px]:leading-relaxed md:max-[920px]:text-center">
            I’m a University Student specializing in Frontend Development,
            focused on creating modern and responsive interfaces. I’m currently
            expanding my knowledge in backend development to build more complete
            and scalable applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
