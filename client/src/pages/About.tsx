import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#121212] text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            ABOUT <span className="text-[#D4AF37]">HARI PRASAD M</span> 
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card Template */}
          {cardData.map((card, index) => (
            <div key={index} className="transition-all duration-300">
              <Card className="bg-[#1E1E1E] border-none text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 rounded-lg overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37]">{card.title}</CardTitle>
                  <CardDescription className="text-gray-300">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>{card.content}</CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "Professional Profile",
    description: "Masters in AI/ML",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-white">Hari prasad</h3>
          <p className="text-gray-300">Coimbatore Institute of Technology</p>
        </div>
        <div>
          <h4 className="font-medium text-white">Certifications</h4>
          <ul className="list-disc list-inside text-gray-300 ml-2">
            <li>Google DSC Summer Hackathon - Winner (2023)</li>
            <li>Nexus 24 National Level Hackathon - Finalist (2024) </li>
            <li>Cyber Security and Privacy (NPTEL) - Certified (2024)</li>
            <li>Typewriting (Both junior and senior level) in English and Tamil
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Projects",
    description: "AI-Powered Real-World Solutions",
    content: (
      <div className="space-y-4 text-gray-300">
        <div>
          <h4 className="font-medium text-white">Agriculture Advisory System</h4>
          <ul className="list-disc list-inside ml-2">
            <li>Boosted farm yield by 15% using AI-powered advisory integrating weather, soil, and crop pricing.</li>
            <li>Used RAG with LLaMA 3.1 70B for 40% faster insights.</li>
            <li><strong>Tools:</strong> Python, ML, Weather APIs, GroqAPI, RAG</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-white">SafeHaven</h4>
          <ul className="list-disc list-inside ml-2">
            <li>Cut emergency response time by 35% using real-time incident reporting.</li>
            <li>Built resource & volunteer modules improving allocation by 40%.</li>
            <li>Live dashboard & alerts enhanced crisis management efficiency.</li>
            <li><strong>Tools:</strong> React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Vite</li>
          </ul>
        </div>
      </div>
    ),
  }
  ,
  {
    title: "Technical Skills",
    description: "Tools & Technologies I Work With",
    content: (
      <div className="space-y-2 text-gray-300">
        <p><strong className="text-white">Languages:</strong> Python, C, Java, JavaScript, SQL</p>
        <p><strong className="text-white">ML/AI:</strong> Scikit-learn, TensorFlow, Ollama, RAG</p>
        <p><strong className="text-white">Databases/Cloud:</strong> MySQL, MongoDB, AWS</p>
        <p><strong className="text-white">Visualization:</strong> Power BI, Matplotlib, Seaborn</p>
        <p><strong className="text-white">Development Tools:</strong> Docker (Basic), Git, VMs</p>
        <p><strong className="text-white">Soft Skills:</strong> Communication, Problem Solving, Teamwork</p>
      </div>
    ),
  }
  ,
  {
    title: "Contact Details",
    description: "Let's get in touch",
    content: (
      <div className="space-y-3 text-gray-300">
        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#D4AF37]" /> hariprasad1742@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#D4AF37]" /> 9597372357
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#D4AF37]" /> Coimbatore-641045        </p>
        <p className="pt-2">
         Interests in Artificial Intelligence and Software Development
        </p>
      </div>
    ),
  },
];