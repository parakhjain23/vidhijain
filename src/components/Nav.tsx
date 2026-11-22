"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clinic, navLinks } from "@/lib/clinic";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-[18px] leading-none text-text">
            Vidhi Jain
          </span>
          <span className="text-[13px] leading-none text-text-muted">
            {clinic.role}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14px] text-text-secondary transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="flex h-9 items-center rounded-[8px] bg-accent px-4 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Book appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-hairline bg-card/80 text-text transition-colors hover:bg-raised md:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} strokeWidth={1.5} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-page md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-serif text-[18px] leading-none">
              Vidhi Jain
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-hairline text-text"
              aria-label="Close menu"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="px-6 pt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-hairline-soft py-4 text-[20px] text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pt-8">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-[10px] bg-accent text-[15px] font-medium text-white"
            >
              Book appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
