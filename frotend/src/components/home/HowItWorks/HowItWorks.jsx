import processData from "./processData";
import ProcessCard from "./ProcessCard";
import { FiArrowRight } from "react-icons/fi";

const HowItWorks = () => {
  return (
    <section className="bg-[var(--background)] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-[var(--accent)]">
            SIMPLE PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[var(--heading)]">
            How It Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--body)]">
            Registering and resolving complaints has never been easier.
            Our AI ensures every complaint reaches the correct department
            with complete transparency.
          </p>

        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-5">

          {processData.map((item, index) => (
            <div
              key={item.id}
              className="relative"
            >
              <ProcessCard
                step={item.id}
                {...item}
              />

              {index !== processData.length - 1 && (
                <div className="absolute left-[78%] top-10 hidden lg:block">
                  <FiArrowRight
                    size={30}
                    className="text-[var(--primary)]"
                  />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;