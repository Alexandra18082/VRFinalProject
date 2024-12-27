import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const copyToClipboard = () => {
    const phoneNumber = "0745 333 999";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy phone number: " + err);
      });
  };

  return (
    <div className="body min-h-[100vh] text-white px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6 text-blue-100">Contact Us</h1>

      <p className="mb-6 text-lg text-blue-200">
        We’d love to hear from you! Whether you have questions about our
        products, need technical support, or want to explore collaboration
        opportunities, our team is here to assist you. Get in touch with us
        using the contact form below, or feel free to reach out through our
        social media channels.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">
          Send us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-blue-200 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-blue-200 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 bg-blue-200 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <p className="mb-6 text-blue-200">
        You can also get in touch with us through social media or by phone:
      </p>

      <div
        onClick={copyToClipboard}
        className="text-blue-500 cursor-pointer hover:underline mb-4"
      >
        0745 333 999
      </div>

      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/pictures/facebook.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pictures/twitter.png" alt="Twitter" className="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/pictures/instagram.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
      </div>

      <p className="mt-8 text-blue-200">
        We’ll get back to you as soon as possible. Thank you for reaching out!
      </p>
    </div>
  );
};

export default Contact;
