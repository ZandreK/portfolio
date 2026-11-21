# Portfólio de Engenharia & Dados — André Martins

Portfólio técnico multi-página focado em avaliação corporativa, processos seletivos e demonstração de competências em **Engenharia de Software Full Stack**, **Ciência de Dados** e **Administração de Banco de Dados (DBA)**.

---

## 🛠️ Stack Tecnológica

- **Frontend:** React 18 + TypeScript + Vite
- **Roteamento:** React Router DOM (SPA com páginas dedicadas para estudos de caso)
- **Estilização & Design:** Tailwind CSS (Paleta Corporativa Minimalista / Swiss Style)
- **Ícones:** Lucide React
- **Hospedagem & CDN:** Cloudflare Pages (Deploy Contínuo via GitHub)

---

## 📁 Estrutura de Rotas & Estudos de Caso

- `/` — Página inicial com posicionamento executivo, os 3 pilares técnicos e projetos destacados.
- `/projetos` — Índice completo de projetos com filtros por domínio.
- `/projetos/pinha-3d` — Estudo de caso técnico da plataforma fabril 3D, telemetria Moonraker (porta 7125) e Supabase.
- `/projetos/pdvflow` — Estudo de caso de automação comercial, concorrência de estoque e transações ACID no PostgreSQL.
- `/projetos/pocket-finance` — Estudo de caso de séries temporais de fluxo de caixa, dashboards analíticos e Python.
- `/projetos/outros` — Detalhamento técnico de projetos como Doutor Saúde e Evntuz/Brilluz.
- `/sobre` — Trajetória profissional, filosofia de código e matriz detalhada de competências.

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## ☁️ Deploy no Cloudflare Pages

1. O projeto já inclui o arquivo `public/_redirects` contendo `/* /index.html 200`, permitindo que o roteamento de páginas funcione perfeitamente sem erros 404 em recarregamento direto.
2. Na Cloudflare:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
