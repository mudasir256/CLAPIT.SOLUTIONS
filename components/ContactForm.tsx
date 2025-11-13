import Link from 'next/link';
import { useState } from 'react';

interface ContactFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onBack: () => void;
  onSubmit: (formData: {
    fullName: string;
    workEmail: string;
    agreeToTerms: boolean;
  }) => void;
}

const ContactForm = ({
  title,
  subtitle,
  buttonText,
  onBack,
  onSubmit
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2 className="text-2xl  font-bold mb-2 text-secondary ">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full name*"
            className="w-full p-3 border-1 bg-light text-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleInputChange}
            placeholder="Work email*"
            className="w-full p-3 border-1 bg-light text-dark rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="h-4 w-4 text-secondary outline-none"
            required
          />
          <label className="text-sm text-gray-600">
            I agree with <Link href="/terms" className="text-secondary light:underline">Terms & Conditions</Link>.
          </label>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg light:bg-gray-300 transition-all duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-secondary text-white rounded-lg light:bg-secondary transition-all duration-300"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
