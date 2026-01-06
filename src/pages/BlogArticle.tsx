import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const tableOfContents = [
  { id: "introduction", label: "Introduction" },
  { id: "jasper-ai", label: "1. Jasper AI" },
  { id: "ubersuggest", label: "2. Ubersuggest" },
  { id: "kling", label: "3. Kling" },
  { id: "lovable", label: "4. Lovable" },
  { id: "nano-banana", label: "5. Nano Banana" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

export default function BlogArticle() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <header className="border-b border-border bg-card/50">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  Marketing Digital
                </span>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  IA
                </span>
                <span className="text-xs text-muted-foreground">
                  2026
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Les 5 outils IA en marketing digital indispensables en 2026
              </h1>
            </div>
          </div>
        </header>

        {/* Content with Sidebar */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <nav className="lg:sticky lg:top-24 p-6 rounded-xl bg-card border border-border">
                <p className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
                  Sommaire
                </p>
                <ul className="space-y-1">
                  {tableOfContents.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`text-left w-full px-4 py-2.5 rounded-lg text-sm transition-all ${
                          activeSection === id
                            ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Article Content */}
            <article className="flex-1 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    Selon les rapports{" "}
                    <a 
                      href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      McKinsey
                    </a>{" "}
                    & Global Reports, le taux d'adoption de l'intelligence artificielle (IA) par les entreprises est passé d'environ 20 % en 2020 à près de 78 % en 2025. Cette augmentation de plus de 50 % en cinq ans souligne le rôle stratégique désormais accordé à l'IA, tant dans le monde actuel que dans celui de demain. De nombreux domaines d'activité sont concernés par ces transformations majeures, notamment le marketing digital.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Dans ce contexte, les outils d'IA appliqués au marketing digital permettent notamment : un ciblage publicitaire plus précis, la détection des tendances en temps réel, l'automatisation du support client via des chatbots, ainsi que la génération de contenus (textes, images et vidéos). Parmi les outils incontournables en 2026 figurent :{" "}
                    <a href="https://www.jasper.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Jasper AI</a>,{" "}
                    <a href="https://neilpatel.com/ubersuggest/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Ubersuggest</a>,{" "}
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Kling</a>,{" "}
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Lovable</a> et{" "}
                    <a href="https://nanobanana.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Nano Banana</a>.
                  </p>
                </section>

                {/* 1. Jasper AI */}
                <section id="jasper-ai" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    1. Jasper AI – La révolution de la création de contenu
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    Pensé et conçu pour les marketeurs,{" "}
                    <a href="https://www.jasper.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Jasper AI</a>{" "}
                    est un outil de génération de contenu personnalisé par IA. Il s'appuie sur le ton de marque, le style rédactionnel et les informations propres à chaque entreprise.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Avantages
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Gain de temps : génération d'une campagne complète en quelques clics.</li>
                      <li>Voix de marque personnalisée avec plus de 40 formats de contenu.</li>
                      <li>Intégration d'un vérificateur de plagiat.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive"></span>
                      Inconvénients
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Coût de l'abonnement relativement élevé (environ 69 € par utilisateur et par mois).</li>
                    </ol>
                  </div>
                </section>

                {/* 2. Ubersuggest */}
                <section id="ubersuggest" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    2. Ubersuggest – Analyse et optimisation SEO / SEM
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    <a href="https://neilpatel.com/ubersuggest/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Ubersuggest</a>{" "}
                    est un outil d'assistance à la stratégie de référencement naturel et payant. Il aide à améliorer la visibilité des sites web sur les moteurs de recherche grâce à l'analyse de mots-clés et à l'étude concurrentielle.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Avantages
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Identification de mots-clés pertinents selon le volume et la concurrence.</li>
                      <li>Analyse des stratégies SEO des concurrents.</li>
                      <li>Suivi des performances des actions mises en place.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive"></span>
                      Inconvénients
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Données moins approfondies que certains outils SEO concurrents.</li>
                    </ol>
                  </div>
                </section>

                {/* 3. Kling */}
                <section id="kling" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    3. Kling – IA générative vidéo et multimodale
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Kling</a>{" "}
                    permet de générer des vidéos à partir de textes, d'images ou d'autres vidéos. Il s'adresse particulièrement aux créateurs de contenus vidéo et aux marketeurs.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Avantages
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Création rapide de vidéos de haute qualité.</li>
                      <li>Interface simple, accessible et compatible mobile.</li>
                      <li>Rendus visuels fluides et cohérents.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive"></span>
                      Inconvénients
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Peu adapté à la création de vidéos longues (au-delà de 10 secondes).</li>
                    </ol>
                  </div>
                </section>

                {/* 4. Lovable */}
                <section id="lovable" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    4. Lovable – Création de sites web par prompting
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Lovable</a>{" "}
                    est une plateforme no-code permettant de créer rapidement des sites web ou applications via une interface conversationnelle, idéale pour le prototypage rapide.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Avantages
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Lancement rapide de campagnes avec A/B testing à moindre coût.</li>
                      <li>Modifications instantanées selon les retours utilisateurs.</li>
                      <li>Intégration avec des outils tiers (CRM, analytics).</li>
                    </ol>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive"></span>
                      Inconvénients
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Limites de flexibilité pour des fonctionnalités très complexes ou sur mesure.</li>
                    </ol>
                  </div>
                </section>

                {/* 5. Nano Banana */}
                <section id="nano-banana" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    5. Nano Banana – Génération d'images par IA
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    Inclus dans l'écosystème Gemini,{" "}
                    <a href="https://nanobanana.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Nano Banana</a>{" "}
                    est un outil de génération d'images basé sur le modèle Gemini 3 Pro, destiné aux professionnels du marketing et du design.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Avantages
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Production d'images exploitables pour un usage professionnel.</li>
                      <li>Excellente intégration de texte cohérent dans les visuels.</li>
                      <li>Interprétation précise des instructions textuelles.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive"></span>
                      Inconvénients
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                      <li>Contrôle limité sur les réglages avancés (dimensions, styles personnalisés).</li>
                    </ol>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    FAQ – Questions fréquentes sur l'IA marketing en 2026
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-xl p-6 bg-card">
                      <h3 className="text-lg font-bold text-foreground mb-4">
                        Quel budget prévoir pour utiliser des outils d'IA en marketing digital ?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Les budgets varient fortement selon les outils et les usages. Certaines solutions proposent des versions gratuites ou freemium, tandis que des outils avancés peuvent coûter plusieurs dizaines d'euros par mois et par utilisateur.
                      </p>
                    </div>
                    
                    <div className="border border-border rounded-xl p-6 bg-card">
                      <h3 className="text-lg font-bold text-foreground mb-4">
                        L'IA va-t-elle remplacer les marketeurs ?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Non. L'IA agit principalement comme un levier d'augmentation des capacités humaines. Les compétences stratégiques, créatives et analytiques restent essentielles.
                      </p>
                    </div>
                    
                    <div className="border border-border rounded-xl p-6 bg-card">
                      <h3 className="text-lg font-bold text-foreground mb-4">
                        Comment former ses équipes à l'IA marketing ?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        La formation peut passer par des ateliers internes, des formations en ligne, et une phase d'expérimentation progressive sur des projets concrets.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Conclusion</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    L'essor rapide de l'intelligence artificielle transforme durablement le marketing digital. L'adoption d'outils performants permet aux entreprises de gagner en agilité, en efficacité et en pertinence dans leurs actions marketing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Pour tirer pleinement parti de ces évolutions, il est essentiel de former les équipes, de tester les solutions adaptées à chaque contexte et de combiner la puissance de l'IA avec l'expertise humaine. L'avenir du marketing digital sera celui d'une collaboration intelligente entre l'homme et la machine.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}