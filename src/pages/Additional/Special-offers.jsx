import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SpecialOffers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-neon-blue">
        Special Offers on VR Gear
      </h1>
      <div className="space-y-6">
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">
            Limited-Time Discounts
          </h2>
          <p className="text-gray-200 mt-2">
            Dive into the virtual world without breaking the bank! Check out our
            exclusive discounts on premium VR headsets and must-have
            accessories. Deals valid while supplies last.
          </p>
        </div>
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">
            Bundles You Can't Miss
          </h2>
          <p className="text-gray-200 mt-2">
            Upgrade your setup with our special VR bundles. Get everything you
            need, including headsets, controllers, and games, all at an
            unbeatable price.
          </p>
        </div>
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">
            Flash Sales on Accessories
          </h2>
          <ul className="list-disc list-inside text-gray-200 mt-2 space-y-2">
            <li>High-performance VR controllers at 20% off.</li>
            <li>Comfort-enhancing straps and cases with free shipping.</li>
            <li>Exclusive deals on VR-compatible headphones.</li>
          </ul>
        </div>
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Stay Updated</h2>
          <p className="text-gray-200 mt-2">
            New offers added weekly! Sign up for our newsletter to be the first
            to know about upcoming deals on VR gear and accessories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
