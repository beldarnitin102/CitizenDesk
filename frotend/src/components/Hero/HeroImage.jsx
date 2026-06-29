import heroImage from "../../assets/images/hero.png";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center p-8 lg:p-10">

      <img
        src={heroImage}
        alt="District Complaint Management"
        className="w-full max-w-2xl object-contain"
      />

    </div>
  );
};

export default HeroImage;