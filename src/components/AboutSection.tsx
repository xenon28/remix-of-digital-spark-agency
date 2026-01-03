import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Équipe d'experts certifiés Google & Meta",
  "Approche data-driven et transparente",
  "Stratégies personnalisées à vos objectifs",
  "Support dédié et réactif",
  "Reporting détaillé",
  "Technologies et outils de pointe",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Pourquoi Nous Choisir
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Une agence qui{" "}
              <span className="text-gradient">comprend</span> vos enjeux
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nous accompagnons les entreprises ambitieuses dans leur transformation digitale. Notre approche combine créativité, expertise technique et analyse de données pour des résultats exceptionnels.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Découvrir notre équipe
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="card-glass rounded-3xl p-8 relative z-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Notre <span className="text-gradient">Mission</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Aider les entreprises à atteindre leur plein potentiel digital grâce à des stratégies marketing innovantes et personnalisées.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-2xl p-6 text-center">
                    <div className="text-primary text-3xl mb-2">🎯</div>
                    <div className="text-sm text-muted-foreground">Stratégie sur-mesure</div>
                  </div>
                  <div className="bg-muted/50 rounded-2xl p-6 text-center">
                    <div className="text-secondary text-3xl mb-2">📈</div>
                    <div className="text-sm text-muted-foreground">Croissance durable</div>
                  </div>
                  <div className="bg-muted/50 rounded-2xl p-6 text-center">
                    <div className="text-accent text-3xl mb-2">💡</div>
                    <div className="text-sm text-muted-foreground">Innovation continue</div>
                  </div>
                  <div className="bg-muted/50 rounded-2xl p-6 text-center">
                    <div className="text-primary text-3xl mb-2">🤝</div>
                    <div className="text-sm text-muted-foreground">Partenariat de confiance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-secondary rounded-2xl opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
