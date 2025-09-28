import Name from "@/ui/Name";

type Contact = {
  type: String;
  value: String;
};

const contact: Contact[] = [
  { type: "Mail", value: "evaldoraynardi28@gmail.com" },
  { type: "Call", value: "+62-852-8406-3129" },
];

export default function Contact() {
  return (
    <section
      className="min-h-screen flex flex-col justify-between text-foreground snap-start"
      id="Contact"
    >
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4">
              <Name name={"Let’s-Connect"} textSize={"3"} />
            </h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out using the form or my social links below.
            </p>

            <ul className="space-y-4">
              {contact.map((item: Contact, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-main font-bold">
                    {item.type}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl p-8 shadow-lg ring-1 ring-inset ring-border">
            <form className="space-y-5">
              <div>
                <label className="text-sm mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg bg-muted border border-border px-4 py-3 
                   text-foreground placeholder:text-foreground placeholder:opacity-100
                   focus:border-main focus:ring-2 focus:ring-main/50 
                   outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg bg-muted border border-border px-4 py-3 
                   text-foreground placeholder:text-foreground placeholder:opacity-100
                   focus:border-main focus:ring-2 focus:ring-main/50 
                   outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-lg bg-muted border border-border px-4 py-3 
                   text-foreground placeholder:text-foreground placeholder:opacity-100
                   focus:border-main focus:ring-2 focus:ring-main/50 
                   outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-main text-zinc-950 font-medium py-3 rounded-lg 
                 hover:bg-main/90 active:scale-[0.98] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-sm ">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 gap-4">
          <p className="text-foreground">
            © {new Date().getFullYear()} Evaldo Raynardi. All rights reserved.
          </p>

          <div className="flex gap-6 text-muted-foreground">
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
    </section>
  );
}
