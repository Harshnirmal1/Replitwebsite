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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src={logo} alt="Raghav Technologies Logo" className="h-14 w-auto transition-transform duration-500 group-hover:scale-105" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors relative group",
                location === link.href ? "text-primary" : "text-slate-600 hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                location === link.href && "w-full"
              )} />
            </Link>
          ))}
          <Link href="/contact">
            <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </Link>
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
