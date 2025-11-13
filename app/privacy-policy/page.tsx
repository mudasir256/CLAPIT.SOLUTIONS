const PrivacyPolicy = () => {
  return (
   <div className="bg-gradient-to-br from-gray-200 to-[#feeae6] text-[#1D1D1F] px-6 flex flex-col justify-center pt-40 pb-20">
      <h1 className="text-6xl font-bold text-center mb-20">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <h2 className="font-semibold text-2xl">Introduction</h2>
          <p className="text-lg">
            CLAPIT SOLUTIONS Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the CLAPIT SOLUTIONS website and is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Personal information including your name, email address, phone number, and billing information.</li>
            <li>Usage data such as browser type, device information, pages visited, time spent on pages, and interaction patterns.</li>
            <li>Cookies and similar tracking technologies that help us improve your user experience and analyze website performance.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>To operate, maintain, and improve our services and website functionality.</li>
            <li>To provide customer support, process transactions, and manage your account.</li>
            <li>To send you important notifications, updates, and marketing communications (with your consent).</li>
            <li>To comply with legal obligations, enforce our terms of service, and protect our rights and interests.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Refund Policy</h2>
          <p className="text-lg">
            All payments are securely processed through Stripe. Refund requests must be submitted within 7 days of the original transaction date. We guarantee a full refund for all subscriptions or trial periods purchased directly through the CLAPIT SOLUTIONS website, subject to the terms and conditions outlined below.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">
            Refund Request Exclusions
          </h2>
          <p className="text-lg mb-2">CLAPIT SOLUTIONS reserves the right to reject refund requests in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Intentional misuse of services, hacking attempts, or actions that damage our reputation or business operations.</li>
            <li>Unauthorized resale or redistribution of CLAPIT SOLUTIONS services to third parties.</li>
            <li>Fraudulent activity, including but not limited to affiliate fraud, chargeback abuse, or payment fraud.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Refund Request Procedure</h2>
          <p className="text-lg">
            To request a refund, please send an email to{" "}
            <a
              href="mailto:CLAPIT SOLUTIONSsolutions@gmail.com"
              className="text-secondary underline"
            >
              CLAPIT SOLUTIONSsolutions@gmail.com
            </a>{" "}
            using the same email address associated with your original payment.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Refund Request Requirements</h2>
          <p className="text-lg mb-2">Your refund request email must include the following information:</p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Be sent from the email address used for the original payment transaction.</li>
            <li>Include the transaction date, transaction ID (if available), and a clear reason for the refund request.</li>
          </ul>
          <p className="text-lg mt-2">
            All refund requests will be reviewed and processed within 3 business days of receipt.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Your Data Protection Rights</h2>
          <p className="text-lg mb-2">You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>The right to access, update, or request deletion of your personal data.</li>
            <li>The right to withdraw consent and object to certain types of data processing.</li>
            <li>The right to request data portability and restrict how we use your personal information.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Data Security</h2>
          <p className="text-lg">
            We implement industry-standard security measures and best practices to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your data.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Policy Updates</h2>
          <p className="text-lg">
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Contact Us</h2>
          <p className="text-lg">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at{" "}
            <a
              href="mailto:CLAPIT SOLUTIONSsolutions@gmail.com"
              className="text-secondary underline"
            >
              CLAPIT SOLUTIONSsolutions@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;