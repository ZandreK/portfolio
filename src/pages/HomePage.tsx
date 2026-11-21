import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Database, 
  Code2, 
  LineChart, 
  Github, 
  Linkedin, 
  MessageSquare,
  Mail
} from 'lucide-react';
import { FEATURED_PROJECTS, OTHER_PROJECTS, TECHNICAL_PILLARS } from '../data/projectsData';

export const HomePage = () => {
  return (
    <div className="space-y-20 py-8 sm:py-12">
      
      {/* 1. HERO SECTION EXECUTIVA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-100 border border-corporate-200 text-corporate-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-corporate-500"></span>
            Engenharia de Software & Arquitetura de Dados
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-corporate-950 leading-tight">
            André Martins
          </h1>

          <p className="text-lg sm:text-xl text-corporate-700 leading-relaxed font-normal">
            <span className="text-corporate-950 font-semibold">Desenvolvedor Full Stack</span>,{' '}
            <span className="text-corporate-950 font-semibold">Cientista de Dados</span> e{' '}
            <span className="text-corporate-950 font-semibold">Administrador de Banco de Dados</span>.
          </p>

          <p className="text-base text-corporate-600 leading-relaxed max-w-2xl">
            Projetando sistemas escaláveis de ponta a ponta: da modelagem relacional de alta integridade (PostgreSQL) e pipelines analíticos à construção de interfaces reativas, performáticas e orientadas à experiência do usuário.
          </p>

          {/* Quick Direct Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-corporate-900 hover:bg-corporate-800 text-white text-sm font-medium transition-all shadow-sm"
            >
              Ver Estudos de Caso
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/5541995767851"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white hover:bg-corporate-50 text-corporate-800 border border-corporate-300 text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-corporate-600" />
              WhatsApp Direto
            </a>

            <a
              href="https://github.com/ZandreK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md text-corporate-600 hover:text-corporate-950 hover:bg-corporate-100 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/andré-m-9b8ba230b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md text-corporate-600 hover:text-corporate-950 hover:bg-corporate-100 text-sm font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* 2. OS 3 PILARES TÉCNICOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-corporate-200 pt-12">
          
          <div className="mb-8">
            <h2 className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
              Áreas de Domínio
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-corporate-950 mt-1">
              Pilares de Especialidade
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECHNICAL_PILLARS.map((pillar) => {
              const Icon = 
                pillar.id === 'fullstack' ? Code2 :
                pillar.id === 'data-science' ? LineChart : Database;

              return (
                <div 
                  key={pillar.id}
                  className="bg-white p-6 rounded-lg border border-corporate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-md bg-corporate-100 border border-corporate-200 flex items-center justify-center text-corporate-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-corporate-950">
                        {pillar.title}
                      </h4>
                      <p className="text-xs font-mono text-corporate-500 mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                    <p className="text-sm text-corporate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-corporate-100 mt-6">
                    <ul className="space-y-1.5 text-xs text-corporate-700 font-mono">
                      {pillar.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-corporate-400"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. PROJETOS EM DESTAQUE (CASE STUDIES) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-corporate-200 pt-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
                Portfólio & Engenharia
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-corporate-950 mt-1">
                Projetos & Estudos de Caso
              </h3>
            </div>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-corporate-700 hover:text-corporate-950 transition-colors"
            >
              Ver todos os projetos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {FEATURED_PROJECTS.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl border border-corporate-200 p-6 sm:p-8 shadow-sm hover:border-corporate-300 transition-all"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-corporate-100">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-800 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-corporate-400">·</span>
                    <span className="text-corporate-600">{project.role}</span>
                    <span className="text-corporate-400">·</span>
                    <span className="text-corporate-500">{project.year}</span>
                  </div>

                  <span className="text-xs font-mono text-corporate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {project.status}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="py-5 space-y-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-corporate-950">
                    {project.title}
                  </h4>
                  <p className="text-sm sm:text-base text-corporate-600 leading-relaxed max-w-4xl">
                    {project.summary}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 bg-corporate-50 rounded-lg p-4 border border-corporate-100 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-xs text-corporate-500 block">
                        {metric.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-corporate-900 font-mono">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer with Tags & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-corporate-100/70 text-corporate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-600 hover:text-corporate-950 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Código
                      </a>
                    )}
                    <Link
                      to={project.slug}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-medium transition-colors"
                    >
                      Estudo de Caso Completo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUTROS PROJETOS & TRAJETÓRIA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-corporate-200 pt-12">
          
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
              Histórico Técnico
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-corporate-950 mt-1">
              Outros Projetos & Aplicações
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-lg border border-corporate-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-corporate-500">
                    <span className="font-semibold text-corporate-700">{proj.category}</span>
                    <span>{proj.period}</span>
                  </div>
                  <h4 className="text-lg font-bold text-corporate-950">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-corporate-600 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs text-corporate-500 block font-medium">Destaque técnico:</span>
                    <span className="text-xs text-corporate-700">{proj.highlights}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-corporate-100 flex flex-wrap gap-1.5">
                  {proj.stack.map((item) => (
                    <span key={item} className="px-2 py-0.5 text-xs font-mono bg-corporate-50 border border-corporate-200 text-corporate-600 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/projetos/outros"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-600 hover:text-corporate-950 transition-colors"
            >
              Ver detalhes de projetos adicionais
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. SEÇÃO DE CONTATO DIRETO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-corporate-900 text-white rounded-xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
              Contato Profissional
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Vamos conversar sobre oportunidades e desafios de engenharia?
            </h3>
            <p className="text-sm sm:text-base text-corporate-300 leading-relaxed">
              Disponível para avaliação técnica, posições como Desenvolvedor Full Stack, Cientista de Dados ou Administrador de Banco de Dados.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5541995767851"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white hover:bg-corporate-100 text-corporate-900 text-sm font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                (41) 99576-7851
              </a>

              <a
                href="mailto:zk.amsilva@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-corporate-800 hover:bg-corporate-700 text-white border border-corporate-700 text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-corporate-300" />
                zk.amsilva@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/andré-m-9b8ba230b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-corporate-800 hover:bg-corporate-700 text-white border border-corporate-700 text-sm font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-corporate-300" />
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
