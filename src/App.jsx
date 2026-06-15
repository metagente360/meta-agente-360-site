import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Plataforma from './pages/Plataforma';
import Formacao from './pages/Formacao';
import MetaProdutor from './pages/MetaProdutor';
import MetaEmpresa from './pages/MetaEmpresa';
import Solucoes from './pages/Solucoes';
import Jornada from './pages/Jornada';
import Ecossistema from './pages/Ecossistema';
import Cases from './pages/Cases';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-brand-ice">
        <div className="w-7 h-7 border-[3px] border-brand-grey border-t-brand-blue rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-ice">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/formacao-arquiteto-ia-agentica" element={<Formacao />} />
          <Route path="/meta-produtor" element={<MetaProdutor />} />
          <Route path="/meta-empresa" element={<MetaEmpresa />} />
          <Route path="/solucoes-agenticas" element={<Solucoes />} />
          <Route path="/jornada-agentica" element={<Jornada />} />
          <Route path="/ecossistema" element={<Ecossistema />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App