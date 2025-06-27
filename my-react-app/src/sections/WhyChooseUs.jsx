import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Clock, Briefcase, Award, CheckCircle, FileQuestionMarkIcon, CircleQuestionMark } from 'lucide-react';

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const features = [
        {
            icon: Users,
            title: "Expert Trainers",
            description: "Learn from top-tier professionals who bring real-world experience and industry insights into every session.",
        },
        {
            icon: BookOpen,
            title: "Live Project Training",
            description: "Build real applications with hands-on training that mirrors actual development environments.",
        },
        {
            icon: Clock,
            title: "Flexible Schedules",
            description: "Choose from online or offline batches with timings that fit your routine — perfect for students and working professionals.",
        },
        {
            icon: Briefcase,
            title: "Placement & Interview Prep",
            description: "Receive 100% placement support, mock interviews, and personalized guidance to crack your dream job.",
        },
        {
            icon: Award,
            title: "Career-Boosting Certifications",
            description: "Earn industry-recognized certificates that add strong credibility to your resume and job profile.",
        },
        {
            icon: CircleQuestionMark,
            title: "Doubt Solving Support",
            description: "Get one-on-one help via WhatsApp, Zoom, or in-class sessions to clear any roadblocks instantly.",
        }
    ];

    const stats = [
        { number: "10K+", label: "Successful Students" },
        { number: "100%", label: "Practical Training" },
        { number: "4.8/5⭐", label: "Reviews" },
        { number: "100%", label: "Placement Support" }
    ];

    return (
        <section className="py-22 bg-blue-50 relative overflow-hidden">
            <div className="container mx-auto px-20">

                {/* Main Content Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative">

                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-pink-600">JustAcademy</span>?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover what sets us apart in the IT training landscape
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className=" hover:shadow-md transition-all duration-100 transform hover:-translate-y-2 rounded-xl px-4 py-4 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 shadow-sm border-gray-100 border-1">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={` text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 ">
                                    {stat.number}
                                </div>
                                <div className="text-base font-semibold text-gray-900 mb-1">
                                    {stat.label}
                                </div>
                                {stat.sublabel && (
                                    <div className="text-sm text-blue-600">
                                        {stat.sublabel}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-100 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <div className="inline-flex gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                                Get Started
                            </button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                                </svg>
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Student Profile Images (similar to your design) */}
                    {/* <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                            ))}
                        </div> */}
                        {/* <div className="text-base">
                            <div className="font-semibold text-gray-900">10K+ Students</div>
                            <div className="text-blue-600 text-sm">have already launched their careers with JustAcademy</div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;