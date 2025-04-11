import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleNavigation = useCallback((path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      if (location !== "/") {
        window.location.href = path;
      } else {
        scrollToSection(path.substring(2));
      }
    }
  }, [location, scrollToSection]);

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = "/#contact";
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <header className="bg-[#121212] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-bold text-2xl md:text-3xl text-white">
              <span className="text-[#D4AF37]">S</span>LAM
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white font-medium hover:text-[#D4AF37] transition-colors"
              onClick={() => handleNavigation("/")}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white font-medium hover:text-[#D4AF37] transition-colors"
              onClick={() => handleNavigation("/about")}
            >
              About
            </Link>
            <Link 
              href="/#classes" 
              className="text-white font-medium hover:text-[#D4AF37] transition-colors"
              onClick={() => handleNavigation("/#classes")}
            >
              Classes
            </Link>
            <Link 
              href="/#pricing" 
              className="text-white font-medium hover:text-[#D4AF37] transition-colors"
              onClick={() => handleNavigation("/#pricing")}
            >
              Pricing
            </Link>
            <Link 
              href="/#contact" 
              className="text-white font-medium hover:text-[#D4AF37] transition-colors"
              onClick={() => handleNavigation("/#contact")}
            >
              Contact
            </Link>
            <Button 
              className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121212] font-medium"
              onClick={handleBookNow}
            >
              BOOK NOW
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#D4AF37]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-white font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => handleNavigation("/")}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => handleNavigation("/about")}
              >
                About
              </Link>
              <Link 
                href="/#classes" 
                className="text-white font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => handleNavigation("/#classes")}
              >
                Classes
              </Link>
              <Link 
                href="/#pricing" 
                className="text-white font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => handleNavigation("/#pricing")}
              >
                Pricing
              </Link>
              <Link 
                href="/#contact" 
                className="text-white font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => handleNavigation("/#contact")}
              >
                Contact
              </Link>
              <Button 
                className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121212] font-medium w-full mt-2"
                onClick={handleBookNow}
              >
                BOOK NOW
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
