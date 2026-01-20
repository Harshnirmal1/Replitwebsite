import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Check, Shield } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
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
    <section id="contact" className="py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-slate-50/80 rounded-l-[100px] hidden md:block" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1">Contact</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-slate-900 leading-tight">
              Let's build something <br />
              <span className="text-primary">great together</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-semibold text-slate-700">harsh@raghavtechnologies.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                  <p className="text-sm font-semibold text-slate-700">+91 8849660901</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 inline-block">
               <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-900">
                 <Shield className="h-4 w-4 text-primary" />
                 Our Commitment
               </h4>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary shrink-0" /> Full IP Protection & NDA</li>
                 <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary shrink-0" /> Agile & Transparent Pricing</li>
               </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-secondary/20 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="bg-secondary/20 h-12" />
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
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." {...field} className="bg-secondary/20 h-12" />
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
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project requirements..." 
                          className="min-h-[120px] bg-secondary/20 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
