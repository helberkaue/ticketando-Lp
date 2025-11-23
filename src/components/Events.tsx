import { Button } from "@/components/ui/button";
import eventIndie from "@/assets/event-indie.png";
import eventRave from "@/assets/event-rave.png";
import { Calendar } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Indie Fest 2024",
      date: "15 Ago - Parque do Ibirapuera",
      image: eventIndie,
    },
    {
      id: 2,
      title: "Rave Night",
      date: "18 Ago - Allianz Park",
      image: eventRave,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Em Alta Agora</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <Button variant="premium" className="w-full">
                  Comprar Ingressos
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
