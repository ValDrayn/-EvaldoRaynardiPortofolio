import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center flex-col text-center gap-4">
      <h1 className="text-5xl font-bold text-main">404</h1>
      <p className="text-lg text-foreground/70">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <span className="flex gap-1 ml-1">
        <span className="w-2 h-2 bg-main rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-main rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-main rounded-full animate-bounce"></span>
      </span>
      <p className="text-sm text-muted-foreground flex items-center justify-center">
        Redirecting you
      </p>
    </section>
  );
}
