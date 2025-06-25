import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
    const { t } = useTranslation();
    const [activeService, setActiveService] = useState('app-publishing');

    const appPricingTiers = t('pricing.plans.app', { returnObjects: true }).map((tier) => ({
        name: tier.name,
        price: tier.price,
        description: tier.description,
        features: tier.features,
        popular: tier.cta === t('pricing.labels.most_popular'),
        cta: tier.cta,
        recurring: tier.recurring || '',
    }));

    const devopsPricingTiers = t('pricing.plans.devops', { returnObjects: true }).map((tier) => ({
        name: tier.name,
        price: tier.price,
        description: tier.description,
        features: tier.features,
        popular: tier.cta === t('pricing.labels.best_value'),
        cta: tier.cta,
        recurring: tier.recurring || '',
    }));

    const addOns = t('pricing.addons.items', { returnObjects: true });
    const currentTiers = activeService === 'app-publishing' ? appPricingTiers : devopsPricingTiers;

    return (
        <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('pricing.description')}
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2 flex">
                        <button
                            onClick={() => setActiveService('app-publishing')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                activeService === 'app-publishing'
                                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        >
                            {t('pricing.app_publishing')}
                        </button>
                        <button
                            onClick={() => setActiveService('devops')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                activeService === 'devops'
                                    ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        >
                            {t('pricing.devops')}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {currentTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                                tier.popular
                                    ? 'border-blue-500 shadow-xl'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                            }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                        <Star className="w-4 h-4" />
                                        <span>{t('pricing.labels.most_popular')}</span>
                                    </div>
                                </div>
                            )}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{tier.description}</p>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                                    {tier.recurring && (
                                        <span className="text-gray-600 dark:text-gray-300 ml-1">{tier.recurring}</span>
                                    )}
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                    tier.popular
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                                }`}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('pricing.addons.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{t('pricing.addons.description')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {addOns.map((addon, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{addon.name}</h4>
                                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{addon.price}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">{addon.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-16">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('pricing.bonuses.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('pricing.bonuses.description')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t('pricing.bonuses.items', { returnObjects: true }).map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <Check className="w-6 h-6 text-purple-600" />
                                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;