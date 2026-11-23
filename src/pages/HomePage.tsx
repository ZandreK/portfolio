import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';

export const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-linked photo effects
  const heroBlur = Math.min(12, (scrollY / 400) * 12);
  const heroScale = 1 + (scrollY / 2000) * 0.08;

  // Reveal refs
  const projectsSectionRef = useReveal();
  const projectsGridRef = useStaggerReveal();
  const educationRef = useReveal();
  const pillarsRef = useReveal();
  const pillarsGridRef = useStaggerReveal();
  const contactRef = useReveal();

  const projects = [
    {
      num: '01',
      title: 'Pinha 3D',
      subtitle: 'Manufatura Aditiva & Telemetria',
      description: 'Plataforma de gestão fabril com telemetria em tempo real via Moonraker API, processamento local de GCODE em Python e catálogo de modelos 3D.',
      tags: ['React', 'TypeScript', 'Supabase', 'Python'],
      year: '2024–25',
      link: '/projetos/pinha-3d',
      github: 'https://github.com/ZandreK/pinha-3d-sistema',
    },
    {
      num: '02',
      title: 'pdvFlow',
      subtitle: 'Ponto de Venda & Estoque',
      description: 'Sistema de automação comercial com checkout ultra-rápido via teclado, transações ACID no PostgreSQL e fechamento de caixa auditável.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      year: '2024',
      link: '/projetos/pdvflow',
      github: 'https://github.com/ZandreK/pdvflow',
    },
    {
      num: '03',
      title: 'Pocket Finance',
      subtitle: 'Análise Financeira & Projeção',
      description: 'Motor analítico para séries temporais de fluxo de caixa, importação de extratos OFX/CSV e dashboards executivos interativos.',
      tags: ['Python', 'Pandas', 'React', 'PostgreSQL'],
      year: '2024',
      link: '/projetos/pocket-finance',
    },
  ];

  return (
    <div className="space-y-0">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Editorial, serif title, photo with scroll blur
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Background photo — scroll blur & scale */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            filter: `blur(${heroBlur}px)`,
            transform: `scale(${heroScale})`,
            willChange: 'filter, transform',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 z-10" />
          <img
            src="/andre-martins.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top photo-editorial"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 w-full py-20 md:py-0">
          <div className="max-w-2xl space-y-8">
            
            {/* Overline */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-ink-tertiary">
                <span className="w-8 h-[1px] bg-ink-muted inline-block" />
                Curitiba, PR · Brasil
              </span>
            </div>

            {/* Name */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary leading-[0.95] tracking-[-0.02em]">
                André
                <br />
                Martins
              </h1>
            </div>

            {/* Role line */}
            <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-lg">
                Desenvolvedor Full Stack, Cientista de Dados 
                <span className="text-ink-muted"> & </span>
                Administrador de Banco de Dados.
              </p>
            </div>

            {/* Links row */}
            <div className="animate-slide-up flex flex-wrap items-center gap-x-6 gap-y-3 pt-2" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border-b border-ink-primary pb-0.5 hover:opacity-60 transition-opacity"
              >
                Ver projetos
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/ZandreK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-ink-tertiary hover:text-ink-primary transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/andré-m-9b8ba230b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-ink-tertiary hover:text-ink-primary transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="mailto:zk.amsilva@gmail.com"
                className="text-[13px] text-ink-tertiary hover:text-ink-primary transition-colors"
              >
                E-mail
              </a>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-ink-muted to-transparent" />
        </div>

      </section>


      {/* ═══════════════════════════════════════════════════════════════
          PROJETOS — Clean editorial cards, numbered
      ═══════════════════════════════════════════════════════════════ */}
      <section id="projetos" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          {/* Section header */}
          <div ref={projectsSectionRef} className="reveal mb-16 sm:mb-20">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted block mb-4">
              Projetos Selecionados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-primary leading-[1.1]">
              Trabalhos recentes
            </h2>
          </div>

          {/* Projects list */}
          <div ref={projectsGridRef} className="stagger-children divide-y divide-surface-border">
            {projects.map((project) => (
              <div key={project.num} className="group py-10 sm:py-14 first:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                  
                  {/* Number + Year */}
                  <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                    <span className="text-[11px] font-mono text-ink-muted">{project.num}</span>
                    <span className="text-[11px] font-mono text-ink-muted">{project.year}</span>
                  </div>

                  {/* Title + Description */}
                  <div className="md:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary group-hover:opacity-70 transition-opacity leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-[13px] text-ink-tertiary mt-1 block">
                        {project.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-ink-secondary leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[11px] font-mono text-ink-tertiary bg-surface-tertiary rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="md:col-span-4 flex items-start justify-start md:justify-end gap-4 pt-1">
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-primary border-b border-ink-faint hover:border-ink-primary pb-0.5 transition-colors"
                    >
                      Estudo de caso
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-ink-muted hover:text-ink-primary transition-colors flex items-center gap-1"
                      >
                        Código
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* More projects link */}
          <div className="pt-10 border-t border-surface-border">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-sm text-ink-tertiary hover:text-ink-primary transition-colors"
            >
              Ver todos os projetos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          FORMAÇÃO — UTFPR clean block
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-surface-secondary">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div ref={educationRef} className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

              {/* Left label */}
              <div className="md:col-span-4 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted block">
                  Formação
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary leading-[1.1]">
                  Base acadêmica
                </h2>
              </div>

              {/* Right content */}
              <div className="md:col-span-8 space-y-8">
                
                <div className="space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-ink-primary">
                      Ciência da Computação
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-tertiary">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Em andamento
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-ink-secondary">
                      Universidade Tecnológica Federal do Paraná (UTFPR)
                    </p>
                    <p className="text-[13px] text-ink-tertiary">
                      Câmpus Ponta Grossa · DAINF — Departamento de Informática
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-surface-border" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-ink-muted font-medium">
                      Domínio Teórico
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      Estruturas de Dados, Algoritmos, Teoria da Computação, Arquitetura de SO, Compiladores e Redes.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-ink-muted font-medium">
                      Pesquisa & TCC
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      Análise Comparativa de Desempenho entre Frameworks Multiagentes MASPY e Jason/JaCaMo.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          PILARES — Three clean columns
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div ref={pillarsRef} className="reveal mb-16">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted block mb-4">
              Especialidades
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-primary leading-[1.1]">
              Pilares de atuação
            </h2>
          </div>

          <div ref={pillarsGridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-border rounded-2xl overflow-hidden">
            
            <div className="bg-white p-8 sm:p-10 space-y-4">
              <span className="text-[11px] font-mono text-ink-muted">01</span>
              <h3 className="text-lg font-semibold text-ink-primary">
                Engenharia Full Stack
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Aplicações completas com React, TypeScript e Tailwind CSS. Arquitetura limpa, componentes reutilizáveis e deploy na Cloudflare Edge.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Vite'].map(t => (
                  <span key={t} className="text-[10px] font-mono text-ink-muted">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 space-y-4">
              <span className="text-[11px] font-mono text-ink-muted">02</span>
              <h3 className="text-lg font-semibold text-ink-primary">
                Bancos de Dados & DBA
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Modelagem relacional normalizada no PostgreSQL. Índices estratégicos, concorrência atômica, RLS e tuning de consultas.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {['PostgreSQL', 'Supabase', 'ACID', 'RLS', 'SQL'].map(t => (
                  <span key={t} className="text-[10px] font-mono text-ink-muted">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 space-y-4">
              <span className="text-[11px] font-mono text-ink-muted">03</span>
              <h3 className="text-lg font-semibold text-ink-primary">
                Ciência de Dados
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Tratamento de dados com Python (Pandas/NumPy), séries temporais, análise exploratória e relatórios gerenciais claros.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Python', 'Pandas', 'NumPy', 'SQL', 'Analytics'].map(t => (
                  <span key={t} className="text-[10px] font-mono text-ink-muted">{t}</span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          CONTATO — Minimal, editorial
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div ref={contactRef} className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              
              <div className="md:col-span-6 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted block">
                  Contato
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-primary leading-[1.1]">
                  Vamos conversar?
                </h2>
                <p className="text-sm text-ink-tertiary max-w-md leading-relaxed">
                  Estou à disposição para entrevistas, oportunidades e desafios técnicos.
                </p>
              </div>

              <div className="md:col-span-6 flex flex-col items-start md:items-end gap-4 md:pt-10">
                <a
                  href="https://wa.me/5541995797851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-medium text-ink-primary border-b border-ink-faint hover:border-ink-primary pb-1 transition-colors"
                >
                  (41) 99579-7851
                </a>
                <a
                  href="mailto:zk.amsilva@gmail.com"
                  className="text-lg sm:text-xl font-medium text-ink-primary border-b border-ink-faint hover:border-ink-primary pb-1 transition-colors"
                >
                  zk.amsilva@gmail.com
                </a>
                <div className="flex gap-6 pt-2">
                  <a
                    href="https://github.com/ZandreK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-tertiary hover:text-ink-primary transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andré-m-9b8ba230b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-tertiary hover:text-ink-primary transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
