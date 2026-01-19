import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { ExternalLink, ArrowRight, Quote } from "lucide-react";

const successStories = [
  {
    client: "Global Fintech Solutions",
    industry: "Financial Services",
    challenge: "Scaling a legacy payment gateway to handle 10x traffic increase.",
    solution: "Microservices architecture migration with high-availability Odoo integration.",
    impact: "99.99% uptime during peak seasons and 40% reduction in processing latency.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2070&auto=format&fit=crop"
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
      
      <section className="pt-32 pb-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/10 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-primary text-white border-none">Success Stories</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Real Results for Global Leaders</h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Discover how we've helped businesses across the globe solve complex technical challenges and achieve measurable growth.
            </p>
          </motion.div>
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
                <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img src={story.image} alt={story.client} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="text-primary font-bold tracking-widest uppercase text-sm">{story.industry}</div>
                  <h2 className="text-3xl font-bold">{story.client}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> The Challenge
                      </h4>
                      <p className="text-slate-600 mt-1">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Our Solution
                      </h4>
                      <p className="text-slate-600 mt-1">{story.solution}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-primary font-bold text-3xl mb-1">{story.impact.split(' ')[0]}</div>
                    <p className="text-slate-600 font-medium">{story.impact.split(' ').slice(1).join(' ')}</p>
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

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-12 text-slate-400 uppercase tracking-widest">Trusted By Companies Worldwide</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map(client => (
              <span key={client} className="text-3xl font-black text-slate-900">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
