import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Linkedin, 
  Github 
} from 'lucide-react';
import { BentoProfileCard } from '../components/bento/BentoProfileCard';
import { BentoMetricsCard } from '../components/bento/BentoMetricsCard';
import { BentoPillarsCard } from '../components/bento/BentoPillarsCard';
import { BentoTechStrip } from '../components/bento/BentoTechStrip';
import { Pinha3DMockup } from '../components/mockups/Pinha3DMockup';
import { PdvFlowMockup } from '../components/mockups/PdvFlowMockup';
import { PocketFinanceMockup } from '../components/mockups/PocketFinanceMockup';
import { OTHER_PROJECTS } from '../data/projectsData';

export const HomePage = () => {
  return (
    <div className="space-y-24 py-8 sm:py-16">
      
      {/* 1. HERO COM TIPOGRAFIA DISPLAY GIGANTE (ESTILO DRIBBLE: ALEX GRAHAM / DYMAS ALFIN) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top meta pill */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-corporate-200 text-corporate-700 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-corporate-900 animate-pulse"></span>
            Engenharia de Software · Ciência de Dados · DBA
          </div>
        </div>

        {/* Display Typography */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-corporate-950 uppercase leading-none select-none">
            André Martins
          </h1>
          <p className="text-sm sm:text-lg md:text-xl font-mono text-corporate-600 max-w-3xl leading-relaxed">
            Arquitetura de software de ponta a ponta: da modelagem relacional ACID no <strong className="text-corporate-950">PostgreSQL</strong> ao processamento analítico com <strong className="text-corporate-950">Python</strong> e interfaces de alta performance em <strong className="text-corporate-950">React & TypeScript</strong>.
          </p>
        </div>

        {/* 2. BENTO GRID (ESTILO JON DANIEL / RIFAYET / ONPOINT) */}
        <div className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <BentoProfileCard />
            <BentoMetricsCard />
            <BentoPillarsCard />
          </div>
          <BentoTechStrip />
        </div>

      </section>

      {/* 3. SHOWCASE DE PROJETOS COM MOCKUPS DE SISTEMA (ESTILO DRIBBBLE BONSAI / KORSA) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-corporate-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
              Trabalhos Selecionados
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-corporate-950 mt-1">
              Estudos de Caso & Engenharia Prática
            </h2>
          </div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-800 font-semibold hover:text-corporate-950 hover:underline"
          >
            Ver catálogo completo de projetos
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-16">
          
          {/* PROJETO 1: PINHA 3D */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-corporate-200 shadow-sm hover:border-corporate-300 transition-all">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Pinha3DMockup />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-corporate-500">
                <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-900 font-semibold">
                  Full Stack & IoT
                </span>
                <span>·</span>
                <span>2024 - 2025</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-corporate-950">
                Pinha 3D — Gestão Fabril & Telemetria em Tempo Real
              </h3>

              <p className="text-sm text-corporate-600 leading-relaxed">
                Plataforma integrada com a API Moonraker para telemetria contínua (&lt; 250ms) de impressoras 3D, controle de custos por grama de filamento e processador local em Python para arquivos <code className="bg-corporate-100 px-1 py-0.5 rounded text-corporate-800">.3mf</code> e <code className="bg-corporate-100 px-1 py-0.5 rounded text-corporate-800">.gcode</code>.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <div className="p-2.5 rounded bg-corporate-50 border border-corporate-100">
                  <span className="text-corporate-400 block text-[10px]">TELEMETRIA</span>
                  <span className="font-bold text-corporate-900">&lt; 250ms via WebSocket</span>
                </div>
                <div className="p-2.5 rounded bg-corporate-50 border border-corporate-100">
                  <span className="text-corporate-400 block text-[10px]">BANCO & AUTH</span>
                  <span className="font-bold text-corporate-900">Supabase PostgreSQL (RLS)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/projetos/pinha-3d"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
                >
                  Estudo de Caso Completo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://github.com/ZandreK/pinha-3d-sistema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-corporate-50 hover:bg-corporate-100 text-corporate-700 text-xs font-mono transition-colors border border-corporate-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repositório
                </a>
              </div>
            </div>
          </div>

          {/* PROJETO 2: PDVFLOW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-corporate-200 shadow-sm hover:border-corporate-300 transition-all">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-corporate-500">
                <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-900 font-semibold">
                  Sistemas Comerciais & DBA
                </span>
                <span>·</span>
                <span>2024</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-corporate-950">
                pdvFlow — Automação de Frente de Caixa & Estoque ACID
              </h3>

              <p className="text-sm text-corporate-600 leading-relaxed">
                Ponto de venda com ergonomia 100% voltada ao teclado para caixas de alto fluxo, fechamento cego de turno e garantia atômica contra saldo de estoque negativo via controle de concorrência relacional.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <div className="p-2.5 rounded bg-corporate-50 border border-corporate-100">
                  <span className="text-corporate-400 block text-[10px]">CHECKOUT</span>
                  <span className="font-bold text-corporate-900">&lt; 1.2s por venda</span>
                </div>
                <div className="p-2.5 rounded bg-corporate-50 border border-corporate-100">
                  <span className="text-corporate-400 block text-[10px]">CONCORRÊNCIA</span>
                  <span className="font-bold text-corporate-900">Travamento Otimista ACID</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/projetos/pdvflow"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
                >
                  Estudo de Caso Completo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://github.com/ZandreK/pdvflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-corporate-50 hover:bg-corporate-100 text-corporate-700 text-xs font-mono transition-colors border border-corporate-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repositório
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <PdvFlowMockup />
            </div>
          </div>

          {/* PROJETO 3: POCKET FINANCE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-corporate-200 shadow-sm hover:border-corporate-300 transition-all">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <PocketFinanceMockup />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-corporate-500">
                <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-900 font-semibold">
                  Data Science & Finanças
                </span>
                <span>·</span>
                <span>2024</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-corporate-950">
                Pocket Finance — Inteligência Preditiva de Fluxo de Caixa
              </h3>

              <p className="text-sm text-corporate-600 leading-relaxed">
                Motor analítico desenvolvido com Python e SQL analítico para modelagem de séries temporais financeiras, projeção de cenários de quebra de caixa e ingestão automatizada de arquivos bancários OFX e CSV.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <div className="p-2.5 rounded bg-corporate-50 border border-corporate-100">
                  <span className="text-corporate-400 block text-[10px]">MODELAGEM</span>
                  <span className="font-bold text-corporate-900">Séries Temporais (94.8%)</span>
                </div>
                <div className="p-2.5 rounded bg-corporate-50 border border-corporate-100">
                  <span className="text-corporate-400 block text-[10px]">INGESTÃO</span>
                  <span className="font-bold text-corporate-900">De-duplicação por Hash</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/projetos/pocket-finance"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
                >
                  Estudo de Caso Completo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 4. HISTÓRICO ADICIONAL (DOUTOR SAÚDE & EVNTUZ / BRILLUZ) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-t border-corporate-200 pt-12 space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
            Outras Entregas
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-corporate-950">
            Aplicações Web & Catálogos Comerciais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OTHER_PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-xl border border-corporate-200 p-6 shadow-sm flex flex-col justify-between hover:border-corporate-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-corporate-500">
                  <span className="font-semibold text-corporate-700">{proj.category}</span>
                  <span>{proj.period}</span>
                </div>
                <h4 className="text-xl font-bold text-corporate-950">
                  {proj.title}
                </h4>
                <p className="text-sm text-corporate-600 leading-relaxed">
                  {proj.description}
                </p>
                <div className="pt-1">
                  <span className="text-xs text-corporate-500 block font-medium">Destaque:</span>
                  <span className="text-xs text-corporate-700 font-mono">{proj.highlights}</span>
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

        <div className="pt-2 text-center">
          <Link
            to="/projetos/outros"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-600 hover:text-corporate-950 transition-colors"
          >
            Ver mais detalhes de outros projetos
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. SEÇÃO DE CONTATO DIRETO EXECUTIVA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-corporate-950 text-white p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
              Contato Profissional
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Vamos conversar sobre oportunidades e desafios de engenharia?
            </h2>
            <p className="text-sm sm:text-base text-corporate-300 leading-relaxed">
              Disponível para avaliação técnica e posições como Desenvolvedor Full Stack, Cientista de Dados ou Administrador de Banco de Dados.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="https://wa.me/5541995767851"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-corporate-100 text-corporate-950 font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                WhatsApp: (41) 99576-7851
              </a>

              <a
                href="mailto:zk.amsilva@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-corporate-800 hover:bg-corporate-700 text-white border border-corporate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-corporate-300" />
                zk.amsilva@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/andré-m-9b8ba230b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-corporate-800 hover:bg-corporate-700 text-white border border-corporate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>

              <a
                href="https://github.com/ZandreK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-corporate-800 hover:bg-corporate-700 text-white border border-corporate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub (ZandreK)
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
