import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

import logo from "@assets/ChatGPT_Image_Jan_16,_2026,_05_26_42_PM_1768564612066.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <Link href="/">
              <div className="flex items-center gap-2 mb-6 cursor-pointer">
                <img src={logo} alt="Raghav Technologies Logo" className="h-16 w-auto brightness-0 invert" />
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We build scalable digital solutions for ambitious businesses. 
              Partner with us to transform your ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/raghav-technology" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#odoo-erp" className="hover:text-primary transition-colors cursor-pointer">Odoo / ERP Solutions</Link></li>
              <li><Link href="/services#web-development" className="hover:text-primary transition-colors cursor-pointer">Web Development</Link></li>
              <li><Link href="/services#mobile-apps" className="hover:text-primary transition-colors cursor-pointer">Mobile Apps</Link></li>
              <li><Link href="/services#custom-software" className="hover:text-primary transition-colors cursor-pointer">Custom Software</Link></li>
              <li><Link href="/services#ai-ml" className="hover:text-primary transition-colors cursor-pointer">AI / ML Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</span>
                <span className="text-white">harsh@raghavtechnologies.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</span>
                <span className="text-white">+91 8849660901</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Address</span>
                <span className="text-white">Rajkot, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Raghav Technologies. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by Raghav Technologies Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
