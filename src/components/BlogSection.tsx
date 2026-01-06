import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos derniers articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos analyses et conseils sur le marketing digital et l'intelligence artificielle.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog/outils-ia-marketing-2026" 
            className="group block bg-background rounded-xl border border-border p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    IA & Marketing
                  </span>
                  <span className="text-xs text-muted-foreground">
                    2026
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Les 5 outils IA en marketing digital indispensables en 2026
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Découvrez les outils d'intelligence artificielle qui transforment le marketing digital : Jasper AI, Ubersuggest, Kling, Lovable et Nano Banana.
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
