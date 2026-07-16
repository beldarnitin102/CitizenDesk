import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      <Link to="/signup">

        <Button
          size="lg"
          className="group"
        >
          Register Complaint

          <FiArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Button>

      </Link>

      <Link to="/about">

        <Button
          variant="outline"
          size="lg"
        >
          <FiPlayCircle size={20} />

          Learn More

        </Button>

      </Link>

    </div>
  );
};

export default HeroButtons;