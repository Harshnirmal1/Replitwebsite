import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container mx-auto relative z-20 px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-foreground"
          >
            Scalable Web, App & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Software Solutions
            </span>
            <br />
            for Growing Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            We transform complex business challenges into elegant digital products. 
            From enterprise platforms to mobile apps, we build the technology that powers your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8 h-14 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
              Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 bg-background/50 backdrop-blur-sm">
              View Our Work
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
