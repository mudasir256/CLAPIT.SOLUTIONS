const RefundPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-200 to-[#feeae6] text-[#1D1D1F] px-6 flex flex-col justify-center pt-40 pb-20">
      <h1 className="text-6xl font-bold text-center mb-20">Refund Policy</h1>
      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <h2 className="font-semibold text-2xl">General Terms</h2>
          <p className="text-lg">
            All payments made through the CLAPIT SOLUTIONS platform are securely processed via Stripe. We guarantee a full refund for all subscriptions and trial periods purchased directly through our website, provided the refund request is submitted within 7 days of the original transaction date.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Refund Exclusions</h2>
          <p className="text-lg mb-2">CLAPIT SOLUTIONS reserves the right to deny refund requests in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>When a user attempts to tamper with, compromise, or damage CLAPIT SOLUTIONS systems, data, or brand integrity.</li>
            <li>If the service has been resold, redistributed, or transferred to third parties in violation of our terms of service.</li>
            <li>In cases of detected fraudulent activity, including but not limited to affiliate fraud, chargeback abuse, or fake transactions.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">How to Request a Refund</h2>
          <p className="text-lg">
            To request a refund, please send an email to{" "}
            <a
              href="mailto:CLAPIT SOLUTIONSsolutions@gmail.com"
              className="text-secondary underline"
            >
              CLAPIT SOLUTIONSsolutions@gmail.com
            </a>{" "}
            using the same email address associated with your original payment transaction.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl">Refund Request Requirements</h2>
          <p className="text-lg mb-2">Your refund request email must include the following information:</p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>The email address used for the original payment transaction.</li>
            <li>The exact transaction date and transaction ID (if available).</li>
            <li>A clear and detailed explanation of the reason for your refund request.</li>
          </ul>
          <p className="text-lg mt-2">
            All refund requests will be reviewed and processed within 3 business days of receipt. We will respond to your request via email with the outcome and any additional information required.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;
