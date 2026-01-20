import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";
import fintechCaseImg from "@assets/generated_images/modern_fintech_dashboard_visualization_blue_cyan.png";
import retailImg from "@assets/stock_images/modern_retail_e-comm_e3692d51.jpg";

export const successStories = [
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
  },
  {
    client: "RetailFlow Omni",
    industry: "E-commerce",
    challenge: "Managing fragmented inventory across 50+ physical stores and online channels.",
    solution: "Omnichannel Odoo implementation with real-time POS synchronization.",
    impact: "Boosted fulfillment speed by 35% and increased cross-channel sales by 20%.",
    image: retailImg
  }
];

const clients = [
  "Microsoft", "Google", "Amazon", "Standard Chartered", "Deloitte", "Salesforce"
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-slate-50/50 border-b border-slate-100">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -mr-64 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -ml-32 -mb-16" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto relative z-20 px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 hover:bg-primary/20 transition-colors">
              Our Success
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 leading-tight text-slate-900">
              Our Clients' <br />
              <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We transform complex business challenges into elegant digital products. From enterprise platforms to mobile apps, we build the technology that powers your growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-16 md:gap-24">
            {successStories.map((story, index) => (
              <motion.div 
                key={story.client}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1 w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group relative">
                  <img src={story.image} alt={story.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-primary/30" />
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">{story.industry}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 leading-tight">{story.client}</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> The Challenge
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{story.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Our Solution
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-primary font-bold text-3xl mb-0.5 tracking-tight">{story.impact.split(' ')[0]}</div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{story.impact.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <Button variant="outline" className="rounded-full group h-12 px-6 border-slate-200 bg-white">
                      Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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
