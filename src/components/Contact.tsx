import Name from "@/ui/Name";
import { motion } from "motion/react";
import { toast, type ToastContentProps } from "react-toastify";

type Contact = {
  type: String;
  value: String;
};

type Contact2 = {
  img: String;
  value: String;
  url: String;
};

const contact: Contact[] = [
  { type: "Mail", value: "evaldoraynardi28@gmail.com" },
  { type: "Call", value: "+62-852-8406-3129" },
];

const contact2: Contact2[] = [
  { img: "github", value: "Github", url: "http://github.com/valdrayn" },
  {
    img: "linkedln",
    value: "Linkedln",
    url: "https://www.linkedin.com/in/evaldo-raynardi-559106292/",
  },
];

function SplitButtons({ closeToast }: ToastContentProps) {
  return (
    <div className="flex items-center gap-3 justify-between">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
        i
      </div>
      <div className="flex flex-col">
        <h3 className="text-blue-800 text-sm font-semibold">Information</h3>
        <p className="text-sm text-blue-700">Service is under maintenance</p>
      </div>

      <button
        onClick={() => closeToast()}
        className="ml-8 text-blue-600 hover:text-blue-800 transition"
      >
        ✕
      </button>
    </div>
  );
}

export default function Contact() {
  const notify = () => {
    toast(SplitButtons, {
      closeButton: false,
      hideProgressBar: true,
    });
  };
  return (
    <section
      className="min-h-screen flex flex-col justify-between text-foreground snap-start"
      id="Contact"
    >
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 text-center lg:text-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center items-center lg:items-start"
          >
            <h2 className="mb-4">
              <Name name={"Let’s-Connect"} textSize={"3"} />
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Feel free to reach out using the form or my social links below.
            </p>

            <ul className="space-y-4">
              {contact.map((item: Contact, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <span className="material-symbols-outlined text-main font-bold">
                    {item.type}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-background rounded-2xl p-8 shadow-lg ring-1 ring-inset ring-border"
          >
            <form className="space-y-5 text-start">
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
                onClick={notify}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-sm ">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 gap-4">
          <p className="text-foreground">
            © {new Date().getFullYear()} Evaldo Raynardi. All rights reserved.
          </p>

          <div className="flex gap-6">
            {contact2.map((item: Contact2, index) => (
              <a
                key={index}
                href={String(item.url)}
                target="_blank"
                className="flex items-center gap-2 hover:text-main transition"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted shadow-sm dark:bg-foreground">
                  <img
                    src={`/images/logos/${item.img}.png`}
                    alt={String(item.value)}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm font-medium">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
