import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SpecialOffers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="body min-h-[100vh] text-gray-50">Special-offers</div>;
};

export default SpecialOffers;
