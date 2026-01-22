import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@/assets/hero-architecture.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-[#fcfcfd]">
      {/* Immersive Structural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-50/80 -skew-x-12 translate-x-32" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-[1.2] text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-primary text-xs font-black uppercase tracking-[0.2em]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Engineering Excellence
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black font-heading leading-[0.95] mb-8 text-slate-900 tracking-tighter"
            >
              Architecting <br />
              <span className="text-primary">Digital</span> <br />
              Fortunes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 mb-12 max-w-xl leading-snug font-medium tracking-tight"
            >
              We don't just build apps; we engineer <span className="text-slate-900">scalable ecosystems</span>. Specialized in Odoo ERP, AI infrastructure, and high-performance custom software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="text-lg px-12 h-18 bg-slate-900 hover:bg-slate-800 text-white shadow-2xl shadow-slate-900/20 transition-all rounded-2xl font-black"
                >
                  Start Consultation <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-12 h-18 border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all rounded-2xl font-black"
                >
                  Our Expertise
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center gap-12"
            >
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Expert" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  +200
                </div>
              </div>
              <p className="text-sm text-slate-500 font-bold tracking-tight">
                Trusted by industry leaders <br />
                across 15+ countries.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full max-w-[650px] group"
          >
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white group-hover:shadow-[0_60px_120px_-20px_rgba(37,99,235,0.15)] transition-shadow duration-700">
               <img 
                 src={heroImage} 
                 alt="Enterprise Architecture" 
                 className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>
            
            {/* Elite Stats Overlay */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 max-w-[280px]"
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 leading-none">99.9%</div>
                  <div className="text-[10px] uppercase font-black text-primary tracking-[0.2em] mt-1">Uptime SLA</div>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-snug font-medium">Enterprise-grade reliability for mission-critical systems.</p>
            </motion.div>

            {/* Accent Decor */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
