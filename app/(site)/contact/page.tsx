"use client";
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Edit3, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-600 font-medium">
              Contact
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
            Let's Create<br />Something Great
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl font-light leading-relaxed">
            Ready to bring your vision to life? Drop me a message and let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-900">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-black p-12">
            <div className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-4">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-4">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="group px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Send Message
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <aside className="bg-black p-12 space-y-12">
            {/* Direct Contact */}
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-8">
                Direct Contact
              </h2>
              <div className="space-y-8">
                <a 
                  href="mailto:niyiroyce@gmail.com"
                  className="group block"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Mail className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">
                        Email
                      </div>
                      <div className="text-white text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                        niyiroyce@gmail.com
                      </div>
                    </div>
                  </div>
                </a>

                <a 
                  href="tel:+2348118482904"
                  className="group block"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Phone className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">
                        Phone
                      </div>
                      <div className="text-white text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                        +234 811 848 2904
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-900"></div>

            {/* Social Links */}
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-8">
                Elsewhere
              </h2>
              <nav className="space-y-1">
                <a 
                  href="https://linkedin.com/in/neyfrosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>

                <a 
                  href="https://github.com/niyiroyce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>

                <a 
                  href="https://twitter.com/pyniyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">Twitter</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>

                <a 
                  href="https://medium.com/@niyi.py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Edit3 className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">Medium</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              </nav>
            </div>

            {/* Response Badge */}
            <div className="pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-xs font-light">
                  Usually responds within 24 hours
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}