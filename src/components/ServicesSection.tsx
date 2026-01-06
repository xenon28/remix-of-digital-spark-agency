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
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Nos Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Solutions complètes pour<br />votre succès digital
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
              className="group bg-card rounded-xl border border-border p-8 hover-lift cursor-pointer hover:border-primary/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}