import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Privacy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-gray-50 px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        VRpro.ro is committed to protecting your privacy by adhering to our
        privacy policy. This privacy policy ("Policy") outlines the types of
        information we collect, how we use it, and the rights you have in
        relation to that information. By using this site, you agree to the terms
        and conditions of the policy.
      </p>

      <p className="mb-6">
        In accordance with the Data Protection Directive (95/46/EC)
        ("Directive"), VRpro.ro is considered a "data controller" of your
        personal data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Collection and Use of Personal Information
      </h2>
      <p className="mb-6">
        We collect and store personal information about you, including (but not
        limited to) your name, address, email address, and phone and fax numbers
        ("Personal Data"). We obtain your personal information from the
        following sources:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          If you voluntarily provide us with information by filling out contact
          forms on some of the websites listed in the appendix to this privacy
          policy (collectively referred to as "websites" and each individually
          as "site"). These may include information provided at the time of
          placing an order for purchasing our products, signing up for our
          newsletter, and/or communicating with us.
        </li>
        <li>Business transactions with us.</li>
        <li>
          Your browser when you visit our site, and the browser interacts with
          us. This information may be processed and used by us through
          analytical tools like Google Analytics.
        </li>
      </ul>

      <p className="mb-6">
        We use your personal information to ensure that the content on our
        websites is presented in the most effective way for you and your
        computer, to provide information, products, or services you want, or
        which we believe may be of interest to you (if you agreed to this), to
        fulfill obligations arising from contracts between you and us, to allow
        you to participate in interactive features of our services, and to
        notify you about changes to our service. You have the right to refuse
        direct marketing communications.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Children</h2>
      <p className="mb-6">
        We require the consent of a parent, guardian, or teacher during the
        registration process of any child under the age of 13 on our website.
      </p>
      <p className="mb-6">Parents, guardians, and teachers can:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>View, edit, and delete the child’s profile information;</li>
        <li>
          Choose to be notified when the child makes any changes to their
          account or registration;
        </li>
        <li>
          Delete the child’s account using our tools to remove the profile.
        </li>
      </ul>

      <p className="mb-6">
        During the registration process, we will ask the parent, guardian, or
        teacher to give consent to receive information about special offers and
        for other marketing purposes related to the child. We will not request
        more personal information from children under the age of 13 than is
        necessary for the activity they are participating in.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Sharing Personal Data</h2>
      <p className="mb-6">
        We do not transfer your personal information to third parties except in
        the following cases:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          We may provide personal information when we believe it is necessary to
          comply with the law, enforce our terms of use, or protect the rights
          of our customers or third parties.
        </li>
        <li>
          We do not sell your personal information to third parties. However, we
          may provide personal information to a new owner in the event of the
          sale of a portion or the entire company (personal information may be
          one of the business assets transferred to the buyer).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
      <p className="mb-6">
        We take all reasonable steps to ensure that any personal information
        sent to us through our websites remains confidential. We have strict
        security procedures in place regarding the storage and disclosure of
        personal information. When you select a password for access to a portion
        of our site, you are responsible for maintaining the confidentiality of
        that password. Please do not share your password with anyone.
      </p>
      <p className="mb-6">
        The personal information we collect from you may be transferred and
        stored in a location outside the European Economic Area (EEA). It may
        also be processed by staff working outside the EEA for us or one of our
        suppliers. These staff may be involved in the processing of your order,
        payment data, and providing support services, among other tasks.
        Switzerland is considered by the European Community to provide adequate
        protection for individuals' rights and freedoms concerning the
        processing of personal data. By submitting your personal information,
        you consent to this transfer, storage, and processing of your personal
        data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-6">
        You have the right to access the personal information we store about
        you. Any such access request will be subject to the maximum fees
        prescribed by law in your country or a flat fee of €15 (fifteen euros)
        per request if no such fee exists. This fee is necessary to cover the
        costs of providing the information we hold about you. You have the right
        to correct errors in your personal data. It is your responsibility to
        ensure that we have the correct contact details. This will enable us to
        offer you the best service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
      <p className="mb-6">
        When you first use the site, cookies will be stored on your hard drive.
        The next time you visit our site (using the same computer), our server
        will recognize the cookie and provide us with information about your
        last visit. If you do not want cookies to be stored on your hard drive,
        you must select the appropriate options in your web browser. However,
        please note that this may prevent the site from functioning properly or
        may completely prevent its use.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Questions/Requests</h2>
      <p className="mb-6">
        Please address any questions or requests regarding our privacy policy to
        info@voidshift.com or via our contact form.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
      <p className="mb-6">
        This policy is part of the Terms of Use that govern the use of the
        website (both of which may be changed or updated from time to time
        without notice). By using this site, you accept the terms of use and the
        terms of this privacy policy. Your use of your personal information by
        us is governed by the terms and conditions that apply to the use of the
        site and the current privacy policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Protecting Privacy</h2>
      <p className="mb-6">
        Please contact us immediately if you are dissatisfied, and we are
        confident we can resolve any issues or concerns you may have in this
        regard.
      </p>
    </div>
  );
};

export default Privacy;
