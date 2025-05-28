import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="container mt-5">
      <Helmet>
        <title>Privacy Policy – Mobile Store</title>
        <meta name="description" content="Learn about our privacy practices, cookie use, and GDPR compliance." />
      </Helmet>

      <h2 className="mb-4">Privacy Policy</h2>
      <p>
        At Mobile Store, we value your privacy. This policy outlines how we handle your personal data, usage information, and cookies.
      </p>

      <h4>1. What We Collect</h4>
      <ul>
        <li>Anonymous page views, product views, and events (via Google Analytics)</li>
        <li>Cookies that store your preferences</li>
        <li>Login session information (stored securely using HttpOnly cookies)</li>
      </ul>

      <h4>2. How We Use It</h4>
      <ul>
        <li>Improve product offerings and site experience</li>
        <li>Understand popular products and interactions</li>
        <li>Maintain secure user authentication</li>
      </ul>

      <h4>3. Cookie Usage</h4>
      <p>
        We use a cookie banner to ask for your consent. You may revoke or change your consent at any time by clearing browser cookies.
      </p>

      <h4>4. Google Analytics & GTM</h4>
      <p>
        We use Google Tag Manager to manage analytics tags. No personal information (like name or email) is sent to Google Analytics.
      </p>

      <h4>5. Contact</h4>
      <p>
        For any questions about your data, please contact us at <strong>privacy@mobilestore.com</strong>.
      </p>
    </div>
  );
};

export default Privacy;
