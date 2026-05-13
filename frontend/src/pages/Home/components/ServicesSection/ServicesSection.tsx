export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Soluções digitais que transformam operações desorganizadas em sistemas eficientes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card placeholders */}
          {[
            { title: "Automação de Processos", desc: "Integrações e fluxos N8N" },
            { title: "Dashboards Empresariais", desc: "Painéis de métricas e analytics" },
            { title: "Sistemas Modernos", desc: "Plataformas web sob medida" },
            { title: "IA Aplicada", desc: "Modelos de linguagem no seu negócio" }
          ].map((srv, idx) => (
            <div key={idx} className="bg-[#1E293B] border border-white/10 rounded-2xl p-6 hover:border-[#7C3AED]/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-white/5 rounded-lg mb-6 flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
                <div className="w-6 h-6 bg-[#7C3AED] rounded-full opacity-50 blur-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{srv.title}</h3>
              <p className="text-slate-400 text-sm">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
