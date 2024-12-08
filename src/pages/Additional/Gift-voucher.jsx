import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GiftVoucher = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-neon-blue">
        VR Gift Vouchers
      </h1>
      <div className="space-y-6">
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">
            The Ultimate Gift for VR Enthusiasts
          </h2>
          <p className="text-gray-200 mt-2">
            Unsure what to get your VR-loving friends or family? A VR gift
            voucher lets them explore the latest in virtual reality technology,
            from cutting-edge headsets to immersive accessories.
          </p>
        </div>
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-200 mt-2 space-y-2">
            <li>Choose a voucher amount that suits your budget.</li>
            <li>Send it digitally or print it for a personal touch.</li>
            <li>
              The recipient can redeem it for VR headsets, games, or accessories
              in our store.
            </li>
          </ol>
        </div>
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">
            What Can They Buy?
          </h2>
          <ul className="list-disc list-inside text-gray-200 mt-2 space-y-2">
            <li>Top-of-the-line VR headsets for unparalleled immersion.</li>
            <li>Controllers and accessories for a complete VR setup.</li>
            <li>Exclusive VR-compatible games and experiences.</li>
          </ul>
        </div>
        <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">
            Easy Redemption Process
          </h2>
          <p className="text-gray-200 mt-2">
            The gift voucher includes a unique code that can be entered during
            checkout. It's simple, fast, and ensures they get exactly what they
            want.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftVoucher;
