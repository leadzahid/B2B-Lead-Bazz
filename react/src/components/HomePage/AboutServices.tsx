import BackGroundImage from "../../assets/images/Homepage/dots.png"; // Ensure your build setup supports importing images

const AboutServices = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto py-14 sm:py-24 px-5 bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(${BackGroundImage})`,
        }}
      >
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-white ">
          Empower Your Team with Reliable B2B Contact Data <br /> and Sales
          Intelligence
        </h1>
        <div className=" grid md:grid-cols-2 gap-5 mt-5">
          <div className=" bg-lime-100 flex-1 py-10 sm:py-16 px-5 rounded-md text-center">
            <h2 className=" font-bold mb-3 text-xl sm:text-2xl">Who We Help</h2>
            <p className="text-xs sm:text-sm text-gray-800">
              Achieve your go-to-market goals with data-driven solutions
              designed for sales, marketing, operations, and recruitment teams.
            </p>
          </div>
          <div className=" bg-teal-100 flex-1 py-10 sm:py-16 px-5 rounded-md text-center">
            <h2 className=" font-bold mb-3 text-xl sm:text-2xl">
              Comprehensive Data Coverage
            </h2>
            <p className=" text-xs sm:text-sm text-gray-800 text-center">
              Target the right decision-makers at the perfect moment with
              actionable B2B insights. Drive lead generation and boost
              conversions with real-time buying signals and accurate contact
              intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
