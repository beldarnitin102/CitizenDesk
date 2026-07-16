import Container from "../../ui/Container";

import AIContent from "./AIContent";
import AIImage from "./AIImage";

const AISection = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-24
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#EEF5FC]
        via-white
        to-[#F6FFF8]
        "
      />

      <div
        className="
        absolute
        -left-32
        top-20
        h-72
        w-72
        rounded-full
        bg-blue-200/30
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -right-24
        bottom-0
        h-72
        w-72
        rounded-full
        bg-green-200/30
        blur-3xl
        "
      />

      <Container>

        <div
          className="
          relative
          grid
          items-center
          gap-16
          lg:grid-cols-2
          "
        >
          <AIImage />

          <AIContent />
        </div>

      </Container>
    </section>
  );
};

export default AISection;