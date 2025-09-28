import Name from "@/ui/Name";
import profile from "../../public/images/profilepolos.png";
import rocket from "../../public/images/rocket.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
      {/* <div className="mx-auto px-4"> */}
      <div className="flex items-center justify-center">
        <div className="w-[40%] flex flex-col justify-start">
          <span className="tracking-wider text-[2rem] leading-tight font-medium">
            Welcome to my Portofolio
          </span>
          <div
            className={cn(
              `"text-[6rem] sm:text-[4rem] md:text-[5rem] font-audio font-[700] tracking-wider"`
            )}
          >
            <Wrapper>{`Hi! I'm `}</Wrapper>{" "}
            {/* {finished ? <Name name={text} /> : text} */}
            <Name name={text} onDoFill={handleIsFill} />
          </div>
          <p className="text-foreground/75 font-medium tracking-wide leading-relaxed text-base md:text-lg text-justify">
            I’m currently a Frontend Developer and University Student,
            specializing in creating modern, responsive interfaces. I’m
            currently expanding my knowledge in backend development to build
            more complete and scalable applications.
          </p>
          {/* <button onClick={() => console.log("Lets go")}>Let's connect </button> */}
        </div>
        <div className="w-[40%] p-4 items-center flex justify-center">
          <div className="relative group transition-transform duration-300 animate-updown hover:translate-y-5">
            <img
              src={profile}
              alt=""
              className="rounded-full border-[5px] border-main p-[0.8rem] shadow-[0_0_200px_10px_rgba(255,255,255,0.4)] transition-shadow duration-300 group-hover:shadow-[0_0_250px_20px_rgba(255,255,255,0.8)]"
              draggable="false"
            />
            <img
              src={rocket}
              alt=""
              className="absolute bottom-[-1rem] right-0"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
