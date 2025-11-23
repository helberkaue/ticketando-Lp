import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lucas Johnson",
      role: "Amante de Música",
      content:
        "O Ticketando é revolucionário! O app é muito fácil de usar e encontrei ingressos para um show esgotado. Perfeita!",
      avatar: "LJ",
    },
    {
      id: 2,
      name: "Maria Silva",
      role: "Fã de Festivais",
      content:
        "Nunca foi tão fácil comprar ingressos! O processo é super rápido e o QR code digital facilita muito na entrada.",
      avatar: "MS",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          O Que Nossos Usuários Dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <p className="text-lg mb-6 italic text-muted-foreground">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary">
                  <AvatarFallback className="bg-gradient-purple text-white font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
