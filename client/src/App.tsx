import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import WhyUsPage from "@/pages/WhyUs";
import SuccessStoriesPage from "@/pages/SuccessStories";
import AboutUsPage from "@/pages/AboutUs";
import ContactPage from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918849660901"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/why-us" component={WhyUsPage} />
      <Route path="/success-stories" component={SuccessStoriesPage} />
      <Route path="/about" component={AboutUsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
