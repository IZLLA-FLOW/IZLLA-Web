export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Demonstração das nossas capacidades técnicas aplicadas a negócios reais.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Dashboard Empresarial", desc: "Analytics, métricas, admin" },
            { title: "Automação WhatsApp", desc: "Lead management, fluxo automático" },
            { title: "E-Shop", desc: "Vitrine digital, checkout, catálogo" }
          ].map((proj, idx) => (
            <div key={idx} className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7C3AED]/50 transition-all group">
              <div className="h-48 bg-white/5 relative flex items-center justify-center">
                <span className="text-slate-500 text-sm font-medium">Screenshot Placeholder</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-[#7C3AED] uppercase tracking-wider mb-2 block">Conceito para Demonstração</span>
                <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{proj.desc}</p>
                <button className="text-sm font-medium text-white hover:text-[#7C3AED] transition-colors">
                  Ver detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
