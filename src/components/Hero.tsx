import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Seu ingresso para
              <br />
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                momentos
              </span>
              <br />
              inesquecíveis.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Descubra, compre e viva eventos ao vivo sem complicações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg" className="gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="w-5 h-5" />
                Google Play
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-purple opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroPhone}
                alt="TicketWave App"
                className="relative w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
