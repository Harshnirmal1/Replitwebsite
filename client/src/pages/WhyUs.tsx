import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Zap, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  HeartHandshake
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";

const differentiators = [
  {
    title: "Experienced Delivery Team",
    description: "Our core team brings over 10+ years of combined experience in building complex enterprise systems. We don't just follow instructions; we apply proven processes to ensure your project's success.",
    example: "Outcome: Reduced technical debt by 40% for a major fintech client through architectural refactoring.",
    icon: Users
  },
  {
    title: "White-Label Ready",
    description: "Trusted by top-tier agencies as their primary delivery arm. We operate as a seamless extension of your team, providing high-quality code under your brand identity.",
    example: "Outcome: Enabled a UK-based agency to scale from 2 to 15 concurrent projects within 6 months.",
    icon: Zap
  },
  {
    title: "Business-First Approach",
    description: "We think in business outcomes, not just lines of code. Every technical decision we make is aligned with your ROI, growth targets, and long-term strategic goals.",
    example: "Outcome: Improved conversion rates by 25% for an e-commerce partner through user-centric performance tuning.",
    icon: Target
  },
  {
    title: "Scalable Engagement Models",
    description: "Whether you need a quick project-based fix, a dedicated long-term team, or a retainer-based partnership, we offer flexible models that scale with your business needs.",
    example: "Outcome: Provided a flexible team of 5 senior devs for a startup that successfully pivoted three times.",
    icon: HeartHandshake
  },
  {
    title: "Quality & Security Focus",
    description: "Rigorous code standards, mandatory peer reviews, and automated QA testing. We prioritize data protection and compliance (GDPR/HIPAA) from day one.",
    example: "Outcome: Zero security breaches across 200+ deployed applications in the last 5 years.",
    icon: Lock
  }
];

const workSteps = [
  { title: "Discover", desc: "Deep-dive into requirements to eliminate ambiguity early on." },
  { title: "Plan", desc: "Strategic roadmap focusing on MVP first and future scalability." },
  { title: "Build", desc: "Agile sprints with bi-weekly demos and transparent tracking." },
  { title: "Test", desc: "Multi-layer QA testing to ensure bug-free, performant code." },
  { title: "Launch", desc: "Carefully managed deployment with full production monitoring." },
  { title: "Support", desc: "Long-term maintenance to keep your software modern and secure." }
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Light, Clean Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px]" />
        </div>

        <div className="container relative z-10 text-center mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 hover:bg-primary/20 transition-colors">
              The Raghav Advantage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 leading-tight text-slate-900">
              Why Businesses <br />
              <span className="text-primary">Choose Us</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We're not just developers—we're your technology partner focused on outcomes, quality, and long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "On-time & On-budget", desc: "Predictable delivery schedules without hidden costs." },
              { title: "Clear Communication", desc: "100% transparency through daily reports and Slack." },
              { title: "Enterprise Quality", desc: "Clean, maintainable code built for massive scale." },
              { title: "Partnership Mindset", desc: "We win when your business wins. Period." }
            ].map((promise) => (
              <div key={promise.title} className="space-y-2">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <h3 className="font-bold text-lg">{promise.title}</h3>
                <p className="text-sm text-slate-600">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-slate-600">We differentiate our services through a commitment to quality and a focus on long-term value.</p>
          </div>
          <div className="grid gap-12">
            {differentiators.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}
              >
                <div className="flex-1 space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                    {item.description}
                  </p>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm font-medium text-slate-800">
                      <span className="text-primary font-bold">Real-world Example:</span> {item.example}
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden relative group border border-slate-200 shadow-inner">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent)]" />
                   <div className="flex items-center justify-center h-full">
                     <item.icon size={100} className="text-slate-200 group-hover:text-primary/20 transition-colors duration-500" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-400">Our proven 6-step process reduces risk and ensures high-quality outcomes for every client.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workSteps.map((step, idx) => (
              <div key={step.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                <div className="text-primary font-bold text-5xl mb-4 opacity-30">0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work Best With */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ideal Partnerships</h2>
              <p className="text-slate-600 text-lg">We deliver the most value when working with organizations that value technical excellence and strategic alignment.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Startups", desc: "Building scalable MVPs and iterating fast for growth." },
                  { name: "SMEs", desc: "Modernizing legacy systems and automating operations." },
                  { name: "Agencies", desc: "Acting as a reliable white-label technical arm." },
                  { name: "Enterprises", desc: "Developing complex, high-security custom solutions." }
                ].map((type) => (
                  <div key={type.name} className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <h4 className="font-bold text-slate-900">{type.name}</h4>
                    <p className="text-xs text-slate-500">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-12 rounded-[2rem] text-white text-center">
               <ShieldCheck size={64} className="mx-auto mb-6 opacity-80" />
               <h3 className="text-3xl font-bold mb-4 italic">"They treat our business like their own."</h3>
               <p className="opacity-90">- Founder, Global Fintech Startup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Trust Signals */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-1">5+</div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-1">200+</div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-1">15+</div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Industries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-1">98%</div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
