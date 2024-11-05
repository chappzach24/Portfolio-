import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.sendForm(
        'service_zqo65vr',
        'template_paudrir',
        form.current,
        'I_71HROxeAklD9KRS'
      );

      if (result.text === 'OK') {
        setStatus('success');
        form.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full bg-[#92AFD7] flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
        
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-white/80 mb-1">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white text-white placeholder-white/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-white/80 mb-1">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white text-white placeholder-white/50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-white text-white placeholder-white/50"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center px-4 py-2 bg-white text-[#92AFD7] rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 p-4 bg-white/20 text-white rounded-md">
            Message sent successfully!
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 p-4 bg-white/20 text-white rounded-md">
            Failed to send message. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;