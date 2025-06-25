import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Server, Upload, Package, RefreshCw, Bot, Globe, GitBranch, Shield, Zap } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('app-publishing');

  const appPublishingFeatures = [
    { icon: Upload, title: t('services.app.features.0.title'), description: t('services.app.features.0.desc') },
    { icon: Package, title: t('services.app.features.1.title'), description: t('services.app.features.1.desc') },
    { icon: Smartphone, title: t('services.app.features.2.title'), description: t('services.app.features.2.desc') },
    { icon: Shield, title: t('services.app.features.3.title'), description: t('services.app.features.3.desc') },
    { icon: RefreshCw, title: t('services.app.features.4.title'), description: t('services.app.features.4.desc') },
    { icon: Zap, title: t('services.app.features.5.title'), description: t('services.app.features.5.desc') },
  ];

  const devopsFeatures = [
    { icon: Globe, title: t('services.devops.features.0.title'), description: t('services.devops.features.0.desc') },
    { icon: Server, title: t('services.devops.features.1.title'), description: t('services.devops.features.1.desc') },
    { icon: GitBranch, title: t('services.devops.features.2.title'), description: t('services.devops.features.2.desc') },
    { icon: Bot, title: t('services.devops.features.3.title'), description: t('services.devops.features.3.desc') },
    { icon: Shield, title: t('services.devops.features.4.title'), description: t('services.devops.features.4.desc') },
    { icon: Zap, title: t('services.devops.features.5.title'), description: t('services.devops.features.5.desc') },
  ];

  return (
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2 flex">
              <button
                  onClick={() => setActiveTab('app-publishing')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === 'app-publishing'
                          ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>{t('services.tabs.app_publishing')}</span>
                </div>
              </button>
              <button
                  onClick={() => setActiveTab('devops')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === 'devops'
                          ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-md'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5" />
                  <span>{t('services.tabs.devops')}</span>
                </div>
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {activeTab === 'app-publishing' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('services.app.title')}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      {t('services.app.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {appPublishingFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                              <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                              {feature.description}
                            </p>
                          </div>
                      );
                    })}
                  </div>
                </div>
            )}

            {activeTab === 'devops' && (
                <div className="space-y-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Server className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('services.devops.title')}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      {t('services.devops.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {devopsFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                              <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                              {feature.description}
                            </p>
                          </div>
                      );
                    })}
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('services.devops.supported')}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Laravel', 'Django', 'Node.js', 'React', 'Vue.js', 'Angular', 'Next.js', 'Flutter Web'].map((tech) => (
                          <div key={tech} className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center font-medium text-gray-700 dark:text-gray-300">
                            {tech}
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>
      </section>
  );
};

export default Services;