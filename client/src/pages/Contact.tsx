import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/Contact";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
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
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              Ready to start your next big project? Our team of experts is here to guide you through every step of your digital journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Whether you have a specific project in mind or just want to explore possibilities, we're always open for a conversation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-sm text-muted-foreground italic">harsh@raghavtechnologies.com</p>
                </div>
                <div className="space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 8849660901</p>
                </div>
                <div className="space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-bold">Our Location</h4>
                  <p className="text-sm text-muted-foreground">Rajkot, Gujarat, India</p>
                </div>
                <div className="space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold">Working Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <MessageSquare size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fast Response Guarantee</h3>
                <p className="text-slate-400 leading-relaxed mb-0">
                  We value your time. Our team typically responds to all inquiries within 12 business hours.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-2 rounded-[2rem] shadow-2xl border border-border/50"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-secondary/30 relative grayscale opacity-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground font-medium uppercase tracking-widest">Interactive Map Placeholder</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
