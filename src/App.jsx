import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Menu, X, Sparkles, ShieldCheck, Zap, BarChart3, Star } from "lucide-react";

const features = [
  { icon: Zap, title: "Launch faster", description: "Ship polished customer experiences with reusable sections, clean UI, and responsive layouts." },
  { icon: ShieldCheck, title: "Built for trust", description: "Security-minded design patterns, clear messaging, and conversion-focused structure from day one." },
  { icon: BarChart3, title: "Grow with insight", description: "Highlight metrics, social proof, and product value so visitors understand why they should act now." },
];

const pricing = [
  { name: "Starter", price: "$19", description: "For small teams validating an idea.", items: ["Responsive landing page", "Basic analytics", "Email support"] },
  { name: "Growth", price: "$49", description: "For teams ready to scale acquisition.", items: ["Everything in Starter", "A/B-ready sections", "Priority support"], highlighted: true },
  { name: "Scale", price: "$99", description: "For companies optimizing conversion.", items: ["Everything in Growth", "Advanced integrations", "Dedicated success"] },
];

function Button({ children, className = "", variant = "primary" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950";
  const styles = variant === "outline" ? "border border-white/15 bg-white/5 text-white hover:bg-white/10" : "bg-cyan-400 text-slate-950 hover:bg-cyan-300";
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-64 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-20 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"><Sparkles size={20} /></span>
          <span className="text-xl">Launchly</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a><a href="#pricing" className="hover:text-white">Pricing</a><a href="#testimonials" className="hover:text-white">Customers</a><a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="hidden md:block"><Button className="bg-white hover:bg-slate-200">Start free</Button></div>
        <button aria-label="Toggle menu" className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      {mobileOpen && <div className="relative z-20 mx-6 rounded-3xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl md:hidden"><div className="grid gap-3 text-sm text-slate-200"><a href="#features" onClick={() => setMobileOpen(false)}>Features</a><a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a><a href="#testimonials" onClick={() => setMobileOpen(false)}>Customers</a><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a><Button className="mt-2">Start free</Button></div></div>}

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"><Sparkles size={16} />New: Docker-ready production build</div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">A modern landing page that turns visitors into customers.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Launchly gives your product a premium first impression with a conversion-focused hero, feature blocks, social proof, pricing, and a clear call to action.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button>Get started <ArrowRight className="ml-2" size={18} /></Button><Button variant="outline">View demo</Button></div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400"><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> No credit card</span><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> Docker deployable</span><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> Mobile-first</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur"><div className="rounded-[1.5rem] bg-slate-900 p-5"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm text-slate-400">Monthly growth</p><p className="text-3xl font-bold">+148%</p></div><div className="rounded-2xl bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">Live</div></div><div className="grid gap-3">{[72,48,86,62,94].map((width,index)=><div key={index} className="rounded-2xl bg-white/5 p-3"><div className="mb-2 flex justify-between text-xs text-slate-400"><span>Campaign {index+1}</span><span>{width}%</span></div><div className="h-3 overflow-hidden rounded-full bg-slate-800"><motion.div initial={{width:0}} animate={{width:`${width}%`}} transition={{duration:.9,delay:index*.1}} className="h-full rounded-full bg-cyan-400" /></div></div>)}</div><div className="mt-5 grid grid-cols-3 gap-3 text-center"><div className="rounded-2xl bg-white/5 p-4"><p className="text-2xl font-bold">32k</p><p className="text-xs text-slate-400">Visitors</p></div><div className="rounded-2xl bg-white/5 p-4"><p className="text-2xl font-bold">8.4%</p><p className="text-xs text-slate-400">CVR</p></div><div className="rounded-2xl bg-white/5 p-4"><p className="text-2xl font-bold">4.9</p><p className="text-xs text-slate-400">Rating</p></div></div></div></div>
          </motion.div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Features</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to launch confidently</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{features.map((feature)=>{const Icon=feature.icon;return <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300"><Icon size={24}/></div><h3 className="text-xl font-semibold">{feature.title}</h3><p className="mt-3 leading-7 text-slate-300">{feature.description}</p></div>})}</div></section>

        <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12"><div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center"><div><p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Loved by teams</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Designed to make your product feel credible instantly.</h2></div><div className="rounded-3xl bg-slate-900 p-6"><div className="mb-4 flex gap-1 text-yellow-300">{[...Array(5)].map((_,i)=><Star key={i} size={18} fill="currentColor" />)}</div><p className="text-lg leading-8 text-slate-200">“We replaced our old homepage with this landing page and had a clean, production-ready launch in one afternoon. The Docker setup made deployment simple.”</p><div className="mt-6"><p className="font-semibold">Maya Chen</p><p className="text-sm text-slate-400">Founder, Northstar Apps</p></div></div></div></div></section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Pricing</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Simple plans for every stage</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{pricing.map((plan)=><div key={plan.name} className={`rounded-3xl p-6 text-white shadow-xl ${plan.highlighted?"border border-cyan-300 bg-cyan-400/10":"border border-white/10 bg-white/5"}`}>{plan.highlighted&&<div className="mb-4 inline-flex rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">Most popular</div>}<h3 className="text-2xl font-bold">{plan.name}</h3><p className="mt-2 text-slate-300">{plan.description}</p><div className="mt-6 flex items-end gap-1"><span className="text-5xl font-bold">{plan.price}</span><span className="mb-2 text-slate-400">/mo</span></div><ul className="mt-6 grid gap-3 text-sm text-slate-300">{plan.items.map((item)=><li key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> {item}</li>)}</ul><Button className={`mt-6 w-full ${plan.highlighted?"":"bg-white hover:bg-slate-200"}`}>Choose {plan.name}</Button></div>)}</div></section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8"><div className="rounded-[2rem] bg-cyan-400 p-8 text-slate-950 shadow-2xl shadow-cyan-400/20 md:p-12"><h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to launch your next campaign?</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-800">Customize the copy, connect your forms, build the Docker image, and deploy anywhere that runs containers.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><button className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Start building <ArrowRight className="ml-2" size={18} /></button><button className="rounded-2xl border border-slate-950/20 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-950/10">Contact sales</button></div></div></section>
      </main>
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Launchly. All rights reserved.</footer>
    </div>
  );
}
