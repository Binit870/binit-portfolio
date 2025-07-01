import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    // Replace with your Formspree endpoint
    const response = await fetch('https://formspree.io/f/mzzgoybe', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset(); // clear the form
    } else {
      alert('There was an error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 text-center bg-transparent">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>

      {submitted ? (
        <div className="text-green-600 text-lg font-semibold">
          ✅ Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
