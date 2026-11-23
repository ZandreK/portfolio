import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyPinha3D } from './pages/CaseStudyPinha3D';
import { CaseStudyPdvFlow } from './pages/CaseStudyPdvFlow';
import { CaseStudyPocketFinance } from './pages/CaseStudyPocketFinance';
import { OtherProjectsPage } from './pages/OtherProjectsPage';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-primary">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/pinha-3d" element={<CaseStudyPinha3D />} />
          <Route path="/projetos/pdvflow" element={<CaseStudyPdvFlow />} />
          <Route path="/projetos/pocket-finance" element={<CaseStudyPocketFinance />} />
          <Route path="/projetos/outros" element={<OtherProjectsPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
