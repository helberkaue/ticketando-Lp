import { Search, ShieldCheck, QrCode } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Descubra Eventos",
      description: "Encontre os melhores shows perto de você com nossa busca inteligente.",
    },
    {
      icon: ShieldCheck,
      title: "Compre com Segurança",
      description: "Adquira seus ingressos com nosso sistema de pagamento seguro.",
    },
    {
      icon: QrCode,
      title: "Escaneie seu QR Code",
      description: "Apresente seus ingressos digitais de forma rápida e fácil.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simples, Rápido, Seguro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprar ingressos nunca foi tão fácil. Siga estes passos simples para começar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-purple p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
