"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, Lightbulb, Play, ShieldCheck, Sparkles } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#DBEAFE_0,#F8FAFC_38%,#FFFFFF_72%)]">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      <div className="relative z-[1] mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-8 px-4 py-12 md:gap-12 md:py-20 lg:gap-14 lg:py-28 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.div variants={child} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-black text-blue-600 shadow-sm backdrop-blur">
            <Sparkles className="size-4" />
            Premium Private Academy
          </motion.div>
          <motion.h1 variants={child} className="text-4xl font-black leading-[0.94] tracking-tight text-slate-950 sm:text-5xl md:text-7xl lg:text-8xl">
            Building Future <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leaders</span>
          </motion.h1>
          <motion.p variants={child} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8 lg:mx-0 lg:text-xl">
            Millennial Academy is a modern learning community designed for academic excellence, confident character, creativity, and leadership.
          </motion.p>
          <motion.div variants={child} className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:mt-8 lg:justify-start">
            <Link href="#enrollment" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-7 sm:py-3.5">
              Enroll Now <ArrowRight className="size-4" />
            </Link>
            <Link href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 sm:px-7 sm:py-3.5">
              <Play className="size-4" /> Explore Academy
            </Link>
          </motion.div>
          <motion.div variants={child} className="mt-6 grid gap-3 text-left sm:grid-cols-3 lg:mt-8">
            {["Elite academics", "Safe campuses", "Future-ready skills"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white bg-white/75 p-3 shadow-sm backdrop-blur">
                <CheckCircle2 className="size-5 shrink-0 text-blue-600" />
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 34, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative order-1 lg:order-2">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/60 via-purple-200/50 to-pink-200/40 blur-2xl md:-inset-4 md:rounded-[2.5rem]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2.5 shadow-2xl shadow-blue-100 md:p-3 md:rounded-[2.25rem]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem]">
              <Image src="/herosection.png" alt="Millennial Academy school building" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" priority />
            </div>
          </div>
          <div className="absolute -bottom-4 left-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl shadow-blue-100 md:-bottom-6 md:left-6 md:rounded-3xl md:p-5 md:shadow-2xl">
            <Award className="mb-2 size-5 text-blue-600 md:size-6" />
            <p className="text-2xl font-black text-slate-950 md:text-3xl">98%</p>
            <p className="text-xs font-bold text-slate-500">Family satisfaction</p>
          </div>
          <div className="absolute -right-2 top-6 rounded-2xl border border-purple-100 bg-white p-4 shadow-xl shadow-purple-100 md:-right-3 md:top-8 md:rounded-3xl md:p-5 md:shadow-2xl hidden sm:block">
            <ShieldCheck className="mb-2 size-5 text-purple-600 md:size-6" />
            <p className="text-xs font-black text-slate-700">Trusted learning environment</p>
          </div>
        </motion.div>
      </div>
      <section id="about" className="relative z-[3] px-4 pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-10">
        <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-transparent to-white/80" />
        <div className="mx-auto grid max-w-7xl gap-6 md:gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="h-full rounded-[1.5rem] border bg-white/90 p-5 shadow-xl shadow-slate-100 backdrop-blur-xl md:rounded-[2rem] md:p-8"
          >
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 md:mb-6 md:size-14"><Sparkles className="size-6 md:size-7" /></div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Our Mission</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight md:mt-4 md:text-4xl">Inspiring learners to grow with confidence.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:mt-5 md:text-base md:leading-8">Millennial Academy exists to shape capable, curious, and principled students through excellent teaching, safe campuses, and a culture of ambition.</p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
            className="h-full rounded-[1.5rem] border bg-gradient-to-br from-blue-600/95 to-purple-600/95 p-5 text-white shadow-2xl shadow-purple-200 backdrop-blur-xl md:rounded-[2rem] md:p-8"
          >
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-white/15 text-white md:mb-6 md:size-14"><Lightbulb className="size-6 md:size-7" /></div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-100">Our Vision</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight md:mt-4 md:text-4xl">A world-class academy for future leaders.</h2>
            <p className="mt-4 text-sm leading-7 text-blue-50 md:mt-5 md:text-base md:leading-8">We are building a premium school experience where education, creativity, innovation, and leadership prepare students for meaningful futures.</p>
          </motion.article>
        </div>
      </section>
    </section>
  );
}
