import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare, 
  Mail, 
  Linkedin, 
  Github, 
  Database, 
  Code2, 
  LineChart 
} from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="space-y-28 sm:space-y-36 py-12 sm:py-20">
      
      {/* 1. HERO ORGÂNICO & HUMANO COM FOTO REAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Coluna Texto (7 colunas) */}
          <div className="md:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-100/70 border border-corporate-200/60 text-corporate-600 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Curitiba, PR · Brasil
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-corporate-950 leading-[1.15]">
                Olá, sou o André.
              </h1>
              <p className="text-lg sm:text-xl text-corporate-700 font-medium leading-relaxed">
                Desenvolvedor Full Stack, Cientista de Dados e Administrador de Banco de Dados.
              </p>
            </div>

            <p className="text-sm sm:text-base text-corporate-600 leading-relaxed max-w-xl">
              Desenvolvo aplicações web completas, integro software a hardwares físicos e projeto bancos de dados relacionais com foco em estabilidade, simplicidade e impacto real no dia a dia.
            </p>

            {/* Ações Diretas Sutis */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="#projetos"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-corporate-900 text-white hover:bg-corporate-800 transition-colors font-sans text-sm font-medium shadow-sm"
              >
                Conhecer Projetos
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5541995767851"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-corporate-600 hover:text-corporate-950 transition-colors py-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.linkedin.com/in/andré-m-9b8ba230b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-corporate-600 hover:text-corporate-950 transition-colors py-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://github.com/ZandreK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-corporate-600 hover:text-corporate-950 transition-colors py-2"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>

          </div>

          {/* Coluna Foto Real (5 colunas) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
              {/* Moldura sutil */}
              <div className="relative overflow-hidden rounded-2xl border border-corporate-200/80 bg-white p-2 shadow-sm transition-all group-hover:shadow-md">
                <img
                  src="/andre-martins.jpg"
                  alt="André Martins"
                  className="w-full aspect-[4/5] object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center pt-2.5">
                <span className="text-[11px] font-mono text-corporate-500">
                  André Martins · Engenharia & Dados
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROJETOS SELECIONADOS (PROGRESSIVE DISCLOSURE - LIMPO & EDITORIAL) */}
      <section id="projetos" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-1 pb-4 border-b border-corporate-200/80">
          <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
            Portfólio Prático
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-corporate-950">
            Projetos Selecionados
          </h2>
          <p className="text-sm text-corporate-600 max-w-xl">
            Sistemas construídos para resolver problemas operacionais reais com arquitetura sólida e código limpo.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* PROJETO 1: PINHA 3D */}
          <div className="rounded-2xl border border-corporate-200/90 bg-white p-6 sm:p-8 hover:border-corporate-300 transition-all shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-corporate-500">
              <span className="font-semibold text-corporate-800 uppercase tracking-wider">
                Manufatura Digital & Hardware
              </span>
              <span>2024 - 2025</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-corporate-950">
                Pinha 3D — Conexão Web com Impressoras 3D & Gestão Fabril
              </h3>
              <p className="text-sm sm:text-base text-corporate-600 leading-relaxed max-w-3xl">
                Plataforma desenvolvida para gerenciar oficinas de manufatura aditiva. Conecta-se em tempo real com a API Moonraker das impressoras 3D para leitura de telemetria física (temperaturas de bico e mesa, progresso percentual), calcula custos de matéria-prima por grama e processa arquivos de fatiamento localmente via rotinas em Python.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {['React', 'TypeScript', 'Supabase (PostgreSQL RLS)', 'Python', 'Moonraker API', 'Cloudflare Pages'].map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-corporate-50 border border-corporate-200/80 text-corporate-700 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-corporate-100 flex items-center justify-between">
              <Link
                to="/projetos/pinha-3d"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-corporate-900 hover:text-corporate-700 transition-colors"
              >
                Ler Estudo de Caso Completo
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="https://github.com/ZandreK/pinha-3d-sistema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-corporate-500 hover:text-corporate-950 flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repositório</span>
              </a>
            </div>
          </div>

          {/* PROJETO 2: PDVFLOW */}
          <div className="rounded-2xl border border-corporate-200/90 bg-white p-6 sm:p-8 hover:border-corporate-300 transition-all shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-corporate-500">
              <span className="font-semibold text-corporate-800 uppercase tracking-wider">
                Sistemas Comerciais & Varejo
              </span>
              <span>2024</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-corporate-950">
                pdvFlow — Sistema de Ponto de Venda & Estoque Atômico
              </h3>
              <p className="text-sm sm:text-base text-corporate-600 leading-relaxed max-w-3xl">
                Sistema de automação comercial e frente de caixa desenhado para operação ágil no varejo físico. Projetado com interface operável 100% via teclado para garantir checkouts em poucos segundos, decremento atômico de estoque e fechamento de caixa auditado sem discrepâncias financeiras.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL ACID', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-corporate-50 border border-corporate-200/80 text-corporate-700 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-corporate-100 flex items-center justify-between">
              <Link
                to="/projetos/pdvflow"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-corporate-900 hover:text-corporate-700 transition-colors"
              >
                Ler Estudo de Caso Completo
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://github.com/ZandreK/pdvflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-corporate-500 hover:text-corporate-950 flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repositório</span>
              </a>
            </div>
          </div>

          {/* PROJETO 3: POCKET FINANCE */}
          <div className="rounded-2xl border border-corporate-200/90 bg-white p-6 sm:p-8 hover:border-corporate-300 transition-all shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-corporate-500">
              <span className="font-semibold text-corporate-800 uppercase tracking-wider">
                Ciência de Dados & Finanças
              </span>
              <span>2024</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-corporate-950">
                Pocket Finance — Análise de Fluxo de Caixa & Projeção
              </h3>
              <p className="text-sm sm:text-base text-corporate-600 leading-relaxed max-w-3xl">
                Solução para análise financeira orientada a dados. Inclui rotinas em Python para importação e de-duplicação de extratos bancários (OFX/CSV), modelagem de séries temporais para antecipação de quebras de caixa e visualização gráfica simplificada para tomada de decisões.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {['Python (Pandas/NumPy)', 'PostgreSQL', 'React', 'Séries Temporais', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-corporate-50 border border-corporate-200/80 text-corporate-700 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-corporate-100 flex items-center justify-between">
              <Link
                to="/projetos/pocket-finance"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-corporate-900 hover:text-corporate-700 transition-colors"
              >
                Ler Estudo de Caso Completo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Link para outros projetos */}
        <div className="pt-2 text-center">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-600 hover:text-corporate-950 transition-colors font-medium"
          >
            Ver índice completo com todos os projetos (Doutor Saúde, Evntuz, etc.)
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

      {/* 3. OS 3 PILARES DE ATUAÇÃO (CALMO, ESPAÇADO E DIRETO) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-1 pb-4 border-b border-corporate-200/80">
          <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
            Competências
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-corporate-950">
            Pilares Técnicos
          </h2>
          <p className="text-sm text-corporate-600 max-w-xl">
            Como articulo engenharia de software, modelagem relacional e inteligência de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-corporate-200/80 shadow-sm space-y-4">
            <div className="w-9 h-9 rounded-xl bg-corporate-50 border border-corporate-200 flex items-center justify-center text-corporate-800">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base text-corporate-950">
                Engenharia Full Stack
              </h3>
              <p className="text-xs font-mono text-corporate-500">
                Interfaces & APIs
              </p>
            </div>
            <p className="text-sm text-corporate-600 leading-relaxed">
              Desenvolvimento de aplicações completas com React, TypeScript e Tailwind CSS. Foco em arquitetura limpa, componentes reutilizáveis e deploy seguro na Cloudflare Edge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-corporate-200/80 shadow-sm space-y-4">
            <div className="w-9 h-9 rounded-xl bg-corporate-50 border border-corporate-200 flex items-center justify-center text-corporate-800">
              <Database className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base text-corporate-950">
                Bancos de Dados & DBA
              </h3>
              <p className="text-xs font-mono text-corporate-500">
                Integridade & ACID
              </p>
            </div>
            <p className="text-sm text-corporate-600 leading-relaxed">
              Modelagem relacional normalizada no PostgreSQL e Supabase. Criação de índices estratégicos, controle de concorrência atômica, segurança com RLS e tuning de consultas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-corporate-200/80 shadow-sm space-y-4">
            <div className="w-9 h-9 rounded-xl bg-corporate-50 border border-corporate-200 flex items-center justify-center text-corporate-800">
              <LineChart className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base text-corporate-950">
                Ciência de Dados & Séries
              </h3>
              <p className="text-xs font-mono text-corporate-500">
                Estatística & Analytics
              </p>
            </div>
            <p className="text-sm text-corporate-600 leading-relaxed">
              Tratamento de dados estruturados com Python (Pandas/NumPy), análise exploratória, séries temporais de fluxo e geração de relatórios gerenciais claros.
            </p>
          </div>

        </div>

      </section>

      {/* 4. CONTATO DISCRETO & PROFISSIONAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-corporate-100/70 border border-corporate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
              Contato
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-corporate-950">
              Vamos conversar sobre oportunidades e desafios técnicos?
            </h3>
            <p className="text-sm text-corporate-600 max-w-lg">
              Estou à disposição para entrevistas, processos seletivos e posições de tecnologia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/5541995767851"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-corporate-900 hover:bg-corporate-800 text-white text-xs font-mono font-semibold transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              (41) 99576-7851
            </a>

            <a
              href="mailto:zk.amsilva@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-corporate-50 border border-corporate-300 text-corporate-800 text-xs font-mono font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-corporate-500" />
              zk.amsilva@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
