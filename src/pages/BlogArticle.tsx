import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

// Import images
import mckinseyGraph from "@/assets/mckinsey-graph.png";
import jasperScreenshot from "@/assets/jasper-screenshot.png";
import ubersuggestScreenshot from "@/assets/ubersuggest-screenshot.png";
import nanoBananaScreenshot from "@/assets/nanobanana-screenshot.png";
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
  const [isLightMode, setIsLightMode] = useState(false);

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
    <div className={`min-h-screen ${isLightMode ? 'bg-white' : 'bg-background'}`}>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <header className={`border-b ${isLightMode ? 'border-gray-200 bg-gray-50' : 'border-border bg-card/50'}`}>
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/" 
                className={`inline-flex items-center gap-2 transition-colors group ${isLightMode ? 'text-gray-600 hover:text-blue-600' : 'text-muted-foreground hover:text-primary'}`}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour à l'accueil
              </Link>
              
              {/* Light/Dark Mode Switch */}
              <div className={`flex items-center gap-3 px-4 py-2 rounded-full ${isLightMode ? 'bg-gray-200' : 'bg-card border border-border'}`}>
                <Moon className={`w-4 h-4 ${isLightMode ? 'text-gray-400' : 'text-primary'}`} />
                <Switch 
                  checked={isLightMode} 
                  onCheckedChange={setIsLightMode}
                  className="data-[state=checked]:bg-blue-500"
                />
                <Sun className={`w-4 h-4 ${isLightMode ? 'text-yellow-500' : 'text-gray-400'}`} />
              </div>
            </div>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${isLightMode ? 'text-blue-600 bg-blue-100' : 'text-primary bg-primary/10'}`}>
                  Marketing Digital
                </span>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${isLightMode ? 'text-blue-600 bg-blue-100' : 'text-primary bg-primary/10'}`}>
                  IA
                </span>
                <span className={`text-xs ${isLightMode ? 'text-gray-500' : 'text-muted-foreground'}`}>
                  2026
                </span>
              </div>
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
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
              <nav className={`lg:sticky lg:top-24 p-6 rounded-xl border ${isLightMode ? 'bg-gray-50 border-gray-200' : 'bg-card border-border'}`}>
                <p className={`text-sm font-bold mb-6 uppercase tracking-wider ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                  Sommaire
                </p>
                <ul className="space-y-1">
                  {tableOfContents.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`text-left w-full px-4 py-2.5 rounded-lg text-sm transition-all ${
                          activeSection === id
                            ? isLightMode
                              ? "bg-blue-100 text-blue-600 font-semibold border-l-2 border-blue-600"
                              : "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                            : isLightMode
                              ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>Introduction</h2>
                  <p className={`leading-relaxed mb-6 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    Selon les rapports{" "}
                    <a 
                      href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}
                    >
                      McKinsey
                    </a>{" "}
                    & Global Reports, le taux d'adoption de l'intelligence artificielle (IA) par les entreprises est passé d'environ 20 % en 2020 à près de 78 % en 2025. Cette augmentation de plus de 50 % en cinq ans souligne le rôle stratégique désormais accordé à l'IA, tant dans le monde actuel que dans celui de demain. De nombreux domaines d'activité sont concernés par ces transformations majeures, notamment le marketing digital.
                  </p>
                  
                  {/* McKinsey Graph */}
                  <div className="my-8 rounded-xl overflow-hidden border border-border">
                    <img 
                      src={mckinseyGraph} 
                      alt="Graphique McKinsey sur l'adoption de l'IA en entreprise" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <p className={`leading-relaxed text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    Dans ce contexte, les outils d'IA appliqués au marketing digital permettent notamment : un ciblage publicitaire plus précis, la détection des tendances en temps réel, l'automatisation du support client via des chatbots, ainsi que la génération de contenus (textes, images et vidéos). Parmi les outils incontournables en 2026 figurent :{" "}
                    <a href="https://www.jasper.ai" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Jasper AI</a>,{" "}
                    <a href="https://neilpatel.com/ubersuggest/" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Ubersuggest</a>,{" "}
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Kling</a>,{" "}
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Lovable</a> et{" "}
                    <a href="https://nanobanana.im" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Nano Banana</a>.
                  </p>
                </section>

                {/* 1. Jasper AI */}
                <section id="jasper-ai" className="mb-16 scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                    1. Jasper AI – La révolution de la création de contenu
                  </h2>
                  <p className={`leading-relaxed mb-8 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    Pensé et conçu pour les marketeurs,{" "}
                    <a href="https://www.jasper.ai" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Jasper AI</a>{" "}
                    est un outil de génération de contenu personnalisé par IA. Il s'appuie sur le ton de marque, le style rédactionnel et les informations propres à chaque entreprise.
                  </p>
                  
                  {/* Jasper Screenshot */}
                  <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg">
                    <img 
                      src={jasperScreenshot} 
                      alt="Interface Jasper AI" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className={`rounded-xl p-6 mb-6 ${isLightMode ? 'bg-green-50 border border-green-200' : 'bg-primary/5 border border-primary/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-green-500' : 'bg-primary'}`}></span>
                      Avantages
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Gain de temps : génération d'une campagne complète en quelques clics.</li>
                      <li>Voix de marque personnalisée avec plus de 40 formats de contenu.</li>
                      <li>Intégration d'un vérificateur de plagiat.</li>
                    </ul>
                  </div>
                  
                  <div className={`rounded-xl p-6 ${isLightMode ? 'bg-red-50 border border-red-200' : 'bg-destructive/5 border border-destructive/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-red-500' : 'bg-destructive'}`}></span>
                      Inconvénients
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Coût de l'abonnement relativement élevé (environ 69 € par utilisateur et par mois).</li>
                    </ul>
                  </div>
                </section>

                {/* 2. Ubersuggest */}
                <section id="ubersuggest" className="mb-16 scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                    2. Ubersuggest – Analyse et optimisation SEO / SEM
                  </h2>
                  <p className={`leading-relaxed mb-8 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    <a href="https://neilpatel.com/ubersuggest/" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Ubersuggest</a>{" "}
                    est un outil d'assistance à la stratégie de référencement naturel et payant. Il aide à améliorer la visibilité des sites web sur les moteurs de recherche grâce à l'analyse de mots-clés et à l'étude concurrentielle.
                  </p>
                  
                  {/* Ubersuggest Screenshot */}
                  <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg">
                    <img 
                      src={ubersuggestScreenshot} 
                      alt="Interface Ubersuggest" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className={`rounded-xl p-6 mb-6 ${isLightMode ? 'bg-green-50 border border-green-200' : 'bg-primary/5 border border-primary/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-green-500' : 'bg-primary'}`}></span>
                      Avantages
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Identification de mots-clés pertinents selon le volume et la concurrence.</li>
                      <li>Analyse des stratégies SEO des concurrents.</li>
                      <li>Suivi des performances des actions mises en place.</li>
                    </ul>
                  </div>
                  
                  <div className={`rounded-xl p-6 ${isLightMode ? 'bg-red-50 border border-red-200' : 'bg-destructive/5 border border-destructive/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-red-500' : 'bg-destructive'}`}></span>
                      Inconvénients
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Données moins approfondies que certains outils SEO concurrents.</li>
                    </ul>
                  </div>
                </section>

                {/* 3. Kling */}
                <section id="kling" className="mb-16 scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                    3. Kling – IA générative vidéo et multimodale
                  </h2>
                  <p className={`leading-relaxed mb-8 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Kling</a>{" "}
                    permet de générer des vidéos à partir de textes, d'images ou d'autres vidéos. Il s'adresse particulièrement aux créateurs de contenus vidéo et aux marketeurs.
                  </p>
                  
                  {/* Kling Video */}
                  <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/TuFqvD6PR54?start=18"
                      title="Kling AI Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  <div className={`rounded-xl p-6 mb-6 ${isLightMode ? 'bg-green-50 border border-green-200' : 'bg-primary/5 border border-primary/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-green-500' : 'bg-primary'}`}></span>
                      Avantages
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Création rapide de vidéos de haute qualité.</li>
                      <li>Interface simple, accessible et compatible mobile.</li>
                      <li>Rendus visuels fluides et cohérents.</li>
                    </ul>
                  </div>
                  
                  <div className={`rounded-xl p-6 ${isLightMode ? 'bg-red-50 border border-red-200' : 'bg-destructive/5 border border-destructive/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-red-500' : 'bg-destructive'}`}></span>
                      Inconvénients
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Peu adapté à la création de vidéos longues (au-delà de 10 secondes).</li>
                    </ul>
                  </div>
                </section>

                {/* 4. Lovable */}
                <section id="lovable" className="mb-16 scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                    4. Lovable – Création de sites web par prompting
                  </h2>
                  <p className={`leading-relaxed mb-8 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Lovable</a>{" "}
                    est une plateforme no-code permettant de créer rapidement des sites web ou applications via une interface conversationnelle, idéale pour le prototypage rapide.
                  </p>
                  
                  {/* Lovable Video */}
                  <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/xDwR1_vrIg8"
                      title="Lovable Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  <div className={`rounded-xl p-6 mb-6 ${isLightMode ? 'bg-green-50 border border-green-200' : 'bg-primary/5 border border-primary/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-green-500' : 'bg-primary'}`}></span>
                      Avantages
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Lancement rapide de campagnes avec A/B testing à moindre coût.</li>
                      <li>Modifications instantanées selon les retours utilisateurs.</li>
                      <li>Intégration avec des outils tiers (CRM, analytics).</li>
                    </ul>
                  </div>
                  
                  <div className={`rounded-xl p-6 ${isLightMode ? 'bg-red-50 border border-red-200' : 'bg-destructive/5 border border-destructive/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-red-500' : 'bg-destructive'}`}></span>
                      Inconvénients
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Limites de flexibilité pour des fonctionnalités très complexes ou sur mesure.</li>
                    </ul>
                  </div>
                </section>

                {/* 5. Nano Banana */}
                <section id="nano-banana" className="mb-16 scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                    5. Nano Banana – Génération d'images par IA
                  </h2>
                  <p className={`leading-relaxed mb-8 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    Inclus dans l'écosystème Gemini,{" "}
                    <a href="https://nanobanana.im" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}>Nano Banana</a>{" "}
                    est un outil de génération d'images basé sur le modèle Gemini 3 Pro, destiné aux professionnels du marketing et du design.
                  </p>
                  
                  {/* Nano Banana Screenshot */}
                  <div className="my-8 rounded-xl overflow-hidden border border-border shadow-lg">
                    <img 
                      src={nanoBananaScreenshot} 
                      alt="Interface Nano Banana" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className={`rounded-xl p-6 mb-6 ${isLightMode ? 'bg-green-50 border border-green-200' : 'bg-primary/5 border border-primary/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-green-500' : 'bg-primary'}`}></span>
                      Avantages
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Production d'images exploitables pour un usage professionnel.</li>
                      <li>Excellente intégration de texte cohérent dans les visuels.</li>
                      <li>Interprétation précise des instructions textuelles.</li>
                    </ul>
                  </div>
                  
                  <div className={`rounded-xl p-6 ${isLightMode ? 'bg-red-50 border border-red-200' : 'bg-destructive/5 border border-destructive/20'}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                      <span className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-red-500' : 'bg-destructive'}`}></span>
                      Inconvénients
                    </h3>
                    <ul className={`list-disc list-inside space-y-3 ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                      <li>Contrôle limité sur les réglages avancés (dimensions, styles personnalisés).</li>
                    </ul>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16 scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                    FAQ – Questions fréquentes sur l'IA marketing en 2026
                  </h2>
                  
                  <div className="space-y-6">
                    <div className={`rounded-xl p-6 ${isLightMode ? 'border border-gray-200 bg-gray-50' : 'border border-border bg-card'}`}>
                      <h3 className={`text-lg font-bold mb-4 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                        Quel budget prévoir pour utiliser des outils d'IA en marketing digital ?
                      </h3>
                      <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                        Les budgets varient fortement selon les outils et les usages. Certaines solutions proposent des versions gratuites ou freemium, tandis que des outils avancés peuvent coûter plusieurs dizaines d'euros par mois et par utilisateur.
                      </p>
                    </div>
                    
                    <div className={`rounded-xl p-6 ${isLightMode ? 'border border-gray-200 bg-gray-50' : 'border border-border bg-card'}`}>
                      <h3 className={`text-lg font-bold mb-4 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                        L'IA va-t-elle remplacer les marketeurs ?
                      </h3>
                      <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                        Non. L'IA agit principalement comme un levier d'augmentation des capacités humaines. Les compétences stratégiques, créatives et analytiques restent essentielles.
                      </p>
                    </div>
                    
                    <div className={`rounded-xl p-6 ${isLightMode ? 'border border-gray-200 bg-gray-50' : 'border border-border bg-card'}`}>
                      <h3 className={`text-lg font-bold mb-4 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>
                        Comment former ses équipes à l'IA marketing ?
                      </h3>
                      <p className={`leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                        La formation peut passer par des ateliers internes, des formations en ligne, et une phase d'expérimentation progressive sur des projets concrets.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="scroll-mt-24">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-foreground'}`}>Conclusion</h2>
                  <p className={`leading-relaxed mb-6 text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    L'essor rapide de l'intelligence artificielle transforme durablement le marketing digital. L'adoption d'outils performants permet aux entreprises de gagner en agilité, en efficacité et en pertinence dans leurs actions marketing.
                  </p>
                  <p className={`leading-relaxed text-lg ${isLightMode ? 'text-gray-700' : 'text-muted-foreground'}`}>
                    Pour tirer pleinement parti de ces évolutions, il est essentiel de{" "}
                    <a 
                      href="/#formation" 
                      className={`font-medium hover:underline ${isLightMode ? 'text-blue-600' : 'text-primary'}`}
                    >
                      former les équipes
                    </a>, de tester les solutions adaptées à chaque contexte et de combiner la puissance de l'IA avec l'expertise humaine. L'avenir du marketing digital sera celui d'une collaboration intelligente entre l'homme et la machine.
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
