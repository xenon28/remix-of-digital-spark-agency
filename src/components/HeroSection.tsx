import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Propulsez votre{" "}
            <span className="text-primary">croissance</span>
            {" "}avec le digital
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Stratégies innovantes, résultats mesurables. Nous transformons votre présence en ligne en une machine à générer des leads et des ventes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl">
              Obtenir un audit gratuit
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="heroOutline" size="xl">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
