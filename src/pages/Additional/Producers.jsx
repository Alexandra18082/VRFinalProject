import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Producers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="body min-h-[100vh] text-gray-50">Producers</div>;
};

export default Producers;
