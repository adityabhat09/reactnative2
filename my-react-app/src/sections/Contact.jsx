import React, { useState, useRef } from 'react';
import { MessageCircle, User, Mail, Phone, MessageSquare, Send, MapPin } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-8 h-8" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687" />
    </svg>
);

const Contact = () => {
    const form = useRef();

    const sendemail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_opmzybd',  // wrap these as strings
            'template_wv116ka',
            form.current,
            'zL-QIZHE2XqwI-1MF'
        ).then(
            () => {
                alert("Message sent successfully");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message, please try again. " + error.text);
            }
        );
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '919987184296';
        const message = 'Hi, I am interested in the Android Course. Could you please provide more details?';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div  id="contact-us" className=" scroll-mt-16 relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-200/25 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        GET IN TOUCH
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Contact <span className="text-blue-600">JustAcademy</span>
                    </h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                        Ready to start your Android development journey? Get in touch with us and we'll help you choose the perfect course for your goals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Form - Takes 3 columns */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 relative overflow-hidden">
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl"></div>

                            {/* Floating decorative elements */}
                            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20"></div>
                            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-20"></div>

                            <div className="relative">
                                <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                                {!isSubmitted ? (

                                    <form ref={form} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                                                        placeholder="Enter your email address"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-3">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                                                Message
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={5}
                                                    className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder-gray-400"
                                                    placeholder="Tell us your query..."
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={sendemail}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            <Send className="w-5 h-5 text-lg" />
                                            Send Message
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h4>
                                        <p className="text-gray-600 text-lg">
                                            Thank you for your interest! We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Cards - Takes 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* WhatsApp Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-3xl"></div>
                            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20"></div>

                            <div className="relative text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <WhatsAppIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Course Enquiry</h3>
                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    Have questions? Chat with us directly on WhatsApp for instant support!
                                </p>

                                <button
                                    onClick={handleWhatsAppClick}
                                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Chat on WhatsApp
                                </button>

                                <div className="mt-6 space-y-2 text-sm text-gray-500">
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        +91 99871 84296
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        info@justacademy.co
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl"></div>
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20"></div>

                            <div className="relative text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                                <address className="not-italic text-gray-600 text-lg leading-relaxed">
                                    Office no: 318, Imperia T2 Commercial,<br />
                                    JP-North, Mira Bhayander Rd,<br />
                                    Near Arkade Art Complex,<br />
                                    Vinay Nagar, Kashimira, Mira Road,<br />
                                    Mumbai, Maharashtra 401107
                                </address>
                            </div>
                        </div>

                        {/* Stats Card */}
                        {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent rounded-3xl"></div>
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20"></div>

                            <div className="relative text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <span className="text-white font-bold text-lg">⭐</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="bg-blue-50 rounded-xl p-3">
                                        <div className="font-bold text-blue-700 text-lg">4.8</div>
                                        <div className="text-gray-600">Student Reviews</div>
                                    </div>
                                    <div className="bg-green-50 rounded-xl p-3">
                                        <div className="font-bold text-green-700 text-lg">100%</div>
                                        <div className="text-gray-600">Practical Training</div>
                                    </div>
                                    <div className="bg-purple-50 rounded-xl p-3">
                                        <div className="font-bold text-purple-700 text-lg">10K+</div>
                                        <div className="text-gray-600">Students Placed</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;