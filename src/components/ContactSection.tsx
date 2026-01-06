import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Prêt à démarrer ?
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transformez votre vision<br />en réalité
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Obtenez un audit gratuit de votre présence digitale et découvrez comment nous pouvons multiplier vos résultats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" className="group">
              Planifier un appel
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Envoyer un message
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 pt-10 border-t border-border">
            <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="text-sm font-semibold text-foreground">contact@nexoria.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Téléphone</div>
                <div className="text-sm font-semibold text-foreground">+32 123 45 67 89</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Adresse</div>
                <div className="text-sm font-semibold text-foreground">Durbuy, Belgique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}