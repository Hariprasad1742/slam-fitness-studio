import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-2xl text-white mb-4">
              <span className="text-[#D4AF37]">S</span>LAM
            </h3>
            <p className="text-gray-400 mb-4">Premium fitness studio dedicated to transforming lives through expert training and state-of-the-art facilities.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Classes</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Membership</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Classes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Group HIIT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Strength Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">CrossFit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Yoga</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-[#D4AF37] mt-1 mr-3 h-5 w-5" />
                <span className="text-gray-400">123 Fitness Avenue, Workout City, WC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#D4AF37] mr-3 h-5 w-5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#D4AF37] mr-3 h-5 w-5" />
                <span className="text-gray-400">info@slamfitness.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} SLAM Fitness Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
