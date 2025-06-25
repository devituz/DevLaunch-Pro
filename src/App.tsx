import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // ✅ to‘g‘ri import
import './index.css';

function App() {
  return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <Hero />
            <Services />
            <HowItWorks />
            <Pricing />
            {/*<Testimonials />*/}
            <FAQ />
            <Contact />
            <Footer />
          </div>
        </ThemeProvider>
      </I18nextProvider>
  );
}

export default App;
