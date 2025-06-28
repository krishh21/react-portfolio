import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2tyw4tc', 'template_fekihbi', form.current, 'j0p2oAyH7gU3opyKv')
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
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
        {sent && <p className="text-green-500 mt-4 animate-fade-in">Message sent successfully!</p>}

        <a
          href="https://drive.google.com/file/d/1oZlltLX6JOn_yc5e9P-lPpVnDoVVMM0v/view"
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
