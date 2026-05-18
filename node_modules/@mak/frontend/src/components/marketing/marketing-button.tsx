import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MarketingButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export function MarketingButton({ href, children, variant = "primary", className }: MarketingButtonProps) {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-blue-200 hover:bg-blue-700",
    secondary: "bg-white text-slate-950 shadow-lg shadow-slate-200 hover:bg-slate-50",
    outline: "border bg-white/70 text-slate-900 hover:border-blue-200 hover:bg-blue-50"
  };

  return (
    <Link href={href} className={cn("group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300", variants[variant], className)}>
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
    </Link>
  );
}
