import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-xl font-bold text-foreground">
              JA<span className="text-gradient">.</span>
            </span>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Md. Jubaidul Alam. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/jubaidul-ctg-bd", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/md-jubaidul-alam-06a119118/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=jubaidul.ctg.bd@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            
            <button
              onClick={scrollToTop}
              className="ml-4 p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
