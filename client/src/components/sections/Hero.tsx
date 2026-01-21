import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Mail, Phone, Shield, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Hero = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 overflow-hidden bg-slate-50/50">
      {/* Soft, professional gradient backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] -mr-64 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-16" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto relative z-20 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block">
              <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5 rounded-full font-semibold">
                Trusted by 200+ Global Businesses
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-6 text-slate-900 tracking-tight">
              Enterprise Software & <br />
              <span className="text-primary">
                IT Solutions Provider
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Raghav Technologies delivers high-performance web development, mobile apps, and custom software solutions. We are your trusted partner for Odoo ERP and AI/ML engineering.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-slate-700">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-slate-700">24/7 Global Support</span>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/40 inline-block shadow-sm">
               <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-900">
                 <Shield className="h-4 w-4 text-primary" />
                 Our Commitment
               </h4>
               <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
                 <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary shrink-0" /> Full IP Protection</li>
                 <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary shrink-0" /> Agile & Transparent</li>
               </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl -z-10" />
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's build something great</h3>
                <p className="text-slate-500">Get a free consultation for your project today.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} className="bg-slate-50 border-slate-100 h-14 rounded-2xl px-6 focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email Address" {...field} className="bg-slate-50 border-slate-100 h-14 rounded-2xl px-6 focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Company (Optional)" {...field} className="bg-slate-50 border-slate-100 h-14 rounded-2xl px-6 focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project requirements..." 
                            className="min-h-[140px] bg-slate-50 border-slate-100 rounded-2xl p-6 resize-none focus:ring-primary/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
