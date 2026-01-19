import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Soft, professional gradient backgrounds instead of dark blue */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] -mr-64 -mt-32 opacity-70" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -ml-32 -mb-16 opacity-60" />
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
      </div>

      <div className="container mx-auto relative z-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-6 text-slate-900 tracking-tight"
          >
            Scalable Web, App & <br />
            <span className="text-primary">
              Software Solutions
            </span>
            <br />
            for Growing Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We transform complex business challenges into elegant digital products. 
            From enterprise platforms to mobile apps, we build the technology that powers your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all rounded-full">
              Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 h-14 border-slate-200 hover:bg-slate-50 transition-all rounded-full">
              View Our Success Stories
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Agile Delivery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
