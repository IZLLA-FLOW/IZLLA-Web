export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-20 animate-pulse"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          Sistemas que trabalham <br className="hidden md:block"/> por você.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Automação, dashboards e sistemas modernos para empresas que querem crescer sem caos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contato" 
            className="px-8 py-4 rounded-lg font-medium text-white bg-[image:var(--gradient-cta)] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all w-full sm:w-auto"
          >
            Falar com a IZLLA
          </a>
          <a 
            href="#projetos" 
            className="px-8 py-4 rounded-lg font-medium text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all w-full sm:w-auto"
          >
            Ver nosso trabalho
          </a>
        </div>
      </div>
    </section>
  );
}
