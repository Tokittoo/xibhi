"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaMedium, FaCalendar, FaX } from "react-icons/fa6";

type LinkItem = { label: string; href: string; icon: React.ReactNode };

const links: LinkItem[] = [
  // Known links from the codebase
  { label: "Book a 1:1 Session", href: "https://cal.com/xibhi", icon: <FaCalendar className="size-4" /> },
  { label: "Instagram", href: "https://www.instagram.com/_xibhi_", icon: <FaInstagram className="size-4" /> },
  { label: "X", href: "https://x.com/xibhi_", icon: <FaX className="size-4" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sibhibalamurugan", icon: <FaLinkedin className="size-4" /> },
  { label: "GitHub", href: "https://github.com/xibhi", icon: <FaGithub className="size-4" /> },
  { label: "Medium", href: "https://medium.com/@xibhi", icon: <FaMedium className="size-4" /> }
];

export default function LinksPage() {
  return (
    <main className="min-h-[calc(100dvh-0px)] bg-background flex items-start justify-center px-6 py-6" style={{ fontFamily: 'General Sans, sans-serif' }}>
      <div className="w-full max-w-md -mt-2 scale-105 md:scale-110">
        <div className="mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white rounded-lg border border-white/10 px-3 py-1.5 bg-white/5">
            <span>←</span>
            <span>Back</span>
          </Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border">
            <Image src="/avatar.jpg" alt="SIBHI avatar" fill sizes="112px" className="object-cover" />
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">SIBHI</h1>
          <p className="text-base text-foreground/70">Security Enthusiast</p>
        </div>

        <div className="mt-6 space-y-3">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="relative block w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-muted/60"
            >
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/80">{item.icon}</span>
              <span className="pointer-events-none block w-full text-center">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}


