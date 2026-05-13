export function TechSection() {
  return (
    <section id="tecnologias" className="py-24 bg-[#1E293B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Nossa Stack Tecnológica</h2>
          <p className="text-slate-400">Ferramentas modernas para sistemas de alta performance.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
          {["React", "TypeScript", "C#", "Python", "PostgreSQL", "TailwindCSS", "N8N"].map((tech, idx) => (
            <div key={idx} className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
