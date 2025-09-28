import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className={cn(
          `sm:hidden fixed bottom-5 right-5 z-100 p-3 rounded-full bg-foreground shadow-lg border hover:scale-105 active:scale-95 transition-transform duration-200 dark:bg-foreground/50 border-main`
        )}
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>

      <button
        onClick={toggleTheme}
        className={cn(
          `hidden sm:block lg:hidden fixed bottom-6 right-6 z-100 p-4 rounded-full bg-foreground shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 dark:bg-foreground/50 border-main`
        )}
      >
        {isDark ? (
          <Sun className="h-7 w-7 text-yellow-300" />
        ) : (
          <Moon className="h-7 w-7 text-blue-900" />
        )}
      </button>

      <button
        onClick={toggleTheme}
        className={cn(
          `hidden lg:block fixed top-[0.75rem] right-5 z-100 p-2 rounded-full hover:bg-muted transition-colors duration-500 `
        )}
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  );
}
