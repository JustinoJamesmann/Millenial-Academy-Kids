import { Reveal } from "./reveal";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-500 md:text-lg">{description}</p>
    </Reveal>
  );
}
