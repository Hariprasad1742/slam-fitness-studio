import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="w-full h-[500px] md:h-[600px] overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Slam Fitness Studio Interior" 
          className="w-full h-full object-cover filter brightness-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-extrabold text-4xl md:text-6xl mb-4 text-white">
            <span className="text-[#D4AF37]">SLAM</span> FITNESS STUDIO
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
            Build fitness that's good for life with a premium fitness experience
          </p>
          <Button 
            className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#121212] font-semibold py-6 px-8 rounded-md text-lg"
          >
            GET STARTED TODAY
          </Button>
        </div>
      </div>
    </section>
  );
}
