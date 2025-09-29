import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

type Props = {
  name: string;
  textSize?: number; // ubah ke number biar gampang
  onDoFill?: (bool: boolean) => void;
};

function Name({ name, onDoFill, textSize }: Props) {
  const FlipLink = ({
    children,
    href,
    classNames,
  }: {
    children?: string;
    href: string;
    classNames?: string;
  }) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className={cn(
          `relative block overflow-hidden whitespace-nowrap font-black uppercase `
        )}
        style={{ lineHeight: 0.75 }}
      >
        <div>
          {children?.split("").map((l, i) => {
            return (
              <motion.span
                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                className={cn(`inline-block ${classNames} heading`)}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {children?.split("").map((l, i) => {
            return (
              <motion.span
                variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                className={cn(`inline-block ${classNames} `)}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
    );
  };

  const parts = name ? name.split(" ") : [];
  const Wrapper: React.ElementType = parts[1] ? "div" : "span";

  useEffect(() => {
    if (onDoFill) onDoFill(parts[1] ? true : false);
  }, [parts[1], onDoFill]);

  const responsiveTextSize =
    textSize === 4
      ? "text-[3.5rem] sm:text-[4rem] md:text-[4rem] lg:text-[4rem]"
      : textSize === 3
      ? "text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem]"
      : "text-[3rem] sm:text-[3rem] lg:max-[1175px]:text-[3.5rem] md:text-[3.5rem] lg:text-[5rem]";

  return (
    <Wrapper className={cn(`inline-block text-main ${responsiveTextSize}`)}>
      <FlipLink href="#" classNames="font-audio">
        {parts[0] || ""}
      </FlipLink>
      {name.includes(" ") && (
        <FlipLink href="#" classNames="font-audio">
          {parts[1] || ""}
        </FlipLink>
      )}
    </Wrapper>
  );
}

export default Name;
