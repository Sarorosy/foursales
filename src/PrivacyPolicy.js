import React from 'react';
import Navbar from './Navbar';
import ResponsibleFooter from './ResponsibleFooter';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-policy bg-white max-w-5xl mx-auto py-12 px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Effective Date:</h2>
          <p className="text-gray-600 leading-relaxed">
            At Socialrecoveries.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Information:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Name</li>
            <li>Email Address</li>
            <li>Billing Information (e.g., credit card details)</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Non-Personal Information:</h3>
          <p className="text-gray-600 leading-relaxed">
            We also collect non-personal information automatically when you visit our site, such as:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Operating System</li>
            <li>Pages Visited and Time Spent on Each Page</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Service Delivery: To provide, maintain, and improve our services.</li>
            <li>Communication: To respond to your inquiries, send you updates, and provide customer support.</li>
            <li>Transactions: To process payments and send you transaction confirmations.</li>
            <li>Marketing: To send promotional materials and newsletters if you have opted to receive them.</li>
            <li>Analytics: To analyze usage patterns and improve user experience on our website.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Protection and Security</h2>
          <p className="text-gray-600 leading-relaxed">We implement a variety of security measures to maintain the safety of your personal information, including:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Encryption: Sensitive information transmitted online is protected through encryption.</li>
            <li>Access Controls: We restrict access to your personal information to authorized personnel only.</li>
            <li>Data Retention: We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website or conducting our business, under strict confidentiality agreements.</li>
            <li>Legal Compliance: We may disclose your information when required by law or to protect our rights and the rights of others.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">You have several rights concerning your personal information, including:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Access: The right to request copies of your personal information.</li>
            <li>Correction: The right to request corrections of any inaccuracies.</li>
            <li>Deletion: The right to request the deletion of your personal information.</li>
            <li>Objection: The right to object to our processing of your personal information.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">To exercise these rights, please contact us at <a href="mailto:info.socialrecoveries@gmail.com" className="text-blue-500 hover:text-blue-700">info.socialrecoveries@gmail.com</a>.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">Our website uses cookies to enhance user experience. Cookies are small files placed on your device that help us analyze web traffic and improve our services. You can choose to accept or decline cookies through your browser settings.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly for any updates.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">If you have any questions about this Privacy Policy or your personal information, please contact us at:</p>
          <p className="text-gray-600 leading-relaxed">Email: <a href="mailto:info.socialrecoveries@gmail.com" className="text-blue-500 hover:text-blue-700">info.socialrecoveries@gmail.com</a></p>
        </section>

        <section className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Refund Policy</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Refund Eligibility</h2>
          <p className="text-gray-600 leading-relaxed">To qualify for a refund, you must meet the following criteria:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Service Issues: You must inform us within [insert number] days after the service completion if you are dissatisfied.</li>
            <li>Opportunity to Resolve: You must provide us with a chance to address your concerns or rectify any issues before requesting a refund.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Refund Process</h2>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Contact Us: Email us at <a href="mailto:info.socialrecoveries@gmail.com" className="text-blue-500 hover:text-blue-700">info.socialrecoveries@gmail.com</a> with your order number and a detailed description of your issue.</li>
            <li>Review Period: We will review your request and may ask for additional information. This process will take up to [insert number] business days.</li>
            <li>Resolution: We will notify you of our decision regarding your refund. If approved, the refund will be processed back to the original payment method within [insert number] business days.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Non-Refundable Services</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Completed Services: Services that have already been delivered as per the agreement.</li>
            <li>Client-Induced Delays: Delays caused by the client’s actions or lack of response.</li>
            <li>Promotional Services: Any services offered at a discount or through special promotions.</li>
          </ul>
        </section>

      </div>
      <ResponsibleFooter />
    </>
  );
};

export default PrivacyPolicy;
