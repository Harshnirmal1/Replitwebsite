import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logo from "@assets/ChatGPT_Image_Jan_16,_2026,_05_26_42_PM_1768564612066.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-[1200px] rounded-full",
        scrolled ? "bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/40 py-2 px-6" : "bg-transparent py-4 px-2"
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src={logo} alt="Raghav Technologies Logo" className="h-12 w-auto transition-transform duration-500 group-hover:scale-110" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full",
                location === link.href ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-slate-200">
            <Link href="/contact">
              <Button className="rounded-full px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg shadow-slate-900/10">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b overflow-hidden"
          >
            <div className="container mx-auto py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4">Talk to Us</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
