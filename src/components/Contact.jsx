import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

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
      alert('❌ Error submitting form. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8">Contact Me</h2>

      {submitted ? (
        <div className="text-green-600 text-lg font-medium">
          ✅ Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-5"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
