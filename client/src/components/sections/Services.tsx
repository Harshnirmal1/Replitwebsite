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
    <section id="services" className="py-12 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1">Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900">
              Our Capabilities
            </h2>
            <p className="text-slate-600 text-lg">
              We deliver end-to-end technology solutions tailored to your unique business needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
