import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For loading feedback
  const [error, setError] = useState(''); // To show specific errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzzgoybe', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        // Handle server-side errors from Formspree
        const errorData = await response.json();
        const errorMessage = errorData.errors?.map(err => err.message).join(', ') || 'Something went wrong.';
        setError(`❌ Error: ${errorMessage}`);
      }
    } catch (err) {
      // Handle network errors
      setError('❌ Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      // Responsive padding
      className="py-20 px-4 sm:px-6 lg:px-8 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        // Responsive font size
        className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-cyan-400 mb-8"
      >
        Get in Touch
      </motion.h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold">✅ Thank You!</h3>
          <p className="mt-2">Your message has been sent successfully. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Form fields are fine, no major changes needed for responsiveness */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>

          {/* Error message display */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            // Responsive width and improved styling
            className="w-full sm:w-auto bg-blue-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:disabled:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;