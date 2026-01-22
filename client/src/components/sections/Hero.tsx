import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] -mr-96 -mt-48" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -ml-48 -mb-32" 
        />
        <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto relative z-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Badge variant="outline" className="px-5 py-1.5 border-primary/20 text-primary bg-white/50 backdrop-blur-md rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted by 200+ Global Partners
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.1] mb-8 text-slate-900 tracking-tight"
          >
            Engineering <span className="text-gradient">Tomorrow</span> <br className="hidden md:block" />
            at Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Raghav Technologies architecting the future of enterprise software. Specialized in <span className="text-slate-900">Odoo ERP</span>, <span className="text-slate-900">AI/ML</span>, and scalable digital ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="text-lg px-12 h-16 bg-slate-900 hover:bg-slate-800 text-white shadow-2xl shadow-slate-900/20 transition-all rounded-full font-bold"
                >
                  Start a Project <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/success-stories">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-12 h-16 border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all rounded-full font-bold"
                >
                  Success Stories
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 pt-12 border-t border-slate-200/50 flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {['Enterprise', 'Odoo Certified', 'ISO 27001', 'Cloud Native'].map((text) => (
              <span key={text} className="text-slate-400 font-bold uppercase tracking-widest text-xs">{text}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
