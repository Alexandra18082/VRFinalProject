import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Returns = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-white px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6 text-blue-100">
        Returns & Refund Policy
      </h1>

      <p className="mb-6 text-lg text-blue-200">
        We want to ensure you're completely satisfied with your purchase. If you
        are not satisfied with your order, you can return it within 30 days from
        the date of delivery for a full refund or exchange. Below are the
        procedures and requirements for returns:
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-300">
        Return Procedures
      </h2>
      <ul className="list-disc pl-5 mb-4 text-blue-200">
        <li>
          Contact our support team within 30 days of receiving your product.
        </li>
        <li>Provide your order number and reason for the return.</li>
        <li>
          Ensure the product is in its original, unused condition, with all
          packaging and tags intact.
        </li>
        <li>We will provide you with a return shipping label.</li>
        <li>
          Once we receive your return, we will process your refund or exchange.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-blue-300">
        Refund Policy
      </h2>
      <p className="mb-4 text-blue-200">
        Once your return is received and inspected, we will send you an email to
        notify you of the approval or rejection of your refund. If approved,
        your refund will be processed and applied to your credit card or
        original method of payment within a certain amount of days.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-300">Exchanges</h2>
      <p className="mb-6 text-blue-200">
        If you need to exchange an item for the same item (e.g., for a different
        size or color), please contact us first to arrange the exchange. The
        item must be returned in the same condition as it was received.
      </p>

      <p className="mt-8 text-blue-200">
        For further assistance, feel free to reach out to us through our support
        page or contact us directly via phone or email. Thank you for shopping
        with us!
      </p>
    </div>
  );
};

export default Returns;
