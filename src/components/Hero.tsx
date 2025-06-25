import React from 'react';
import { ArrowRight, Shield, Zap, Users, Rocket, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">{t('hero.trust.compliant')}</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">{t('hero.trust.deployment')}</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">{t('hero.trust.projects')}</span>
              </div>
            </div>

            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                {t('hero.title.first')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t('hero.title.highlight')}
              </span>
                <br />
                {t('hero.title.second')}
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <a
                    href="#services"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
                >
                  <Rocket className="w-6 h-6" />
                  <span className="text-lg">{t('hero.cta.explore')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                    href={import.meta.env.VITE_TELEGRAM_USERNAME}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold py-4 px-8 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center space-x-2"
                >
                  <Terminal className="w-5 h-5" />
                  <span>{t('hero.cta.telegram')}</span>
                </a>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('hero.card1.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('hero.card1.price')}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('hero.card1.description')}
                </p>
                {/*<div className="flex items-center text-green-600 dark:text-green-400 font-medium">*/}
                {/*  <span>{t('hero.card1.learn')}</span>*/}
                {/*  <ArrowRight className="w-4 h-4 ml-2" />*/}
                {/*</div>*/}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('hero.card2.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('hero.card2.price')}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('hero.card2.description')}
                </p>
                {/*<div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">*/}
                {/*  <span>{t('hero.card2.learn')}</span>*/}
                {/*  <ArrowRight className="w-4 h-4 ml-2" />*/}
                {/*</div>*/}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">{t('hero.stats.apps')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24h</div>
                <div className="text-gray-600 dark:text-gray-300">{t('hero.stats.deployment')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">99%</div>
                <div className="text-gray-600 dark:text-gray-300">{t('hero.stats.success')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">{t('hero.stats.ssl')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
