import React from 'react';
import { Users, BookOpen, Award, Star } from 'lucide-react';

const AboutUs = () => {
    const stats = [
        { number: '10K+', label: 'Students', icon: Users },
        { number: '50+', label: 'Courses', icon: BookOpen },
        { number: '130+', label: 'Teachers', icon: Users },
        { number: '20+', label: 'Awards', icon: Award }
    ];

    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Front-end Web Designer at Star India',
            content: 'Awesome Experience. I applied for Full-stack development and my experience has been phenomenal & they really do help with placements exceptionally.',
            rating: 5
        },
        {
            name: 'Rahul Kumar',
            role: 'Flutter Developer',
            content: 'I am learning flutter from JustAcademy. They provide very much great environment where people gather and work simultaneously. Totally project based training.',
            rating: 5
        }
    ];

    return (
        <div id="about-us" className="bg-gradient-to-br scroll-mt-16 from-blue-50 to-white py-12">
            {/* Hero Section */}
            <div className="max-w-full px-6 text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    About <span className="text-blue-600">JustAcademy</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
                    At JustAcademy, we are passionate about transforming careers through quality education and practical training.
                    We specialize in comprehensive courses across web development, mobile app development, data science, and emerging technologies.
                    With expert instructors and 100% practical training approach, we bridge the gap between academic learning and industry requirements
                    to help you succeed in today's competitive tech industry.
                </p>
            </div>

            {/* Stats */}
            <div className="max-w-full px-20 mx-auto  mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-full mx-auto px-20 mb-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">What Our Students Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                            <div className="border-t pt-4">
                                <div className="font-semibold text-lg text-gray-800">{testimonial.name}</div>
                                <div className="text-blue-600  text-lg">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-full mx-auto px-20">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
                    <h2 className="text-4xl font-bold mb-3">Ready to Unlock Your Potential?</h2>
                    <p className="text-blue-100 mb-6 text-lg">
                        Join thousands of students who have already launched their careers with JustAcademy.
                    </p>
                    <button className="bg-white text-blue-600 mt-6 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;