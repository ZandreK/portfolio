import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'Full Stack & IoT', label: 'Full Stack & IoT' },
    { id: 'Sistemas Comerciais', label: 'Sistemas Comerciais' },
    { id: 'Finanças & Full Stack', label: 'Finanças & Full Stack' },
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <header className="space-y-4 pb-8 border-b border-surface-border">
        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
          Portfólio Técnico
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-primary">
          Projetos & Estudos de Caso de Engenharia
        </h1>
        <p className="text-base text-ink-tertiary leading-relaxed max-w-2xl">
          Seleção de sistemas desenvolvidos com foco em robustez arquitetural, integridade relacional no banco de dados e alto desempenho operacional.
        </p>

        {/* Category Filters */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-ink-primary text-white font-semibold'
                  : 'bg-white text-ink-tertiary hover:text-ink-primary hover:bg-surface-tertiary border border-surface-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Featured Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-xl border border-surface-border p-6 sm:p-8 shadow-sm hover:border-ink-faint transition-all space-y-6"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-surface-tertiary text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-surface-tertiary text-ink-secondary font-semibold">
                  {project.category}
                </span>
                <span className="text-ink-muted">·</span>
                <span className="text-ink-tertiary">{project.role}</span>
                <span className="text-ink-muted">·</span>
                <span className="text-ink-muted">{project.year}</span>
              </div>
              <span className="text-ink-muted font-mono">Status: {project.status}</span>
            </div>

            {/* Title & Summary */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-ink-primary">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed max-w-4xl">
                {project.summary}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-surface-secondary border border-surface-tertiary">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <span className="text-xs text-ink-muted block font-mono">{m.label}</span>
                  <span className="text-sm sm:text-base font-bold text-ink-primary font-mono mt-0.5 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-surface-tertiary/70 text-ink-secondary"
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
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-tertiary hover:text-ink-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Código
                  </a>
                )}
                <Link
                  to={project.slug}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-ink-primary hover:bg-ink-secondary text-white text-xs font-medium transition-colors"
                >
                  Estudo de Caso Completo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Outros Projetos Banner */}
      <section className="bg-surface-tertiary/70 rounded-xl border border-surface-border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-ink-primary">
            Outras Soluções: Doutor Saúde, Evntuz & Brilluz
          </h3>
          <p className="text-sm text-ink-tertiary">
            Conheça também projetos com foco em SEO, landing pages de saúde e catálogos dinâmicos de produtos.
          </p>
        </div>
        <Link
          to="/projetos/outros"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white hover:bg-surface-secondary text-ink-primary border border-ink-faint text-xs font-mono font-medium transition-colors flex-shrink-0"
        >
          Ver Projetos Adicionais
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

    </div>
  );
};
