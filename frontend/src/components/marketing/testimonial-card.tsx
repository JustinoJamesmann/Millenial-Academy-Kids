import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

export function TestimonialCard({ quote, name, role, delay = 0 }: { quote: string; name: string; role: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="rounded-[2rem] border bg-white/[0.04] p-6 shadow-xl shadow-black/20">
        <Quote className="mb-5 size-7 text-blue-300" />
        <p className="leading-7 text-slate-200">“{quote}”</p>
        <div className="mt-6 border-t pt-5">
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </article>
    </Reveal>
  );
}
