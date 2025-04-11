import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Equipment",
      description: "State-of-the-art fitness equipment to help you achieve your fitness goals efficiently and safely.",
      icon: <Dumbbell className="text-[#121212] h-8 w-8" />
    },
    {
      title: "Expert Trainers",
      description: "Our certified fitness professionals are committed to helping you achieve your personal fitness goals.",
      icon: <Users className="text-[#121212] h-8 w-8" />
    },
    {
      title: "Flexible Hours",
      description: "Open early and late to accommodate your busy schedule, making fitness accessible whenever you need it.",
      icon: <Clock className="text-[#121212] h-8 w-8" />
    }
  ];

  const franchiseFeatures = [
    {
      title: "Comprehensive Training",
      description: "Full support to establish and grow your fitness franchise."
    },
    {
      title: "Established Brand",
      description: "Leverage our recognized brand and proven business model."
    },
    {
      title: "Ongoing Support",
      description: "Marketing, operations, and technical assistance."
    }
  ];

  return (
    <section className="py-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-3">
            WHY <span className="text-[#D4AF37]">CHOOSE US</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#121212] rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center">
            Own A <span className="text-[#D4AF37]">Slam Fitness Studio!</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {franchiseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121212] font-semibold py-6 px-8"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
