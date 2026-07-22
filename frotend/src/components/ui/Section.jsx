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
        "py-16 lg:py-20",
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