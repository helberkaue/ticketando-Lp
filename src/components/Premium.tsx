import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Premium = () => {
  const benefits = [
    "Desbloque benefícios exclusivos",
    "Acesso antecipado a ingressos",
    "Taxas de conveniência zero",
    "Ofertas exclusivas de parceiros",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-purple rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-purple-neon/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Seja Premium com
            <br />
            Ticketando+
          </h2>
          <div className="space-y-4 mb-8 max-w-md mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-purple-neon hover:bg-white/90 border-0 font-semibold text-lg px-12"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Premium;
