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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold">Expertise</Badge>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 text-slate-900 leading-[1.1] tracking-tighter">
                Solutions that <br />
                <span className="text-primary">Drive Success.</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed">
                We bridge the gap between complex engineering and intuitive user experiences.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full border-slate-200 hover:bg-slate-50 transition-all px-8 font-bold h-14">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group h-full p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
