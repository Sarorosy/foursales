import React from 'react';
import Navbar from './Navbar';
import ResponsibleFooter from './ResponsibleFooter';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="terms-of-service bg-white max-w-5xl mx-auto py-12 px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
        
        <section className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            Welcome to SocialRecoveries.com. These Terms of Service ("Terms") govern your access to and use of our website and services ("Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Use of Services</h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">1.1 Eligibility</h3>
          <p className="text-gray-600 leading-relaxed">
            You must be at least 18 years old to use our Services. By using our Services, you represent that you meet this requirement.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">1.2 Account Responsibilities</h3>
          <p className="text-gray-600 leading-relaxed">
            You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">1.3 Prohibited Activities</h3>
          <p className="text-gray-600 leading-relaxed">You agree not to:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Use the Services for any illegal purpose.</li>
            <li>Violate any applicable laws or regulations.</li>
            <li>Attempt to gain unauthorized access to any part of the Services.</li>
            <li>Transmit any malware, viruses, or other harmful code.</li>
            <li>Engage in any activity that disrupts or interferes with the Services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Content and Intellectual Property</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">2.1 Ownership of Content</h3>
          <p className="text-gray-600 leading-relaxed">
            All content provided on SocialRecoveries.com, including text, images, logos, and designs, is the property of Social Recoveries or its licensors. You may not use, copy, or distribute any content without our express written permission.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">2.2 User-Generated Content</h3>
          <p className="text-gray-600 leading-relaxed">
            You retain ownership of any content you submit to SocialRecoveries.com. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute the content in connection with our Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Disclaimers</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">4.1 No Warranties</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Services are provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Services will be uninterrupted or error-free.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">4.2 Limitation of Liability</h3>
          <p className="text-gray-600 leading-relaxed">
            Social Recoveries will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Indemnification</h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to indemnify and hold harmless Social Recoveries, its affiliates, and employees from any claims, losses, liabilities, and expenses arising from your use of the Services or violation of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modifications to the Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms from time to time. Any changes will be effective immediately upon posting. Your continued use of the Services after changes are posted constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <p className="text-gray-600 leading-relaxed">
            Social Recoveries<br />
            Email: <a href="mailto:info.socialrecoveries@gmail.com" className="text-blue-500 hover:text-blue-700">info.socialrecoveries@gmail.com</a>
          </p>
        </section>
      </div>
      <ResponsibleFooter />
    </>
  );
};

export default TermsOfService;
