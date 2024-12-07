import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GiftVoucher = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="body min-h-[100vh] text-gray-50">Gift Voucher</div>;
};

export default GiftVoucher;
