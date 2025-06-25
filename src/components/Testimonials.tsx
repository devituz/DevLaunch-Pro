import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Mobile App Developer',
      company: 'TechStart Inc.',
      content: 'DevLaunch Pro made publishing my first Android app incredibly smooth. The full package service saved me weeks of work, and the app was live within 24 hours!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'The DevOps service is a game-changer. They deployed our entire web application with CI/CD pipeline in just one day. Professional, fast, and reliable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Full Stack Developer',
      company: 'CodeCraft Solutions',
      content: 'I\'ve used their services for multiple projects. The Telegram bot hosting is excellent, and the automatic deployment from GitHub saves me hours every week.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'Digital Ventures',
      content: 'Outstanding service! They handled our app publishing with complete professionalism. The ASO optimization really helped our app get discovered.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Kim',
      role: 'Indie Developer',
      company: 'Solo Projects',
      content: 'As a solo developer, I don\'t have time for DevOps complexities. Their PRO bundle gave me everything I needed to focus on coding while they handled deployment.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Thompson',
      role: 'Tech Entrepreneur',
      company: 'NextGen Apps',
      content: 'The transfer service is brilliant! They published our app quickly, and when we were ready, they transferred it to our account seamlessly. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied developers and startups who trust us with their digital launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 dark:text-blue-800" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-full px-6 py-3 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700 object-cover"
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              500+ happy clients and counting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;