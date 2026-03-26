import { Code, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background py-10 z-50">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground"
          >
            <Code className="h-6 w-6 text-primary" />
            CodeNest
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} CodeNest. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#home"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Work
          </Link>
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <Link
            href="https://linkedin.com/in/piyush"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <Link
            href="mailto:codenestt.studio@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="size-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
