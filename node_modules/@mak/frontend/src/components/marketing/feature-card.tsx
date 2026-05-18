import type { LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: { icon: LucideIcon; title: string; description: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group h-full rounded-[2rem] border bg-white p-6 shadow-sm shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100">
        <div className="mb-6 grid size-13 place-items-center rounded-2xl bg-blue-50 text-primary ring-1 ring-blue-100 transition group-hover:scale-105">
          <Icon className="size-6" />
        </div>
        <h3 className="text-xl font-black text-slate-950">{title}</h3>
        <p className="mt-3 leading-7 text-slate-500">{description}</p>
      </article>
    </Reveal>
  );
}
