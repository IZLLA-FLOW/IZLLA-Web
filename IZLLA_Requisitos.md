1. Visão Geral do Projeto
O website institucional da IZLA é o primeiro e principal projeto da empresa. Seu objetivo é estabelecer presença digital profissional, construir autoridade no mercado de tecnologia e captar os primeiros clientes.

O site funciona simultaneamente como:
•	Vitrine institucional da empresa
•	Portfólio técnico dos fundadores
•	Canal de captação de leads
•	Demonstração das capacidades técnicas e visuais da IZLA

1.1 Objetivos de Negócio
OBJ-01	Apresentar a empresa e seus serviços com clareza e profissionalismo

OBJ-02	Demonstrar competência técnica através da qualidade do próprio site

OBJ-03	Captar leads via formulário de contato e links diretos (WhatsApp, e-mail)

OBJ-04	Exibir projetos portfólio como prova de capacidade técnica

OBJ-05	Construir credibilidade visual compatível com startups de tecnologia

1.2 Público-Alvo
Pequenas empresas e empreendedores que buscam soluções digitais modernas:
•	Clínicas e consultórios
•	Imobiliárias
•	Academias e estúdios
•	Empresas com alto volume de leads
•	Negócios operacionalmente desorganizados

 
2. Requisitos Funcionais

2.1 Seções do Site
ID	Requisito	Prioridade	Status
RF-01	Seção Hero com slogan, subtítulo e CTA principal	Alta	Pendente
RF-02	Seção Sobre com apresentação da empresa e visão	Alta	Pendente
RF-03	Seção Equipe com perfis de Araujo e Henrique	Média	Pendente
RF-04	Seção Serviços com os 4 pilares (automação, dashboards, sistemas, IA)	Alta	Pendente
RF-05	Seção Projetos exibindo os 3 projetos portfólio	Alta	Pendente
RF-06	Seção Tecnologias com stack visual	Média	Pendente
RF-07	Seção Contato com formulário funcional	Alta	Pendente
RF-08	Footer com links sociais, e-mail e copyright	Alta	Pendente

2.2 Formulário de Contato
ID	Requisito	Prioridade	Status
RF-09	Campo: Nome completo (obrigatório)	Alta	Pendente
RF-10	Campo: E-mail (obrigatório, validação de formato)	Alta	Pendente
RF-11	Campo: Telefone/WhatsApp (opcional)	Baixa	Pendente
RF-12	Campo: Mensagem (obrigatório, mínimo 20 caracteres)	Alta	Pendente
RF-13	Botão de envio com feedback visual (loading/sucesso/erro)	Alta	Pendente
RF-14	Integração com e-mail ou serviço de notificação (ex: Resend, EmailJS)	Alta	Pendente

2.3 Projetos Portfólio
ID	Requisito	Prioridade	Status
RF-15	Card do Projeto 1: Dashboard Empresarial (analytics, métricas, admin)	Alta	Pendente
RF-16	Card do Projeto 2: Automação WhatsApp (lead management, fluxo automático)	Alta	Pendente
RF-17	Card do Projeto 3: E-Shop (vitrine digital, checkout, catálogo)	Alta	Pendente
RF-18	Cada card deve exibir: nome, descrição curta, tecnologias usadas e link/demo	Alta	Pendente

2.4 Navegação
ID	Requisito	Prioridade	Status
RF-19	Menu de navegação fixo (sticky) no topo	Alta	Pendente
RF-20	Menu hamburguer responsivo para mobile	Alta	Pendente
RF-21	Scroll suave entre seções via âncoras	Média	Pendente
RF-22	Indicador visual da seção ativa no menu	Baixa	Pendente

 
3. Requisitos Não Funcionais

3.1 Performance
ID	Requisito	Prioridade	Status
RNF-01	Score Lighthouse acima de 90 em Performance	Alta	Pendente
RNF-02	First Contentful Paint (FCP) abaixo de 1.5s	Alta	Pendente
RNF-03	Imagens otimizadas (WebP ou AVIF, lazy loading)	Alta	Pendente
RNF-04	Fontes carregadas com font-display: swap	Média	Pendente

3.2 Responsividade
ID	Requisito	Prioridade	Status
RNF-05	Layout totalmente responsivo (mobile, tablet, desktop)	Alta	Pendente
RNF-06	Breakpoints: 375px, 768px, 1024px, 1440px	Alta	Pendente
RNF-07	Touch targets mínimos de 44x44px em mobile	Média	Pendente

3.3 Acessibilidade
ID	Requisito	Prioridade	Status
RNF-08	Score Lighthouse Accessibility acima de 90	Alta	Pendente
RNF-09	Atributos alt em todas as imagens	Alta	Pendente
RNF-10	Contraste de cores WCAG AA (ratio 4.5:1 mínimo)	Alta	Pendente
RNF-11	Navegação por teclado funcional	Média	Pendente

3.4 SEO
ID	Requisito	Prioridade	Status
RNF-12	Meta tags: title, description, Open Graph em todas as páginas	Alta	Pendente
RNF-13	Structured data (JSON-LD) para organização/empresa	Média	Pendente
RNF-14	sitemap.xml e robots.txt configurados	Média	Pendente
RNF-15	URLs limpas e semânticas	Alta	Pendente

3.5 Deploy & Infraestrutura
ID	Requisito	Prioridade	Status
RNF-16	Deploy automático via Vercel (CI/CD no push para main)	Alta	Pendente
RNF-17	HTTPS obrigatório	Alta	Pendente
RNF-18	Domínio personalizado configurado	Alta	Pendente
RNF-19	Variáveis de ambiente para chaves de API (ex: e-mail)	Alta	Pendente

 
4. Stack Técnica

Conforme definido no Project Overview da IZLA:

4.1 Frontend
•	React + Vite + TypeScript
•	TailwindCSS para estilização
•	shadcn/ui como biblioteca de componentes base
•	React Router (se necessário para rotas futuras)

4.2 Serviços Externos
•	Vercel — deploy e hospedagem
•	Resend ou EmailJS — envio de e-mails do formulário de contato
•	Google Analytics ou Plausible — analytics (opcional fase 1)

4.3 Ferramentas de Design
•	Figma — prototipagem e design system
•	Fontes via Google Fonts ou Fontsource

 
5. Restrições e Premissas

5.1 Restrições
•	O site deve ser desenvolvível por 2 pessoas em paralelo sem conflitos frequentes de código
•	Sem backend próprio na fase 1 — apenas serviços externos para formulário
•	Orçamento zero para infraestrutura inicial (planos gratuitos de Vercel, etc.)
•	Prazo prioritário: site no ar antes de iniciar captação ativa de clientes

5.2 Premissas
•	Projetos portfólio (Dashboard, Automação, E-Shop) não precisam estar funcionais no lançamento — apenas representados com cards e descrições
•	Conteúdo textual e identidade visual (logo, paleta, tipografia) devem estar definidos antes do desenvolvimento
•	Domínio já adquirido ou em processo de aquisição

 
6. Critérios de Aceite

O site estará pronto para lançamento quando:

•	Todas as 8 seções estiverem implementadas e com conteúdo real
•	Formulário de contato enviando e-mails corretamente
•	Score Lighthouse ≥ 90 em Performance e Accessibility
•	Layout responsivo testado em iPhone SE, iPhone 14, iPad, desktop 1440px
•	Deploy ativo na Vercel com domínio personalizado e HTTPS
•	Sem erros no console do navegador em produção
•	Links sociais (Instagram, WhatsApp) funcionando corretamente

IZLA — Sistemas modernos. Automação inteligente. Presença digital real.
