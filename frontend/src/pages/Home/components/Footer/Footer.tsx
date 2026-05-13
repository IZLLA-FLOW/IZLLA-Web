export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0F1E] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-bold text-2xl tracking-tighter text-white mb-2">IZLA</div>
          <p className="text-sm text-slate-500">Sistemas modernos. Automação inteligente.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">WhatsApp</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} IZLA. Todos os direitos reservados.
      </div>
    </footer>
  );
}
