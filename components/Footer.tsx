import { Mail, Phone } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";

export default function Footer() {
  return (
    <footer className="bg-warm-text py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-warm-muted text-sm">© 2026 Amit Pant</p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/amit-pant-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:amitpant239@gmail.com"
            aria-label="Email"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://wa.me/917517296691"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-warm-muted hover:text-warm-amber transition-colors"
          >
            <Phone size={18} />
          </a>
        </div>

        <a
          href="#hero"
          className="text-warm-muted hover:text-warm-amber transition-colors text-sm"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
