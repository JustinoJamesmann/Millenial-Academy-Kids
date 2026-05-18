"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#school", label: "Locations" },
  { href: "#contact", label: "Contact" }
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative size-11 overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-100 ring-1 ring-blue-100"><Image src="/logoMAK.jpg" alt="Millennial Academy logo" fill className="object-cover" sizes="44px" priority /></span>
          <span>
            <span className="block text-xs font-black tracking-[0.22em] text-blue-600">Millennial Academy</span>
            <span className="text-sm font-black text-slate-950 sm:text-base">Learn Believe Succeed</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-bold text-slate-600 lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="transition hover:text-blue-600">{link.label}</a>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-full px-5 py-2.5 text-sm font-black text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">Login</a>
          <a href="#enrollment" className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">Enroll Now</a>
        </div>
        <button className="grid size-10 place-items-center rounded-full border bg-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t bg-white px-4 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600">{link.label}</a>)}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600">Login</a>
            <a href="#enrollment" onClick={() => setOpen(false)} className="rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-black text-white">Enroll Now</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
