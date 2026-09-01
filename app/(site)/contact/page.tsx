"use client";
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348118482904';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const isFormValid = Object.values(formData).every((value) => value.trim().length > 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setStatus('error');
      return;
    }

    setIsSending(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.whatsappUrl) {
        window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
          <div className="lg:col-span-2 bg-black p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
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
                  required
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

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
                  required
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

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
                  required
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Project inquiry"
                />
              </div>

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
                  required
                  className="w-full bg-black border-b border-gray-900 text-white text-base font-light py-3 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={isSending || !isFormValid}
                  className="group px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 disabled:bg-gray-900 disabled:text-gray-600 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>

                {status === 'success' && (
                  <div className="border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-gray-200">
                    Message drafted in WhatsApp. Your details are ready to send.
                  </div>
                )}

                {status === 'error' && (
                  <div className="border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-gray-300">
                    Please complete all fields before sending, or try again.
                  </div>
                )}
              </div>
            </form>
          </div>

          <aside className="bg-black p-12 space-y-12">
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-8">
                Direct Contact
              </h2>
              <div className="space-y-8">
                <a href="mailto:niyiroyce@gmail.com" className="group block">
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

                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="group block">
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

            <div className="border-t border-gray-900"></div>

            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-gray-600 font-medium mb-8">
                Elsewhere
              </h2>
              <nav className="space-y-1">
                <a href="https://linkedin.com/in/neyfrosh" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>

                <a href="https://github.com/niyiroyce" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>

                <a href="https://twitter.com/pyniyi" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-gray-900 hover:border-gray-800 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-gray-700" />
                    <span className="text-white text-sm font-light">Twitter</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}