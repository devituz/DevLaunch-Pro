import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('header.services'), href: '#services' },
    { name: t('header.how_it_works'), href: '#how-it-works' },
    { name: t('header.pricing'), href: '#pricing' },
    { name: t('header.faq'), href: '#faq' },
    { name: t('header.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'uz', name: "O'zbek" },
    { code: 'ru', name: 'Русский' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    if (i18n.changeLanguage) {
      i18n.changeLanguage(selectedLang).catch((err) => {
        console.error('Failed to change language:', err);
      });
    } else {
      console.error('i18n.changeLanguage is not available');
    }
  };

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">{t('header.brand_name')}</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
              ))}
            </nav>

            {/* Theme Toggle, Language Switcher & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <select
                  value={i18n.language || 'en'}
                  onChange={handleLanguageChange}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors outline-none"
              >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                ))}
              </select>
              <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                  href={import.meta.env.VITE_TELEGRAM_USERNAME}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                {t('header.start_on_telegram')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <select
                  value={i18n.language || 'en'}
                  onChange={handleLanguageChange}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors outline-none"
              >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                ))}
              </select>
              <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                      <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                  ))}
                  <a
                      href="https://t.me/devit_uz"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-center"
                  >
                    {t('header.start_on_telegram')}
                  </a>
                </nav>
              </div>
          )}
        </div>
      </header>
  );
};

export default Header;