import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Settings, 
  Layers, 
  Users, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  BrainCircuit
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";
import webDevImg from "@assets/generated_images/web_development_team_working_on_code.png";
import mobileAppImg from "@assets/generated_images/modern_mobile_app_interface_mockup.png";
import customSoftwareImg from "@assets/generated_images/custom_software_development_dashboard_visualization.png";
import aiMlImg from "@assets/generated_images/ai_and_machine_learning_neural_network_visualization.png";
import erpImg from "@assets/generated_images/enterprise_erp_system_visualization.png";
import whiteLabelImg from "@assets/generated_images/white_label_agency_partnership_concept.png";
import maintenanceImg from "@assets/generated_images/it_maintenance_and_server_support_visualization.png";

const services = [
  {
    id: "odoo-erp",
    title: "Odoo / ERP Solutions",
    h2: "Expert Odoo Development and ERP Implementation",
    description: "Streamline your entire business with a centralized ERP. As experts in Odoo development, we help you consolidate accounting, inventory, CRM, and HR into one seamless ecosystem that grows with your company.",
    benefits: [
      "Custom Odoo Module Development",
      "Full-cycle ERP Implementation",
      "Seamless Data Migration from Legacy ERPs",
      "Third-party Software Integrations"
    ],
    useCases: "Essential for manufacturing, distribution, and large-scale retail operations requiring tight inventory control.",
    icon: Layers,
    image: erpImg
  },
  {
    id: "web-development",
    title: "Web Development Services",
    h2: "Custom Web Development Company for Enterprise Solutions",
    description: "In today's digital-first economy, your website is your most powerful sales tool. We build high-performance, SEO-optimized web applications that turn visitors into loyal customers. Our web development company specializes in creating scalable, secure, and lightning-fast digital experiences.",
    benefits: [
      "Responsive UI/UX Design for all devices",
      "Headless CMS and Progressive Web Apps (PWA)",
      "API Integration and Third-party connectivity",
      "Performance optimization for Core Web Vitals"
    ],
    useCases: "Ideal for B2B SaaS platforms, enterprise portals, and complex customer-facing web applications.",
    icon: Code,
    image: webDevImg
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    h2: "Native and Cross-Platform Mobile App Development",
    description: "Reach your customers wherever they are. Our mobile app development team creates intuitive iOS and Android applications that prioritize user engagement and performance. We use cutting-edge frameworks like React Native and Flutter to deliver native-quality experiences.",
    benefits: [
      "Custom iOS and Android App Development",
      "Intuitive and User-Centric Interface Design",
      "Scalable Backend Infrastructure",
      "App Store & Play Store Deployment"
    ],
    useCases: "Perfect for customer loyalty programs, on-demand service platforms, and internal business productivity tools.",
    icon: Smartphone,
    image: mobileAppImg
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    h2: "Scalable Custom Software Development for Business Automation",
    description: "Off-the-shelf software often fails to meet unique business requirements. Our custom software development services are tailored to your specific workflows, helping you automate repetitive tasks and gain a competitive edge in your industry.",
    benefits: [
      "Tailor-made Business Logic & Workflows",
      "Legacy System Migration & Modernization",
      "Cloud-native Architecture (AWS/Azure/GCP)",
      "Robust Data Security & Compliance"
    ],
    useCases: "Designed for supply chain management, complex data analytics, and unique internal operational needs.",
    icon: Settings,
    image: customSoftwareImg
  },
  {
    id: "ai-ml",
    title: "AI / ML Solutions",
    h2: "Intelligent AI and Machine Learning Solutions for B2B",
    description: "Future-proof your business with Artificial Intelligence. We help enterprises integrate AI/ML models to automate decision-making, enhance customer personalization, and predict market trends through sophisticated data modeling.",
    benefits: [
      "Generative AI & LLM Integration",
      "Predictive Analytics & Forecasting",
      "Computer Vision & Image Processing",
      "Automated Process Optimization"
    ],
    useCases: "Used for demand forecasting, automated customer support (AI Chatbots), and intelligent document processing.",
    icon: BrainCircuit,
    image: aiMlImg
  },
  {
    id: "white-label",
    title: "White-Label Development",
    h2: "Reliable White-Label Development for Agencies",
    description: "Scale your agency's capacity without the overhead of hiring. We provide white-label development services, acting as your silent technology partner. We build the products; you get the credit. Reliable, high-quality, and strictly confidential.",
    benefits: [
      "Dedicated Team under your brand",
      "Strict NDA Compliance & Intellectual Property",
      "Fixed-price or Retainer-based models",
      "Seamless Communication with your Project Managers"
    ],
    useCases: "Best for marketing and design agencies that need to offer technical execution to their clients.",
    icon: Users,
    image: whiteLabelImg
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    h2: "Ongoing IT Support and Software Maintenance",
    description: "Launch is only the beginning. Our maintenance and support services ensure your technology remains secure, updated, and bug-free. We provide proactive monitoring to catch issues before they affect your users.",
    benefits: [
      "24/7 Proactive Monitoring & Alerts",
      "Regular Security Patches & Updates",
      "Performance Tuning & Scaling",
      "Help Desk Support for Internal Teams"
    ],
    useCases: "Required for mission-critical applications that cannot afford downtime or security vulnerabilities.",
    icon: Wrench,
    image: maintenanceImg
  }
];

