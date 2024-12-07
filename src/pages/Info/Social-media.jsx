import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SocialMedia = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-gray-50 px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6">Follow Us on Social Media</h1>

      <p className="mb-6 text-lg">
        Stay connected with us through our social media channels! We share the
        latest news, product updates, and exciting content regularly. Join our
        online community and be part of the Voidshift experience.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Social Media Pages</h2>
        <div className="flex space-x-8 justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <img
              src="/pictures/facebook.png"
              alt="Facebook"
              className="w-12 h-12 mb-2 mx-auto"
            />
            <p>Facebook</p>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <img
              src="/pictures/twitter.png"
              alt="Twitter"
              className="w-12 h-12 mb-2 mx-auto"
            />
            <p>Twitter</p>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <img
              src="/pictures/instagram.png"
              alt="Instagram"
              className="w-12 h-12 mb-2 mx-auto"
            />
            <p>Instagram</p>
          </a>
        </div>
      </div>

      <p className="mt-8">
        Be sure to follow us for the latest updates, product launches, and more.
        We look forward to connecting with you online!
      </p>
    </div>
  );
};

export default SocialMedia;
