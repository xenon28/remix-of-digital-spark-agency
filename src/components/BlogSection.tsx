import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Blog
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nos derniers articles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos analyses et conseils sur le marketing digital et l'intelligence artificielle.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog/outils-ia-marketing-2026" 
            className="group block bg-card rounded-xl border border-border p-8 hover:border-primary/50 hover-lift transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    IA & Marketing
                  </span>
                  <span className="text-xs text-muted-foreground">
                    2026
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Digital marketing : c'est quoi les 5 outils IA indispensable en 2026
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Découvrez les outils d'intelligence artificielle qui transforment le marketing digital : Jasper AI, Ubersuggest, Kling, Lovable et Nano Banana.
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}