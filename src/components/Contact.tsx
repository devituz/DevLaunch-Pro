import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Send, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
// dd
const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: null, message: '' });

    const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    if (!telegramBotToken || !telegramChatId) {
      setFeedback({ type: 'error', message: t('contact.form.error_message') });
      setIsSubmitting(false);
      console.error('Telegram bot token or chat ID is missing. Check .env file.');
      return;
    }

    // Debug service value and translation
    console.log('Service value:', formData.service);
    const serviceTranslation = t(`contact.form.service_options.${formData.service}`, formData.service);
    console.log('Service translation:', serviceTranslation);

    const messageText = `
        <b>New Contact Form Submission:</b>
        <b>Name:</b> ${formData.name}
        <b>Phone:</b> ${formData.phone}
        <b>Email:</b> ${formData.email}
        <b>Service:</b> ${serviceTranslation}
        <b>Message:</b> ${formData.message}
      `;

    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: telegramChatId,
        text: messageText,
        parse_mode: 'HTML',
      });
      if (response.status === 200) {
        setFeedback({ type: 'success', message: t('contact.form.success_message') });
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error: any) {
      console.error('Error sending message to Telegram:', error.response?.data || error.message);
      setFeedback({ type: 'error', message: t('contact.form.error_message') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFeedback({ type: null, message: '' });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('contact.telegram_title'),
      value: import.meta.env.VITE_TELEGRAM_USERNAME || '@devit_uz',
      link: import.meta.env.VITE_TELEGRAM_USERNAME || '@devit_uz',
      color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900',
      description: t('contact.telegram_description'),
    },
    {
      icon: Phone,
      title: t('contact.phone_title'),
      value: import.meta.env.VITE_PHONE_NUMBER || '+998 88 944 24 02',
      link: `tel:${import.meta.env.VITE_PHONE_NUMBER || '+998889442402'}`,
      color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900',
      description: t('contact.phone_description'),
    },
    {
      icon: Mail,
      title: t('contact.email_title'),
      value: import.meta.env.VITE_EMAIL_ADDRESS || 'dev.shohbozbek.uz@gmail.com',
      link: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS || 'dev.shohbozbek.uz@gmail.com'}`,
      color: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900',
      description: t('contact.email_description'),
    },
  ];

  return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {t('contact.get_in_touch')}
                </h3>

                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                        <a
                            key={index}
                            href={method.link}
                            className="flex items-center p-6 bg-white dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                        >
                          <div
                              className={`w-14 h-14 rounded-xl flex items-center justify-center mr-6 ${method.color} group-hover:scale-110 transition-transform`}
                          >
                            <IconComponent className="w-7 h-7" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {method.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">{method.value}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                          </div>
                        </a>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-600">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {t('contact.response_time')}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{t('contact.response_description')}</p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {t('contact.send_message')}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.form.name_label')} *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={t('contact.form.name_placeholder')}
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.form.phone_label')} *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={t('contact.form.phone_placeholder')}
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.form.email_label')} *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={t('contact.form.email_placeholder')}
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.form.service_label')} *
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">{t('contact.form.service_placeholder')}</option>
                      <option value="app-publishing">{t('contact.form.service_options.app_publishing')}</option>
                      <option value="devops-basic">{t('contact.form.service_options.devops_basic')}</option>
                      <option value="devops-pro">{t('contact.form.service_options.devops_pro')}</option>
                      <option value="bot-hosting">{t('contact.form.service_options.bot_hosting')}</option>
                      <option value="custom">{t('contact.form.service_options.custom')}</option>
                    </select>
                  </div>

                  <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('contact.form.message_label')} *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={t('contact.form.message_placeholder')}
                    />
                  </div>

                  {feedback.message && (
                      <p
                          className={`text-sm text-center ${
                              feedback.type === 'success' ? 'text-green-600' : 'text-red-600'
                          }`}
                      >
                        {feedback.message}
                      </p>
                  )}

                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 group ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    <span>{isSubmitting ? t('contact.form.submitting') : t('contact.form.submit_button')}</span>
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {t('contact.telegram_cta')}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;