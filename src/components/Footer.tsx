import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Ticketando",
      links: ["Sobre Nós", "Carreiras", "Imprensa"],
    },
    {
      title: "Suporte",
      links: ["Central de Ajuda", "Fale Conosco", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Termos de Serviço", "Política de Privacidade"],
    },
  ];

  return (
    <footer className="bg-purple-card border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-foreground mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
          <p>© 2024 Ticketando. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
