import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Prêt à démarrer ?
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transformez votre vision en réalité
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Obtenez un audit gratuit de votre présence digitale et découvrez comment nous pouvons multiplier vos résultats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Planifier un appel
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Envoyer un message
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium text-foreground">contact@nexoria.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Téléphone</div>
                <div className="text-sm font-medium text-foreground">+32 123 45 67 89</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Adresse</div>
                <div className="text-sm font-medium text-foreground">Durbuy, Belgique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
