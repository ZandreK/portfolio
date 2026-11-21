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
    { id: 'Data & Finanças', label: 'Data & Finanças' },
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <header className="space-y-4 pb-8 border-b border-corporate-200">
        <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
          Portfólio Técnico
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-corporate-950">
          Projetos & Estudos de Caso de Engenharia
        </h1>
        <p className="text-base text-corporate-600 leading-relaxed max-w-2xl">
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
                  ? 'bg-corporate-900 text-white font-semibold'
                  : 'bg-white text-corporate-600 hover:text-corporate-900 hover:bg-corporate-100 border border-corporate-200'
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
            className="bg-white rounded-xl border border-corporate-200 p-6 sm:p-8 shadow-sm hover:border-corporate-300 transition-all space-y-6"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-corporate-100 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-800 font-semibold">
                  {project.category}
                </span>
                <span className="text-corporate-400">·</span>
                <span className="text-corporate-600">{project.role}</span>
                <span className="text-corporate-400">·</span>
                <span className="text-corporate-500">{project.year}</span>
              </div>
              <span className="text-corporate-500 font-mono">Status: {project.status}</span>
            </div>

            {/* Title & Summary */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-corporate-950">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-corporate-600 leading-relaxed max-w-4xl">
                {project.summary}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-corporate-50 border border-corporate-100">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <span className="text-xs text-corporate-500 block font-mono">{m.label}</span>
                  <span className="text-sm sm:text-base font-bold text-corporate-900 font-mono mt-0.5 block">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-medium transition-colors"
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
      <section className="bg-corporate-100/70 rounded-xl border border-corporate-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-corporate-950">
            Outras Soluções: Doutor Saúde, Evntuz & Brilluz
          </h3>
          <p className="text-sm text-corporate-600">
            Conheça também projetos com foco em SEO, landing pages de saúde e catálogos dinâmicos de produtos.
          </p>
        </div>
        <Link
          to="/projetos/outros"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white hover:bg-corporate-50 text-corporate-900 border border-corporate-300 text-xs font-mono font-medium transition-colors flex-shrink-0"
        >
          Ver Projetos Adicionais
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

    </div>
  );
};
