import Image from "next/image";
import { ImageIcon } from "lucide-react";

function placeholderSvg(label: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#DBEAFE"/><stop offset="45%" stop-color="#EEF2FF"/><stop offset="100%" stop-color="#F3E8FF"/></linearGradient><radialGradient id="r" cx="70%" cy="30%" r="55%"><stop offset="0%" stop-color="#93C5FD" stop-opacity="0.55"/><stop offset="100%" stop-color="#9333EA" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="800" fill="url(#g)"/><rect width="1200" height="800" fill="url(#r)"/><circle cx="220" cy="180" r="120" fill="#2563EB" opacity="0.12"/><circle cx="980" cy="620" r="170" fill="#9333EA" opacity="0.14"/><path d="M160 560 C320 420 450 460 610 350 C760 250 900 310 1040 190" fill="none" stroke="#2563EB" stroke-width="18" stroke-linecap="round" opacity="0.18"/><rect x="140" y="590" width="920" height="32" rx="16" fill="#0F172A" opacity="0.08"/><rect x="140" y="642" width="620" height="24" rx="12" fill="#0F172A" opacity="0.06"/><text x="600" y="405" font-family="Arial, sans-serif" font-size="46" font-weight="800" text-anchor="middle" fill="#1E293B" opacity="0.62">${label}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function VisualPlaceholder({ label, className = "", priority = false }: { label: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      <Image src={placeholderSvg(label)} alt={label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={priority} />
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-black text-slate-600 shadow-sm backdrop-blur">
        <ImageIcon className="size-3.5 text-blue-600" />
        Replace later
      </div>
    </div>
  );
}
