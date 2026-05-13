export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre a IZLA</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A IZLA nasceu da união de dois perfis complementares — backend sólido e automação criativa — 
            com o objetivo de entregar soluções digitais que realmente funcionam para quem mais precisa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-8 hover:border-[#7C3AED]/50 hover:shadow-[0_0_24px_rgba(124,58,237,0.15)] transition-all">
            <h3 className="text-xl font-semibold text-white mb-2">Araujo</h3>
            <p className="text-sm text-[#7C3AED] mb-4">Backend, Arquitetura, Banco de Dados, Segurança</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">C#</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">ASP.NET Core</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">PostgreSQL</span>
            </div>
          </div>
          
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-8 hover:border-[#7C3AED]/50 hover:shadow-[0_0_24px_rgba(124,58,237,0.15)] transition-all">
            <h3 className="text-xl font-semibold text-white mb-2">Henrique</h3>
            <p className="text-sm text-[#7C3AED] mb-4">Automação, IA, Frontend visual, Deploy</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Python</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">TypeScript</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">N8N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
