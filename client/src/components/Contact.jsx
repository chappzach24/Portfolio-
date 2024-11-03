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
        'service_zqo65vr', // Replace with your EmailJS service ID
        'template_paudrir', // Replace with your EmailJS template ID
        form.current,
        'I_71HROxeAklD9KRS' // Replace with your EmailJS public key
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
      
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          Failed to send message. Please try again.
        </div>
      )}
    </div>
  );
};

export default ContactForm;