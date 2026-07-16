import { FiArrowRight } from "react-icons/fi";

import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";

import ProcessCard from "./ProcessCard";
import processData from "./processData";

const HowItWorks = () => {
  return (
    <section className="bg-[var(--background)] py-24">
      <Container>

        <SectionHeading
          badge="WORKFLOW"
          title="How Our AI Complaint System Works"
          subtitle="From complaint submission to final resolution, every step is streamlined through Artificial Intelligence, ensuring faster processing, better transparency and efficient public service."
        />

        <div className="mt-20">

          <div className="grid gap-8 lg:grid-cols-5">

            {processData.map((step, index) => (
              <div
                key={step.id}
                className="relative"
              >
                <ProcessCard {...step} />

                {index !== processData.length - 1 && (
                  <div
                    className="
                    absolute
                    left-full
                    top-1/2
                    hidden
                    -translate-y-1/2
                    lg:flex
                    lg:w-8
                    lg:justify-center
                    "
                  >
                    <FiArrowRight
                      size={28}
                      className="text-[var(--primary)]"
                    />
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default HowItWorks;