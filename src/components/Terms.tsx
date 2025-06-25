import React from 'react';
import { Shield, AlertTriangle, Clock, CheckCircle, XCircle } from 'lucide-react';

const Terms = () => {
  const terms = [
    {
      icon: Shield,
      title: 'Verified Developer Account',
      description: 'Apps are published using our verified developer account for faster approval and better credibility.',
      type: 'info'
    },
    {
      icon: XCircle,
      title: 'Account Access Policy',
      description: 'No access will be granted to our developer account for security reasons and account protection.',
      type: 'warning'
    },
    {
      icon: CheckCircle,
      title: 'Google Play Compliance',
      description: 'Your app must follow Google Play Store policies. No spam, harmful, or illegal content allowed.',
      type: 'success'
    },
    {
      icon: Clock,
      title: 'Transfer Deadline',
      description: 'If the app is not transferred within 2 months, it will be frozen to protect our account.',
      type: 'warning'
    },
    {
      icon: AlertTriangle,
      title: 'No Guarantee Policy',
      description: 'While we provide full support, we cannot guarantee approval if Google blocks the app due to policy violations.',
      type: 'error'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-blue-600 bg-blue-100';
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'info': return 'border-blue-200 hover:border-blue-300';
      case 'success': return 'border-green-200 hover:border-green-300';
      case 'warning': return 'border-yellow-200 hover:border-yellow-300';
      case 'error': return 'border-red-200 hover:border-red-300';
      default: return 'border-gray-200 hover:border-gray-300';
    }
  };

  return (
    <section id="terms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Terms & Important Notes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these important terms and conditions before using our services. 
            Transparency is key to our professional relationship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terms.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <div key={index} className={`bg-white rounded-xl p-6 border-2 ${getBorderColor(term.type)} transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getIconColor(term.type)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{term.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{term.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border-2 border-blue-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We are committed to providing professional, secure, and reliable app publishing services. 
                Our team works closely with you to ensure your app meets all requirements and gets published successfully. 
                We maintain transparency throughout the process and provide regular updates on your app's status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;