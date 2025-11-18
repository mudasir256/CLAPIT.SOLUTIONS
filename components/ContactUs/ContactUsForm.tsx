"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMessage = `
       Message: ${message}
    📨 User Email: ${email}
    👤 Full Name: ${name}
    👤 Phone Number: ${phone}
  `;
    const templateParams = {
      to_name: "Contact Us Form",
      from_name: name,
      from_email: email,
      message: finalMessage,
      phone: phone,
      newsletter: newsletter ? "Yes" : "No",
    };
    emailjs
      .send(
        "service_bpdntcq",
        "template_76h14oh",
        templateParams,
        "xA2IfrQ-V9nNTzS2-")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setNewsletter(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white via-secondary/5 to-secondary/10 rounded-3xl shadow-lg border border-secondary/10 p-6 sm:p-8 lg:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contact Our Team</h1>
      <span className="block w-20 h-[1px] bg-secondary mb-6"></span>

      <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-white text-gray-800 rounded-lg border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-white text-gray-800 rounded-lg border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 bg-white text-gray-800 rounded-lg border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message*"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 bg-white text-gray-800 rounded-lg border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
          ></textarea>

          <label className="flex items-center text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              name="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="w-5 h-5 mr-2 accent-secondary cursor-pointer"
            />
            <span className="text-sm">Useful insights only and frequency just right.</span>
          </label>

          <button
            type="submit"
            className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-secondary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Send
          </button>
        </form>

      <ToastContainer />
    </div>
  );
};

export default ContactUsForm;
