import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermsOfUse = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-gray-50 px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6">Terms of Use</h1>

      <p className="mb-6">
        These terms of use govern the access to and use of Voidshift.com's
        website, as well as the purchase of products and services offered by us.
        By accessing or using the Site, you agree to comply with and be bound by
        these Terms. If you do not agree to these Terms, do not use this Site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
      <p className="mb-6">
        VRpro.ro reserves the right to modify, update, or change these Terms at
        any time without prior notice. Any changes to the Terms will be posted
        on this page, and your continued use of the Site after such changes will
        constitute your acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Use of the Site</h2>
      <p className="mb-6">
        You agree to use this Site for lawful purposes only and in a manner that
        does not infringe upon the rights of others or restrict or inhibit their
        use and enjoyment of the Site. You are prohibited from engaging in any
        activity that may damage, disable, overburden, or impair the functioning
        of the Site or interfere with any other user's use of the Site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
      <p className="mb-6">
        In order to make a purchase or access certain features of the Site, you
        may be required to create an account. You are responsible for
        maintaining the confidentiality of your account information and for all
        activities that occur under your account. You agree to immediately
        notify us of any unauthorized use of your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Product Availability</h2>
      <p className="mb-6">
        VRpro.ro strives to ensure the availability of all products listed on
        the Site. However, we do not guarantee the availability of any product,
        and we reserve the right to remove or discontinue any product at any
        time without notice.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Payment and Billing</h2>
      <p className="mb-6">
        All payments made through the Site are processed through secure payment
        gateways. By making a purchase, you agree to provide accurate billing
        information. You are responsible for ensuring the accuracy of your
        payment details.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
      <p className="mb-6">
        VRpro.ro will ship products to the address you provide during the
        checkout process. While we aim to deliver products promptly, we are not
        liable for any delays in shipping or delivery beyond our control.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
      <p className="mb-6">
        Returns and refunds are subject to our return policy. Please review our
        return policy for details on how to return products and request a
        refund. If you are dissatisfied with any product, please contact us for
        assistance.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
      <p className="mb-6">
        Your privacy is important to us. Please review our Privacy Policy to
        understand how we collect, use, and protect your personal information.
        By using the Site, you agree to the collection and use of your data as
        described in the Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        9. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the fullest extent permitted by law, Voidshift.com will not be liable
        for any damages arising from the use or inability to use the Site,
        including but not limited to indirect, incidental, special, or
        consequential damages, loss of data, or loss of profits, even if we have
        been advised of the possibility of such damages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of the jurisdiction in which Voidshift.com operates. Any disputes
        arising out of or relating to these Terms or the use of the Site shall
        be resolved in the courts located within that jurisdiction.
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns about these Terms, please contact
        us via our contact page or email us at info@voidshift.com.
      </p>
    </div>
  );
};

export default TermsOfUse;
