import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Institutions from './pages/Institutions';
import InstitutionProfile from './pages/InstitutionProfile';
import Commissions from './pages/Commissions';
import CommissionProfile from './pages/CommissionProfile';
import Candidates from './pages/Candidates';
import CandidateProfile from './pages/CandidateProfile';
import PowerMaps from './pages/PowerMaps';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import SearchPage from './pages/Search';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Resources from './pages/Resources';

function App() {
  // Define enhanced color palette for justice theme
  document.documentElement.style.setProperty('--color-primary-50', '#f0f4f8');
  document.documentElement.style.setProperty('--color-primary-100', '#d9e2ec');
  document.documentElement.style.setProperty('--color-primary-200', '#bcccdc');
  document.documentElement.style.setProperty('--color-primary-300', '#9fb3c8');
  document.documentElement.style.setProperty('--color-primary-400', '#829ab1');
  document.documentElement.style.setProperty('--color-primary-500', '#627d98');
  document.documentElement.style.setProperty('--color-primary-600', '#486581');
  document.documentElement.style.setProperty('--color-primary-700', '#334e68');
  document.documentElement.style.setProperty('--color-primary-800', '#243b53');
  document.documentElement.style.setProperty('--color-primary-900', '#102a43');

  // Get the current path
  const path = window.location.pathname;
  
  // Check if we're on an institution profile page
  const institutionMatch = path.match(/^\/instituciones\/([^/]+)$/);
  if (institutionMatch) {
    return (
      <AuthProvider>
        <InstitutionProfile institutionId={institutionMatch[1]} />
      </AuthProvider>
    );
  }

  // Check if we're on a commission profile page
  const commissionMatch = path.match(/^\/comisiones\/([^/]+)$/);
  if (commissionMatch) {
    return (
      <AuthProvider>
        <CommissionProfile commissionId={commissionMatch[1]} />
      </AuthProvider>
    );
  }

  // Check if we're on a candidate profile page
  const candidateMatch = path.match(/^\/candidatos\/([^/]+)$/);
  if (candidateMatch) {
    return (
      <AuthProvider>
        <CandidateProfile candidateId={candidateMatch[1]} />
      </AuthProvider>
    );
  }

  // Check if we're on a news article page
  const newsMatch = path.match(/^\/noticias\/([^/]+)$/);
  if (newsMatch) {
    return (
      <AuthProvider>
        <NewsArticle articleId={newsMatch[1]} />
      </AuthProvider>
    );
  }

  // Routes
  switch (path) {
    case '/':
      return <Home />;
    case '/instituciones':
      return <Institutions />;
    case '/comisiones':
      return <Commissions />;
    case '/candidatos':
      return <Candidates />;
    case '/mapas-poder':
      return (
        <AuthProvider>
          <PowerMaps />
        </AuthProvider>
      );
    case '/dashboard':
      return (
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      );
    case '/documentacion':
      return <Documentation />;
    case '/noticias':
      return <News />;
    case '/buscar':
      return <SearchPage />;
    case '/acerca':
      return <About />;
    case '/contacto':
      return <Contact />;
    case '/legal/privacidad':
      return <Privacy />;
    case '/legal/terminos':
      return <Terms />;
    case '/legal/cookies':
      return <Cookies />;
    case '/recursos/datos':
    case '/recursos/informes':
    case '/recursos/biblioteca':
      return <Resources />;
    default:
      // Show 404 page for any unmatched route
      return <NotFound />;
  }
}

