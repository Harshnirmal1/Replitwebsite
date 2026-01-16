import { motion } from "framer-motion";
import { Shield, Users, Zap, Clock, Smile } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Delivery Reliability",
    description: "We don't just promise; we deliver. Our track record of on-time deployment speaks for itself."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Work with senior engineers and designers who have built scalable products for global enterprises."
  },
  {
    icon: Zap,
    title: "White-label Support",
    description: "Seamless white-label services for agencies looking to scale their production capacity instantly."
  },
  {
    icon: Clock,
    title: "Cost Efficiency",
    description: "Enterprise-grade quality at competitive rates, ensuring maximum ROI for your technology investment."
  },
  {
    icon: Smile,
    title: "Long-term Partnership",
    description: "We view ourselves as your technology partner, committed to your long-term success and growth."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground leading-tight">
              Why leading companies <br />
              <span className="text-primary">trust us</span> with their software.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We bring a unique blend of technical excellence and business acumen to every project.
            </p>
            
            <div className="space-y-8">
              {features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.slice(3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                 <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
            
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-primary p-8 rounded-2xl text-primary-foreground flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
              <p className="mb-6 opacity-90">Get a free consultation for your next big project.</p>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
                Get a Quote
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
