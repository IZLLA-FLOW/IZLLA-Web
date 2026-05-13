import { useState } from "react";
// import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Configure EmailJS with actual IDs
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos conversar?</h2>
          <p className="text-slate-300">Pronto para transformar sua operação? Preencha o formulário abaixo.</p>
        </div>
        
        <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-8 md:p-10">
          {success ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
              <h3 className="text-xl font-medium text-white mb-2">Mensagem enviada!</h3>
              <p className="text-slate-400">Retornaremos o contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Nome completo *</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">E-mail *</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">WhatsApp (opcional)</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Mensagem *</label>
                <textarea required rows={4} minLength={20} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-lg font-medium text-white bg-[image:var(--gradient-cta)] hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
