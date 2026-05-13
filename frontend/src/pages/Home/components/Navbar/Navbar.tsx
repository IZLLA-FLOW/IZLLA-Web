export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-[#0A0F1E]/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tighter text-white">IZLA</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
          <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a>
        </nav>
        <a 
          href="#contato" 
          className="px-6 py-2.5 rounded-lg font-medium text-white bg-[image:var(--gradient-cta)] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
        >
          Falar com a IZLA
        </a>
      </div>
    </header>
  );
}
