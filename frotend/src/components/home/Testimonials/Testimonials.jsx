import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import TestimonialCard from "./TestimonialCard";
import testimonialsData from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="bg-[var(--background)] py-24">

      <Container>

        <SectionHeading
          badge="SUCCESS STORIES"
          title="What Citizens Say About Our Platform"
          subtitle="Thousands of citizens use our AI-powered grievance system to report public issues, track progress, and receive timely resolutions."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Testimonials;  