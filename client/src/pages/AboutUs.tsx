import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { CheckCircle, Target, Users, Zap, Award } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Consistent with Home/Success Stories */}
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
              Driving Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Transformation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              Raghav Technologies is a premier IT consulting and software development firm dedicated to building scalable solutions for ambitious global enterprises.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold font-heading">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with innovative, high-quality, and scalable technology solutions that drive real-world impact. We strive to be more than just a service provider; we aim to be your long-term strategic growth partner.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600">
                <Zap size={32} />
              </div>
              <h2 className="text-3xl font-bold font-heading">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a global leader in digital transformation, recognized for our technical excellence, ethical practices, and unwavering commitment to client success in the ever-evolving technological landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide every line of code we write and every partnership we build.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "We never settle for 'good enough'. We aim for technical perfection in every project." },
              { icon: Users, title: "Collaboration", desc: "We operate as a seamless extension of your team, fostering open and transparent communication." },
              { icon: CheckCircle, title: "Integrity", desc: "Honesty and ethical practices are at the heart of everything we do." }
            ].map((value, idx) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm"
              >
                <value.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">Led by Experts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team consists of senior architects, skilled developers, and creative designers with decades of collective experience in the IT industry. We bring a wealth of knowledge to every challenge.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-medium">10+ Years Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-medium">Expertise in Odoo, ERP & Custom Software</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-medium">Global Client Footprint</span>
                </div>
              </div>
              <Button size="lg" className="mt-4">Join Our Team</Button>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071823992-b487172a9c4a?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
