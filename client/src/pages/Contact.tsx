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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Light, Modern Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
        </div>

        <div className="container mx-auto relative z-20 px-4 md:px-6 text-center">
          <motion.div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 hover:bg-primary/20 transition-colors">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 leading-tight text-slate-900">
              Let's Build <br />
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to start your next big project? Our team of experts is here to guide you through every step of your digital journey.
            </p>
          </motion.div>
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
