import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import fintechImg from "@assets/generated_images/fintech_dashboard_project.png";
import healthImg from "@assets/generated_images/healthcare_app_project.png";
import ecomImg from "@assets/generated_images/ecommerce_mobile_app_project.png";

const projects = [
  {
    title: "FinFlow Analytics",
    category: "Fintech Dashboard",
    problem: "Complex data visualization for banking data.",
    solution: "A high-performance React dashboard with real-time analytics.",
    stack: ["React", "D3.js", "Node.js"],
    image: fintechImg
  },
  {
    title: "MediCare Connect",
    category: "Healthcare Platform",
    problem: "Patient scheduling efficiency and record management.",
    solution: "HIPAA-compliant patient portal with telemedicine features.",
    stack: ["Next.js", "PostgreSQL", "AWS"],
    image: healthImg
  },
  {
    title: "StyleHub Mobile",
    category: "E-Commerce App",
    problem: "Low conversion rates on mobile web.",
    solution: "Native iOS/Android app with seamless checkout experience.",
    stack: ["React Native", "Firebase", "Stripe"],
    image: ecomImg
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg">
              We take pride in delivering high-quality solutions that drive real business results.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6 shadow-md border border-border/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold flex items-center gap-2">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                   <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                   <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Solution:</span> {project.solution}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
