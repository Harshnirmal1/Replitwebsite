import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { successStories } from "@/pages/SuccessStories";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-semibold">Case Studies</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-slate-900 tracking-tight">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              We take pride in delivering high-quality solutions that drive real business impact and engineering excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/success-stories">
              <Button size="lg" variant="outline" className="hidden md:flex rounded-full border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 px-8">
                View All Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <img 
                  src={story.image} 
                  alt={story.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{story.industry}</span>
                    <h3 className="text-2xl font-bold font-heading text-white mb-4">{story.client}</h3>
                    <div className="flex items-center text-white font-semibold text-sm gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                 <h3 className="text-xl font-bold font-heading text-slate-900 mb-2 md:hidden">{story.client}</h3>
                 <p className="text-slate-600 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                   {story.impact}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/success-stories">
            <Button size="lg" variant="outline" className="w-full rounded-full">
              View All Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
