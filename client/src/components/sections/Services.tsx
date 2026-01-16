import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Database, 
  Layers, 
  Wrench, 
  Cloud,
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
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture and deployment strategies to ensure your applications are always available."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Reliable ongoing support, updates, and maintenance to ensure your digital assets run smoothly 24/7."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver end-to-end technology solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-white cursor-pointer relative overflow-hidden">
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