const processSteps = [
  { title: "Discover", desc: "We deep-dive into your business goals, target audience, and technical requirements." },
  { title: "Design", desc: "User-centric UI/UX design focused on conversion and intuitive navigation." },
  { title: "Build", desc: "Agile development with regular updates and transparent communication." },
  { title: "Test", desc: "Rigorous QA testing across devices and browsers to ensure perfection." },
  { title: "Launch", desc: "Seamless deployment with zero downtime and full production support." },
  { title: "Support", desc: "Continuous improvement and technical maintenance for long-term growth." }
];

export default function ServicesPage() {
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

        <div className="container relative z-10 text-center mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 hover:bg-primary/20 transition-colors">
              Expert Capabilities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 leading-tight text-slate-900">
              End-to-End <br />
              <span className="text-primary">Software Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-0 leading-relaxed max-w-2xl mx-auto">
              Accelerate your digital transformation with high-performance solutions. We combine speed, enterprise-grade quality, and scalability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-12">
        <div className="container">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-24 items-center`}
              >
                <div className="flex-1 space-y-5">
                  <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {service.h2}
                  </h2>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 shrink-0" size={16} />
                        <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-primary rounded-r-xl">
                    <p className="text-sm text-slate-600 italic">
                      <span className="font-bold text-slate-900 not-italic">Use Case:</span> {service.useCases}
                    </p>
                  </div>
                  <Button className="mt-4 font-semibold group rounded-full" variant="outline">
                    Talk to an Expert <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
                <div className="flex-1 w-full aspect-[4/3] relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200/60 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center">
                    {service.image ? (
                      <div className="absolute inset-0">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <service.icon size={48} className="text-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                        <div className="relative z-10 flex items-center justify-center">
                           <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                           <div className="p-8 rounded-full bg-slate-50 border border-slate-100 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                             <service.icon size={60} className="text-slate-400 group-hover:text-primary transition-colors duration-500" />
                           </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Development Process</h2>
            <p className="text-slate-600">A structured approach to delivery that ensures quality and predictability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-primary font-bold text-4xl mb-4 opacity-20">0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Partner with Raghav Technologies?</h2>
              <div className="space-y-6">
                {[
                  { title: "Experience & Delivery Reliability", text: "Over 5 years of experience delivering 200+ successful projects globally." },
                  { title: "Dedicated Technology Teams", text: "Gain access to senior developers, designers, and project managers." },
                  { title: "Cost Efficiency", text: "Optimized development processes that reduce overhead without sacrificing quality." },
                  { title: "White-Label Readiness", text: "Proven systems for agency partners looking to scale production seamlessly." },
                  { title: "Long-term Partnership Approach", text: "We don't just build; we consult and support your business growth." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg h-fit">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-12 rounded-[2rem] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px]" />
               <div className="grid grid-cols-2 gap-8 relative z-10">
                 <div>
                   <div className="text-4xl font-bold text-primary mb-2">200+</div>
                   <div className="text-slate-400">Projects Delivered</div>
                 </div>
                 <div>
                   <div className="text-4xl font-bold text-primary mb-2">5+</div>
                   <div className="text-slate-400">Years Experience</div>
                 </div>
                 <div>
                   <div className="text-4xl font-bold text-primary mb-2">98%</div>
                   <div className="text-slate-400">Client Retention</div>
                 </div>
                 <div>
                   <div className="text-4xl font-bold text-primary mb-2">24h</div>
                   <div className="text-slate-400">Response Guarantee</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
