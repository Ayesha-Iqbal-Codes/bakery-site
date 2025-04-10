import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // Replace with your actual values
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact-us" className="w-full bg-gradient-to-b from-[#2C1A15] to-[#4B2B16] py-12 px-4 md:px-16 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">⌯Contact Us⌯</h2>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-[#FFE1A5] rounded-2xl p-6 shadow-lg text-[#2C1A15] mb-8">
        <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-2 border border-[#2C1A15] rounded text-sm"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-2 border border-[#2C1A15] rounded text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-2 border border-[#2C1A15] rounded text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            className="p-2 border border-[#2C1A15] rounded text-sm"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-[#2C1A15] text-white py-2 rounded text-sm hover:bg-[#4B2B16] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Text */}
        <div className="md:col-span-1 flex justify-center md:justify-start items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-[#fff9e8]">
              Our Location
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-[#EBCEBB] leading-relaxed mt-0 max-w-xl">
              Come visit us at our Islamabad branch, located at I-8 Markaz. We'd love to welcome you with the aroma of fresh bakes!
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Ashy Bakes Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13297.830270055454!2d73.06605!3d33.68288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df950f3a841f15%3A0x623d86c5c97aeb4a!2sI-8%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1617197762665!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
