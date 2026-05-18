"use client";

import { motion } from "framer-motion";
import { Award, Building2, HeartHandshake, Laptop, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Education",
    description: "A structured school experience focused on strong academics, discipline, confidence, and long-term student growth.",
  },
  {
    icon: HeartHandshake,
    title: "Caring Teachers",
    description: "Teachers guide children with attention, encouragement, and a clear understanding of each learner’s development.",
  },
  {
    icon: Laptop,
    title: "Modern Learning",
    description: "Classroom education is supported by digital tools that keep lessons, activities, and communication organized.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Support",
    description: "Only enrolled students receive school-provided access to continue learning and stay connected when needed.",
  },
];

export function AboutStickySection() {
  return (
    <>
      <section className="mt-8 px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border bg-blue-50 p-5 shadow-sm md:grid-cols-[auto_1fr] md:items-center md:p-6"
        >
          <div className="grid size-14 place-items-center rounded-2xl bg-blue-600 text-white">
            <Building2 className="size-7" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-950">Millennial Academy Kids is a registered private institution.</h2>
            <p className="mt-2 leading-7 text-slate-600">This platform is reserved for the school&apos;s active community. Student and parent accounts are created solely by school administration — enrollment at Millennial Academy Kids is required to access this portal.</p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="bg-[#F0F4FF] px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">ABOUT US</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">A trusted school environment with modern support.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Our public website presents the real school experience: campuses, teachers, structured programs, and a secure digital layer for enrolled students.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2"
        >
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl bg-white p-8 shadow-md">
              <feature.icon className="mb-6 size-10 text-blue-600" />
              <h3 className="text-xl font-black text-slate-950">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
