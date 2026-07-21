import { cn } from "../../utils/cn";
import Container from "./Container";

function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export default Section;