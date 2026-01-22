import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
      {/* Structural Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-32" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Trusted IT Excellence
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.1] mb-8 text-slate-900 tracking-tight"
            >
              Next-Gen <span className="text-primary">Software</span> <br />
              Architected for <br />
              Business Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed"
            >
              Raghav Technologies builds high-performance digital solutions—specializing in <span className="text-slate-900 font-bold">Odoo ERP</span>, <span className="text-slate-900 font-bold">AI Engineering</span>, and scalable enterprise software.
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
                  className="text-lg px-10 h-16 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all rounded-xl font-bold"
                >
                  Start Your Project <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 h-16 border-slate-200 bg-white shadow-sm hover:shadow-md transition-all rounded-xl font-bold"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-[600px]"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                 alt="Modern Engineering Team" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating Trust Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">200+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Success Stories</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">Delivering excellence globally for 5+ years.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
