import { useState } from "react";

const faqsData = [
  {
    question: "What are your store hours?",
    answer: "We’re open Monday to Saturday from 8 AM to 10 PM, and Sunday from 10 AM to 11 PM.",
  },
  {
    question: "Do you offer custom cakes?",
    answer: "Yes! We specialize in custom cakes. Please place your order at least 3 days in advance in store.",
  },
  {
    question: "Are your baked goods made fresh daily?",
    answer: "Absolutely! Everything is baked fresh each morning using the finest ingredients.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
  id="faqs"
  className="w-full bg-gradient-to-b from-[#4B2B16] to-[#2C1A15] pt-14 pb-2 px-4 md:px-16"
>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">
      ⥧Frequently Asked Questions⥩
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FCE8C1] rounded-lg shadow-md p-6 cursor-pointer transition duration-300 hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold text-[#673015] flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-3 text-[#5A3C2C]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
