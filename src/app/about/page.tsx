"use client"
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-black/70 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our E-Shop</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                    Your ultimate destination for premium products, seamless shopping, and unmatched customer service.
                </p>
            </div>

            {/* Our Story / Mission Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story & Mission</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Founded with a passion to simplify online shopping, we started as a small team with a big dream:
                        to bring high-quality products directly to your doorstep without any hassle.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to provide an exceptional shopping experience by offering curated collections,
                        affordable pricing, and lightning-fast delivery. We believe in building trust through transparency
                        and quality.
                    </p>
                </div>
                <div className=" h-64 md:h-70 rounded-lg flex items-center justify-center text-gray-500 shadow-md">
                    {/* Apni ekhane bhalo ekta image boshate paren */}
                    <span className="text-lg font-semibold"><img src="/image.png" alt="" /></span>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white py-16 border-t border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">✨</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
                            <p className="text-gray-600 text-sm">We source only the best products from trusted manufacturers to ensure top-notch quality.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">⚡</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Secure Delivery</h3>
                            <p className="text-gray-600 text-sm">Your orders are packed with care and shipped swiftly, ensuring they reach you safely and on time.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">🤝</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                            <p className="text-gray-600 text-sm">Our dedicated customer support team is always ready to assist you with any queries or concerns.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Call to Action */}
            <div className="max-w-4xl mx-auto text-center py-16 px-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to start shopping?</h3>
                <p className="text-gray-600 mb-6">Explore our latest collections and find exactly what you need today.</p>
                <Link href="/#products">
                    <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;