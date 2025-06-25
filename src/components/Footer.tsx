import React from 'react';
import { Rocket, Mail, MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">{t('footer.brand_name')}</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a
                    href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                    href={import.meta.env.VITE_TELEGRAM_USERNAME}

                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                    href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.services.title')}</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.app_publishing')}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.devops_deployment')}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.bot_hosting')}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.cicd_setup')}</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t('footer.services.pricing')}</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.support.title')}</h3>
              <ul className="space-y-3">
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.faq')}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.contact_us')}</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.how_it_works')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.documentation')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.terms_of_service')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                {t('footer.copyright')}
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">{t('footer.made_with_love')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;