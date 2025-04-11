import { Button } from "@/components/ui/button";

export default function SignatureOfferings() {
  const offerings = [
    {
      title: "GROUP HIIT",
      description: "High-intensity interval training in a motivating group setting. Burn calories and build strength with our professional trainers.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      buttonText: "BOOK CLASS"
    },
    {
      title: "PERSONAL TRAINING",
      description: "One-on-one sessions customized to your goals and needs. Our certified trainers will help you achieve maximum results.",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      buttonText: "BOOK SESSION"
    },
    {
      title: "STRENGTH TRAINING",
      description: "Build muscle, increase metabolism, and improve overall fitness with our comprehensive strength training programs.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      buttonText: "BOOK CLASS"
    }
  ];

  return (
    <section id="classes" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-3">
            <span className="text-[#D4AF37]">SIGNATURE</span> OFFERINGS
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#D4AF37]">{offering.title}</h3>
                <p className="text-gray-300 mb-4">{offering.description}</p>
                <Button 
                  className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121212] font-semibold"
                >
                  {offering.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
