import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API endpoint submission logic here
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Contact Information */}
        <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Get in touch</h2>
            <p className="mt-4 text-blue-100 text-lg">
              Have questions about our citizen services or system features? We are here to help.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📍</span>
              <span className="text-blue-100">123 Government Plaza, City Center</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📞</span>
              <span className="text-blue-100">+1 (555) 019-2834</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">✉️</span>
              <span className="text-blue-100">support@citizenportal.gov</span>
            </div>
          </div>

          <div className="mt-8 text-xs text-blue-200">
            © {new Date().getFullYear()} Citizen Dashboard. All rights reserved.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl animate-bounce">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-600">
                Thank you for contacting us. Our team will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;
