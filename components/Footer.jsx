import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href="/" className="font-bold text-xl text-foreground">CodeNest</Link>
          <p className="text-muted-foreground text-sm mt-2">© {new Date().getFullYear()} CodeNest. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
          <Link href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</Link>
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <Link href="https://github.com/piyush" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </Link>
          <Link href="https://linkedin.com/in/piyush" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
