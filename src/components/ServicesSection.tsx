import { Search, Share2, PenTool, BarChart3, Target, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & Référencement",
    description: "Dominez les résultats de recherche avec notre stratégie SEO avancée et augmentez votre visibilité organique.",
    color: "from-primary to-accent",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Créez une communauté engagée et développez votre présence sur les réseaux sociaux qui comptent.",
    color: "from-secondary to-primary",
  },
  {
    icon: Target,
    title: "Publicité Digitale",
    description: "Campagnes Google Ads et Meta Ads optimisées pour maximiser votre retour sur investissement.",
    color: "from-accent to-secondary",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Contenus stratégiques qui captent l'attention, génèrent du trafic et convertissent vos visiteurs.",
    color: "from-primary to-secondary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    description: "Tableaux de bord personnalisés et analyses approfondies pour des décisions basées sur les données.",
    color: "from-secondary to-accent",
  },
  {
    icon: Zap,
    title: "Growth Hacking",
    description: "Techniques innovantes et expérimentations rapides pour accélérer votre croissance exponentiellement.",
    color: "from-accent to-primary",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Solutions complètes pour votre{" "}
            <span className="text-gradient">succès digital</span>
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
              className="group card-glass rounded-2xl p-8 hover-lift cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">En savoir plus</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
