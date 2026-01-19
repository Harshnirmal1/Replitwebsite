import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";
import fintechCaseImg from "@assets/generated_images/modern_fintech_dashboard_visualization_blue_cyan.png";

const successStories = [
  {
    client: "Global Fintech Solutions",
    industry: "Financial Services",
    challenge: "Scaling a legacy payment gateway to handle 10x traffic increase.",
    solution: "Microservices architecture migration with high-availability Odoo integration.",
    impact: "99.99% uptime during peak seasons and 40% reduction in processing latency.",
    image: fintechCaseImg
  },
  {
    client: "EduTech Pioneers",
    industry: "Education",
    challenge: "Developing an interactive AI-driven learning platform for K-12.",
    solution: "Custom mobile-first web app with real-time video processing and AI tutoring.",
    impact: "Onboarded 50k users in first 3 months with 4.8/5 satisfaction rating.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop"
  },
  {
    client: "NexGen Logistics",
    industry: "Supply Chain",
    challenge: "Manual tracking processes causing significant inventory leakage.",
    solution: "End-to-end custom ERP with IoT integration for real-time fleet tracking.",
    impact: "Saved $1.2M annually by eliminating inventory discrepancies.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  }
];

const clients = [
  "Microsoft", "Google", "Amazon", "Standard Chartered", "Deloitte", "Salesforce"
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Reusing Home Hero Style */}
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
              Our Clients' <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Success Stories
              </span>
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

      <section className="py-24">
        <div className="container">
          <div className="grid gap-16">
            {successStories.map((story, index) => (
              <motion.div 
                key={story.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                  <img src={story.image} alt={story.client} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="text-primary font-bold tracking-widest uppercase text-sm">{story.industry}</div>
                  <h2 className="text-3xl font-bold font-heading">{story.client}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> The Challenge
                      </h4>
                      <p className="text-muted-foreground mt-1">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Our Solution
                      </h4>
                      <p className="text-muted-foreground mt-1">{story.solution}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-secondary/30 rounded-2xl border border-border/50">
                    <div className="text-primary font-bold text-3xl mb-1">{story.impact.split(' ')[0]}</div>
                    <p className="text-muted-foreground font-medium">{story.impact.split(' ').slice(1).join(' ')}</p>
                  </div>

                  <Button variant="outline" className="group">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10 border-y border-border/50">
        <div className="container text-center">
          <h2 className="text-xl font-bold mb-12 text-muted-foreground uppercase tracking-widest">Trusted By Companies Worldwide</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map(client => (
              <span key={client} className="text-3xl font-black text-foreground">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
