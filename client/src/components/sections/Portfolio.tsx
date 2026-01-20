import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { successStories } from "@/pages/SuccessStories";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1">Case Studies</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900">
              Success Stories
            </h2>
            <p className="text-slate-600 text-lg">
              We take pride in delivering high-quality solutions that drive real business results.
            </p>
          </div>
          <Link href="/success-stories">
            <Button variant="outline" className="hidden md:flex rounded-full border-slate-200">
              View All Stories
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-sm border border-slate-200">
                <img 
                  src={story.image} 
                  alt={story.client} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-semibold flex items-center gap-2">
                    View Story <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex flex-col gap-1 mb-3">
                   <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{story.industry}</span>
                   <h3 className="text-xl font-bold font-heading text-slate-900">{story.client}</h3>
                </div>
                
                <p className="text-sm text-slate-600 line-clamp-2">
                  {story.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/success-stories">
            <Button variant="outline" className="w-full">
              View All Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
