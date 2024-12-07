import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-100 text-black py-6 px-4 md:px-8 shadow-inner">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Custumoer Service */}
          <div>
            <h3 className="text-lg md:text-xl mb-3 ">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-500 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-blue-500 transition">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg md:text-xl mb-3">Info</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/social-media"
                  className="hover:text-blue-500 transition"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-500 transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="hover:text-blue-500 transition"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional */}
          <div>
            <h3 className="text-lg md:text-xl mb-3">Additional</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/producers"
                  className="hover:text-blue-500 transition"
                >
                  Producers
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-voucher"
                  className="hover:text-blue-500 transition"
                >
                  Gift Voucher
                </Link>
              </li>
              <li>
                <Link
                  to="/special-offers"
                  className="hover:text-blue-500 transition"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg md:text-xl mb-3">SHIFT THROUGH REALITIES</p>
            <p>
              © 2024 VOIDSHIFT.com
              <img
                src="/pictures/3drotatios.png"
                alt=""
                className="w-10 h-10 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
              <p>All rights reserved.</p>
            </p>
          </div>

          <div className="flex justify-end items-center">
            <img
              src="/pictures/man-wearing-vr-headset.png"
              alt=""
              className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-none transform -translate-y-4"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
