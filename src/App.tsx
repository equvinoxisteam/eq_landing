import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ResearchPage from './pages/ResearchPage';
import ProductEnigma from './pages/ProductEnigma';
import ProductIndianet from './pages/ProductIndianet';
import ProductSuperMemory from './pages/ProductSuperMemory';
import Security from './components/Security';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/products/enigma" element={<ProductEnigma />} />
          <Route path="/products/indianet" element={<ProductIndianet />} />
          <Route path="/products/supermemory" element={<ProductSuperMemory />} />
        </Routes>
        <Security />
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
