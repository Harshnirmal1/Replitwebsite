import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden mesh-gradient min-h-screen flex items-center">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[160px] -mr-96 -mt-48" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -100, 0],
            y: [0, 80, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[140px] -ml-48 -mb-32" 
        />
      </div>

      <div className="container mx-auto relative z-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <Badge variant="outline" className="px-6 py-2 border-white/10 text-white bg-white/5 backdrop-blur-2xl rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Architecting Digital Excellence
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black font-heading leading-[0.95] mb-10 text-white tracking-tighter"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-gradient">Limitless.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl text-slate-400 mb-16 max-w-4xl mx-auto leading-tight font-light tracking-tight"
          >
            We transform complex business visions into <span className="text-white font-medium">high-performance digital reality.</span> Global leaders in Odoo ERP, AI engineering, and custom software architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="text-xl px-16 h-20 bg-white hover:bg-slate-100 text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all rounded-full font-black"
                >
                  Innovate Now <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Luxury Minimalist Brands Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center items-center gap-16"
          >
            {['Enterprise Architecture', 'Odoo Gold Standard', 'AI Transformation', 'Cloud Intelligence'].map((text) => (
              <span key={text} className="text-white/20 font-black uppercase tracking-[0.4em] text-[10px]">{text}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
