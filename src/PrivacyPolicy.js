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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment To Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to Social Recoveries. In order to better protect your privacy, Social Recoveries provides a description of our information practices, including how we collect information, why we collect it, and how it will be used.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Information Do We Collect?</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information submitted through our contact forms and pages. This information must be expressly and voluntarily provided to us – Social Recoveries does not collect it without you knowingly making the decision to give it to us.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Some of the information you may provide includes your name, email address, and phone number. The information is related to projects, services, and billing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Social Recoveries may collect information regarding third parties that is specifically related to you, your project, or the services you requested.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Do We Use The Information We Collect?</h2>
          <p className="text-gray-600 leading-relaxed">
            The information that Social Recoveries collects is used to provide digital services to you. Some of the ways in which your information could be used include, but are not limited to, web support, customer service, project email updates, newsletters, and direct contact.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Do We Use Cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Social Recoveries uses cookies to remember, understand and save your preferences for future visits to our website. Cookies help us gather data regarding website traffic, engagement, and interactions to provide better online experiences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Remarketing</h2>
          <p className="text-gray-600 leading-relaxed">
            Social Recoveries uses cookies to display remarketing advertisements based on your prior visits to our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Websites</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may provide links to third-party websites, but we do not control their content or privacy policies. Social Recoveries assumes no responsibility for the linked websites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Social Recoveries Is Committed To Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            Social Recoveries has practices in place to safeguard your information. We use secure servers for online credit card transactions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Protecting Children’s Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not collect or maintain information from those we know are under 13. Our website is not structured to attract anyone under the age of 13.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Choices and Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You can opt out of certain activities or stop providing personal information by contacting us.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contacting Social Recoveries</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions regarding our privacy policy, contact us at:
          </p>
          <p className="text-gray-600 leading-relaxed">
            Email: <a href="mailto:business.socialrecoveries@gmail.com" className="text-blue-500 hover:text-blue-700">business.socialrecoveries@gmail.com</a>
          </p>
        </section>
      </div>
      <ResponsibleFooter />
    </>
  );
};

export default PrivacyPolicy;
