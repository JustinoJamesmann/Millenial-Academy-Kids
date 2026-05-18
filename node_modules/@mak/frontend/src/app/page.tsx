import Image from "next/image";
import { BookOpen, Brain, ChevronRight, Clock, GraduationCap, Mail, MapPin, MessageCircle, Palette, Phone, Rocket, Send, Star, Trophy, Users } from "lucide-react";
import { HeroSection } from "@/components/marketing/hero-section";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Reveal } from "@/components/marketing/reveal";
import { VisualPlaceholder } from "@/components/marketing/visual-placeholder";

const values = [
  { icon: Trophy, title: "Excellence", text: "High expectations, focused learning, and consistent academic growth." },
  { icon: Palette, title: "Creativity", text: "Creative thinking, expression, and project-based discovery." },
  { icon: Brain, title: "Innovation", text: "Modern methods that prepare learners for a changing world." },
  { icon: Rocket, title: "Leadership", text: "Confidence, responsibility, communication, and character." }
];

const programs = [
  { icon: BookOpen, title: "Early Foundations", text: "A joyful start with literacy, numeracy, curiosity, and social growth." },
  { icon: GraduationCap, title: "Primary Academy", text: "Strong core academics with guided routines and character formation." },
  { icon: Brain, title: "Middle School", text: "Critical thinking, collaboration, independence, and study discipline." },
  { icon: Trophy, title: "High School", text: "Future preparation, academic excellence, leadership, and responsibility." },
  { icon: Palette, title: "Arts & Creativity", text: "Expression through visual arts, music, projects, and performance." },
  { icon: Users, title: "Leadership Clubs", text: "Teamwork, service, communication, and community participation." }
];

const stats = [
  ["500+", "Students"],
  ["40+", "Educators"],
  ["24+", "Classes"],
  ["98%", "Family trust"]
];

