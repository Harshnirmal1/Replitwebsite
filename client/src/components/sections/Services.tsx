import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Database, 
  Layers, 
  Wrench, 
  BrainCircuit,
  ArrowUpRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance websites and web applications built with modern frameworks like React, Next.js, and Node.js."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences."
  },
  {
    icon: Database,
    title: "Custom Software",
    description: "Tailor-made software solutions designed to streamline your specific business processes and workflows."
  },
  {
    icon: Layers,
    title: "Odoo / ERP Solutions",
    description: "Comprehensive ERP implementation and customization to manage your business operations efficiently."
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Solutions",
    description: "Leverage the power of Artificial Intelligence and Machine Learning to gain insights and automate complex tasks."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Reliable ongoing support, updates, and maintenance to ensure your digital assets run smoothly 24/7."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Immersive Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 bg-white/5 text-white border-white/10 px-6 py-2 rounded-full font-black tracking-[0.3em] uppercase text-[10px]">Expertise</Badge>
            <h2 className="text-5xl md:text-7xl font-black font-heading mb-8 text-white tracking-tighter">
              World Class <span className="text-gradient">Capabilities.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl leading-tight font-light tracking-tight max-w-2xl mx-auto">
              Engineering solutions that define industry standards and drive <span className="text-white font-medium">exponential growth.</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{ y: -16, transition: { duration: 0.4 } }}
                className="h-full group"
              >
                <Card className="h-full border border-white/5 shadow-2xl group-hover:border-white/20 transition-all duration-700 bg-white/[0.02] backdrop-blur-3xl cursor-pointer relative overflow-hidden rounded-[2.5rem] p-4">
                  <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <div className="bg-white/10 p-3 rounded-full">
                      <ArrowUpRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-slate-950 transition-all duration-700 rotate-6 group-hover:rotate-0 shadow-inner">
                      <service.icon className="h-10 w-10 text-white group-hover:text-slate-950 transition-colors duration-700" />
                    </div>
                    <CardTitle className="text-3xl font-black font-heading mb-4 text-white tracking-tighter group-hover:text-primary transition-colors duration-500">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-10">
                    <p className="text-slate-400 leading-tight text-lg font-light tracking-tight">
                      {service.description}
                    </p>
                  </CardContent>
                  
                  {/* Luxury Edge Glow */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-white to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
