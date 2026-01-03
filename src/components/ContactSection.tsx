import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="card-glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Prêt à démarrer ?
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Transformez votre{" "}
                <span className="text-gradient">vision</span> en réalité
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Obtenez un audit gratuit de votre présence digitale et découvrez comment nous pouvons multiplier vos résultats.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button variant="hero" size="xl">
                  Planifier un appel
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Envoyer un message
                </Button>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
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
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Téléphone</div>
                    <div className="text-sm font-medium text-foreground">+32 123 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Adresse</div>
                    <div className="text-sm font-medium text-foreground">Durbuy, Belgique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
