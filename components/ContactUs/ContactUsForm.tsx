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
    <div className="relative w-full p-6 rounded lg:sticky lg:top-24 lg:bottom-auto bg-dark backdrop-blur-sm shadow-md z-30 max-w-full md:max-w-[500px]">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-secondary">Contact Our Team</h1>
        <span className="block w-20 h-[1px] bg-secondary mb-4"></span>

        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message*"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none"
          ></textarea>

          <label className="flex items-center text-gray-400">
            <input
              type="checkbox"
              name="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="w-5 h-5 mr-2 accent-secondary"
            />
            <span>Useful insights only and frequency just right.</span>
          </label>

          <button
            type="submit"
            className="w-full bg-secondary text-light font-bold py-3 rounded-md hover:bg-light hover:text-dark transition duration-300"
          >
            Send
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactUsForm;
