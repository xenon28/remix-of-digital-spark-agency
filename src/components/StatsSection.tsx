import { TrendingUp, Users, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "ROI Moyen",
    description: "Retour sur investissement pour nos clients",
  },
  {
    icon: Users,
    value: "150+",
    label: "Clients Actifs",
    description: "Entreprises nous font confiance",
  },
  {
    icon: Award,
    value: "25+",
    label: "Prix & Récompenses",
    description: "Reconnu par l'industrie",
  },
  {
    icon: Globe,
    value: "12M+",
    label: "Impressions/Mois",
    description: "Portée totale de nos campagnes",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nos Résultats
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Des chiffres qui{" "}
            <span className="text-gradient-secondary">parlent</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre succès se mesure par les résultats concrets que nous obtenons pour nos clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
