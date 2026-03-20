"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl text-foreground">
          CodeNest
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
          <Link href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <Link 
          href="#contact" 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Get Website
        </Link>
      </div>
    </header>
  );
}
