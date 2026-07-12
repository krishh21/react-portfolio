import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const timeoutRef = useRef(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2tyw4tc', 'template_fekihbi', form.current, 'UN8JsvuipsEzwuf8R')
      .then(
        () => {
          showNotification('Message sent successfully!', 'success');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          showNotification('Failed to send message. Please try again.', 'error');
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Me</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">Let's get in touch! Send me a message and I'll respond as soon as possible.</p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-4 text-left animate-fade-in"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:shadow-lg transition duration-300"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:shadow-lg transition duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:shadow-lg transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {notification && (
          <div className={`mt-4 inline-flex items-center rounded-md px-4 py-3 text-sm shadow-lg transition-transform duration-300 ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {notification.message}
          </div>
        )}

        <a
          href="https://docs.google.com/document/d/1JhXnNxdn90lZ6Gs5b8K9R6e4cvvjoDOl/edit?usp=sharing&ouid=113692859891769661336&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-blue-600 hover:underline hover:scale-105 transition-transform"
        >
          📄 Download My Resume
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