const campuses = ["Antanimena Campus", "Iavoloha Campus", "Future Campus"];
const gallery = ["Campus Life", "Classroom Moment", "Student Activity", "Creative Arts", "School Community", "Outdoor Learning"];
const testimonials = ["Parent testimonial", "Student story", "Teacher highlight"];
const faqs = ["How do admissions work?", "Where are the campuses located?", "What programs are available?", "How can parents contact the school?"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <MarketingNav />
      <HeroSection />

      <section className="bg-slate-50 px-4 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Core Values</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Values that shape every student.</h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <article className="group h-full rounded-3xl border bg-white p-6 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100">
                <value.icon className="mb-8 size-10 text-blue-600 transition group-hover:scale-110" />
                <h3 className="text-xl font-black">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="programs" className="px-4 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Programs</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Premium academic pathways.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Six structured program areas designed for growth, confidence, creativity, and achievement.</p>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.04}>
              <article className="rounded-3xl border bg-white p-7 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600"><program.icon className="size-6" /></div>
                <h3 className="text-xl font-black">{program.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{program.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {stats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.04}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
                <p className="text-5xl font-black text-white">{value}</p>
                <p className="mt-2 font-bold text-slate-300">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="enrollment" className="px-4 py-24">
        <Reveal>
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-200 lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 text-white md:p-14">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-100">Enrollment Open</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Give your child a premium learning advantage.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">Start the admissions conversation today and discover how Millennial Academy can support your family.</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-blue-600 transition hover:-translate-y-0.5">Start Enrollment <ChevronRight className="size-4" /></a>
            </div>
            <div className="min-h-80 p-4">
              {/* Replace with actual enrollment or campus hero image */}
              <VisualPlaceholder label="Enrollment CTA Image" className="h-full min-h-72 rounded-[2rem]" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50 px-4 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Life at School</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">A vibrant academy experience.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">These are structured placeholders. Replace them later with student life, classroom, activity, and event photos.</p>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((label, index) => (
            <Reveal key={label} delay={index * 0.04}>
              {/* Replace with student life photo */}
              <VisualPlaceholder label={label} className="aspect-[4/3] rounded-3xl shadow-lg shadow-slate-200 transition hover:-translate-y-1" />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="school" className="px-4 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Locations</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Campuses prepared for learning.</h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
          {campuses.map((campus, index) => (
            <Reveal key={campus} delay={index * 0.05}>
              <article className="overflow-hidden rounded-3xl border bg-white shadow-sm shadow-slate-200">
                {/* Replace with actual campus image */}
                <VisualPlaceholder label={campus} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="text-xl font-black">{campus}</h3>
                  <p className="mt-3 flex items-center gap-2 text-slate-600"><MapPin className="size-5 text-blue-600" /> Madagascar</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border bg-blue-50 p-6 shadow-sm">
            {/* Replace with actual embedded map or custom map image */}
            <VisualPlaceholder label="Map Placeholder" className="aspect-[16/5] rounded-[1.5rem]" />
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50 px-4 py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Testimonials</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Trusted by families.</h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map((label, index) => (
            <Reveal key={label} delay={index * 0.05}>
              <article className="rounded-3xl border bg-white p-6 shadow-sm shadow-slate-200">
                <div className="flex items-center gap-4">
                  {/* Replace with actual parent/student avatar */}
                  <VisualPlaceholder label="Avatar" className="size-16 rounded-full" />
                  <div><h3 className="font-black">{label}</h3><p className="text-sm text-slate-500">Millennial Academy Family</p></div>
                </div>
                <div className="mt-5 flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-4 fill-current" />)}</div>
                <p className="mt-4 leading-7 text-slate-600">Millennial Academy provides a warm, ambitious, and professional environment where children feel supported and motivated.</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">FAQ</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Before you enroll.</h2>
              <div className="mt-8 grid gap-4">
                {faqs.map((faq) => <div key={faq} className="rounded-2xl border bg-white p-5 font-black shadow-sm shadow-slate-200">{faq}</div>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div id="contact" className="rounded-[2rem] border bg-white p-6 shadow-2xl shadow-slate-100">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Contact</p>
              <h2 className="mt-3 text-3xl font-black">Speak with admissions.</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input className="h-12 rounded-2xl border px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" placeholder="Parent name" />
                <input className="h-12 rounded-2xl border px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" placeholder="Phone number" />
              </div>
              <input className="mt-4 h-12 w-full rounded-2xl border px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" placeholder="Email address" />
              <textarea className="mt-4 min-h-32 w-full rounded-2xl border p-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" placeholder="Tell us about your child" />
              <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-700"><Send className="size-4" /> Send Message</button>
              <div className="mt-6 grid gap-3 text-sm font-bold text-slate-600">
                <span className="flex items-center gap-2"><Phone className="size-4 text-blue-600" /> +261 XX XX XXX XX</span>
                <span className="flex items-center gap-2"><Mail className="size-4 text-blue-600" /> admissions@millennialacademy.mg</span>
                <span className="flex items-center gap-2"><Clock className="size-4 text-blue-600" /> Monday - Friday, 8:00 - 17:00</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3"><span className="relative size-12 overflow-hidden rounded-2xl bg-white"><Image src="/logoMAK.jpg" alt="Millennial Academy logo" fill className="object-cover" sizes="48px" /></span><span className="font-black">MILLENNIAL ACADEMY</span></div>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">A premium private academy prepared for future-ready learning, leadership, and community.</p>
          </div>
          <div><h3 className="font-black">Academy</h3><div className="mt-4 grid gap-2 text-slate-400"><a href="#about">About</a><a href="#programs">Programs</a><a href="#school">Locations</a></div></div>
          <div><h3 className="font-black">Admissions</h3><div className="mt-4 grid gap-2 text-slate-400"><a href="#enrollment">Enroll Now</a><a href="#contact">Contact</a><span>Visit Campus</span></div></div>
          <div><h3 className="font-black">Connect</h3><div className="mt-4 grid gap-2 text-slate-400"><span>Madagascar</span><span>+261 XX XX XXX XX</span><div className="mt-2 flex gap-2"><span className="grid size-9 place-items-center rounded-full bg-white/10"><MessageCircle className="size-4" /></span><span className="grid size-9 place-items-center rounded-full bg-white/10"><Star className="size-4" /></span></div></div></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Millennial Academy. All rights reserved.</p>
          <span className="font-bold text-white">Learn Believe Succeed</span>
        </div>
      </footer>
    </main>
  );
}
