import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "#Home" },
  { name: "Tools", href: "#Tools" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  // const [scrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    // const handleScroll = () => {
    //   setIsScrolled(window.scrollY > 10);
    // };
    // window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      className={cn(
        `w-full fixed top-0 left-0 z-[50] transition-all duration-300`,
        activeSection !== "Home"
          ? "py-2 bg-zinc-800/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#Home"
          className="text-xl font-bold text-main flex items-center"
        >
          <span className="relative z-100 font-audio">
            <span className="text-foreground">Evaldo</span>Raynardi
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative transition-all duration-300 font-medium px-1 pb-1",
                activeSection === item.href.replace("#", "")
                  ? "text-main after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-main after:rounded-full after:transition-all after:duration-300 shadow-sm"
                  : "text-foreground hover:text-main"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[150]"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark text-[24px]"></i>
          ) : (
            <i className="fa-solid fa-bars text-[24px]"></i>
          )}
        </button>

        <div
          className={cn(
            `fixed inset-0 bg-background/95 backdrop-blur-md z-[98] flex flex-col items-center justify-center`,
            `transition-all duration-300 md:hidden`,
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col text-xl items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors duration-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-main font-semibold"
                    : "text-foreground hover:text-main"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
