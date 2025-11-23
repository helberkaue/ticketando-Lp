import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-purple p-2 rounded-lg">
            <Ticket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">Ticketando</span>
        </div>
        <Button variant="premium" size="sm">
          Baixe o App
        </Button>
      </div>
    </header>
  );
};

export default Header;
