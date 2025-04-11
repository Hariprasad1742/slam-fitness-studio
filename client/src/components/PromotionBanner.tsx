import { Button } from "@/components/ui/button";

export default function PromotionBanner() {
  return (
    <section className="bg-[#FF0066] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="font-bold text-xl md:text-2xl text-white"></h2>
            <div className="ml-4 bg-white text-[#FF0066] text-xs font-bold px-2 py-1 rounded-md">IND</div>
          </div>
          <p className="text-white font-medium text-center md:text-left mb-4 md:mb-0">
            Special promotion: Join today and get up to 29% off your first month!
          </p>
          <Button
            className="bg-white hover:bg-gray-100 text-[#FF0066] font-semibold"
          >
            CLAIM NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
