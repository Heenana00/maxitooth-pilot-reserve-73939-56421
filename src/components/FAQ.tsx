import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will pre-orders ship?",
    answer:
      "We're targeting Q2 2025 for the first batch. All Founders 100 members will receive priority shipping and tracking updates throughout the production process.",
  },
  {
    question: "Can I cancel before shipping?",
    answer:
      "Absolutely. Your ₹199 pre-order is fully refundable until the product ships. Simply contact us at hello@maxitooth.com with your order details.",
  },
  {
    question: "Is it safe for sensitive teeth?",
    answer:
      "Yes! Maxitooth is formulated specifically for sensitive teeth. Our gentle, natural formula provides effective cleaning without harsh abrasives or chemicals that cause sensitivity.",
  },
  {
    question: "What makes Maxitooth different?",
    answer:
      "Maxitooth combines advanced natural ingredients with modern design. We've eliminated harsh chemicals while maintaining clinical-grade whitening effectiveness. Plus, it actually looks beautiful in your bathroom.",
  },
  {
    question: "What's the return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with Maxitooth, we'll provide a full refund – no questions asked.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-grey-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold text-jet-black mb-4">
              Questions?
            </h2>
            <p className="text-xl text-graphite">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft hover:shadow-medium transition-shadow border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-jet-black hover:text-graphite hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-graphite pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-graphite">
              Still have questions?{" "}
              <a href="mailto:hello@maxitooth.com" className="text-jet-black font-semibold hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
