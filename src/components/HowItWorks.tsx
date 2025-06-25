import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle, Upload, Rocket, Settings, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();

  const appSteps = t('how_it_works.app.steps', { returnObjects: true });
  const devopsSteps = t('how_it_works.devops.steps', { returnObjects: true });

  const appIcons = [MessageCircle, Upload, Settings, Rocket];
  const devopsIcons = [MessageCircle, Settings, Upload, CheckCircle];

  return (
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('how_it_works.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('how_it_works.description')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* App Steps */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('how_it_works.app.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('how_it_works.app.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {appSteps.map((step, index) => {
                  const Icon = appIcons[index];
                  return (
                      <div key={index} className="relative">
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-4 mx-auto">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                              Step {index + 1}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                        {index < appSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                              <ArrowRight className="w-6 h-6 text-gray-400" />
                            </div>
                        )}
                      </div>
                  );
                })}
              </div>
            </div>

            {/* DevOps Steps */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('how_it_works.devops.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('how_it_works.devops.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {devopsSteps.map((step, index) => {
                  const Icon = devopsIcons[index];
                  return (
                      <div key={index} className="relative">
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 mx-auto">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                              Step {index + 1}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                        {index < devopsSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                              <ArrowRight className="w-6 h-6 text-gray-400" />
                            </div>
                        )}
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
