'use client';

export default function TermsOfUse() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Terms of Use</h1>
        <p>Last updated: October 23, 2025</p>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using QuicklyTools ("the Service"), you agree to be bound by these Terms of Use ("Terms"). 
          If you do not agree to these Terms, please do not use the Service.
        </p>

        <h2>2. Use of the Service</h2>
        <p>
          The Service provides free online utility tools for personal and non-commercial use. You may use the tools 
          for lawful purposes only. You agree not to:
        </p>
        <ul className="info-list">
          <li>Use the Service in any way that violates applicable laws or regulations.</li>
          <li>Interfere with or disrupt the Service or servers.</li>
          <li>Attempt to gain unauthorized access to any part of the Service.</li>
          <li>Use automated scripts to collect information from the Service.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are owned by QuicklyTools and are 
          protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>4. User Content</h2>
        <p>
          You retain ownership of any content you input into the tools (e.g., text in the word counter). 
          By using the Service, you grant QuicklyTools a worldwide, non-exclusive, royalty-free license to 
          use, store, and process such content solely to provide the Service.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          The Service is provided "as is" without warranties of any kind. QuicklyTools is not liable for any 
          direct, indirect, incidental, or consequential damages arising from your use of the Service.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Changes will be posted on this page with an updated 
          "Last updated" date. Your continued use of the Service constitutes acceptance of the revised Terms.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have questions about these Terms, please contact us at
          quicklytools.contact@gmail.com
        </p>
      </section>
    </div>
  );
}