import { Search, Share2, PenTool, BarChart3, Target, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & Référencement",
    description: "Dominez les résultats de recherche avec notre stratégie SEO avancée et augmentez votre visibilité organique.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Créez une communauté engagée et développez votre présence sur les réseaux sociaux qui comptent.",
  },
  {
    icon: Target,
    title: "Publicité Digitale",
    description: "Campagnes Google Ads et Meta Ads optimisées pour maximiser votre retour sur investissement.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Contenus stratégiques qui captent l'attention, génèrent du trafic et convertissent vos visiteurs.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    description: "Tableaux de bord personnalisés et analyses approfondies pour des décisions basées sur les données.",
  },
  {
    icon: Zap,
    title: "Growth Hacking",
    description: "Techniques innovantes et expérimentations rapides pour accélérer votre croissance exponentiellement.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Nos Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions complètes pour votre succès digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche 360° du marketing digital pour transformer votre entreprise et atteindre vos objectifs de croissance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-lg border border-border p-8 hover-lift cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
