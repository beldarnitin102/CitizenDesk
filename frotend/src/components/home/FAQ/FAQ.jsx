import { useState } from "react";

import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [active, setActive] = useState(1);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know"
          subtitle="Have questions about submitting complaints, AI processing, or tracking issues? Find quick answers below."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={active === item.id}
              onToggle={() =>
                handleToggle(item.id)
              }
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default FAQ;