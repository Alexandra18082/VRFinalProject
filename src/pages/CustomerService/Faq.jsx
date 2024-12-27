import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const { pathname } = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Virtual Reality (VR)?",
      answer:
        "Virtual Reality (VR) is a technology that creates an immersive experience by simulating a user's physical presence in a computer-generated environment, allowing them to interact with it in a seemingly real or physical way.",
    },
    {
      question: "What do I need to get started with VR?",
      answer:
        "To get started with VR, you'll need a VR headset, which includes the display, sensors, and controls. Some VR systems also require a compatible PC or gaming console to run the content.",
    },
    {
      question: "How does VR work?",
      answer:
        "VR works by using a headset that covers your eyes and ears, and it uses sensors to track your head movements. The VR system then renders a 3D world in real time, which changes as you move around, providing a fully immersive experience.",
    },
    {
      question: "Is VR safe for children?",
      answer:
        "VR can be used safely by children, but it's important to ensure that the VR content is age-appropriate. Some VR experiences can be intense or overwhelming for younger children, so it's recommended to monitor usage and take breaks.",
    },
    {
      question: "Can I use VR for gaming?",
      answer:
        "Yes! VR is widely used for gaming. There are numerous immersive VR games available that allow you to experience gameplay in a completely new way. You can engage in virtual worlds, interact with characters, and play in a 360-degree environment.",
    },
  ];

  return (
    <div className="body min-h-[100vh] text-white px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6 text-blue-100">
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-3 px-4 bg-blue-800 text-lg font-medium text-blue-50 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 px-4 py-2 bg-blue-700 text-sm text-blue-200 rounded-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
