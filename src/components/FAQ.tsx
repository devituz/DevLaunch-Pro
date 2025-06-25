import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { t } = useTranslation();

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
        prev.includes(index)
            ? prev.filter((item) => item !== index)
            : [...prev, index]
    );
  };

  // Fetch FAQ items from translations
  const faqs = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
      <section id="faq" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('faq.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                  <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>

                    {openItems.includes(index) && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                    )}
                  </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('faq.still_have_questions')}
              </p>
              <a
                  href="https://t.me/devit_uz"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                {t('faq.contact_cta')}
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FAQ;