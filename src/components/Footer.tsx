export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold">MyPortfolio</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Building projects with passion and modern tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#Projects" className="hover:text-main transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#Tools" className="hover:text-main transition">
                Tools
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-main transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-main transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-main transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-main transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
