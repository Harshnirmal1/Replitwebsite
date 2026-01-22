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
    <section id="services" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-semibold tracking-wide">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-slate-900 tracking-tight">
              Our <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              We deliver end-to-end technology solutions tailored to your unique business needs, powered by engineering excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="h-full border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group bg-white cursor-pointer relative overflow-hidden rounded-[2rem] p-2">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </CardContent>
                  
                  {/* Subtle Gradient Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
