import about from "../../assets/images/Aboutpage/about.png";
import mission from "../../assets/images/Aboutpage/mission.png";
import support from "../../assets/images/Aboutpage/support.png";

const AboutAgency = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 my-10 scroll-mt-20">
      {/* title and description */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-700">
          Who We Are: Experts in B2B Lead Generation
        </h1>
        <p className="text-sm text-gray-600">
          Boost your business with a B2B lead generation agency that blends
          innovation, technology, and 7+ years of expertise
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {/* Effortlessly Scale with Cloud Hosting */}
        <div className="flex gap-5 flex-col min-[800px]:flex-row">
          <div className="bg-cyan-100 rounded-md p-10 w-full flex flex-col gap-3">
            <h1 className="text-2xl font-bold mb-1 text-purple-700">
              About Us
            </h1>
            <p className="text-sm">
              At{" "}
              <span className="font-bold text-purple-700">B2B Lead Bazz</span>,
              we specialize in turning your business goals into reality by
              connecting you with high-quality leads that drive growth. As a
              premier B2B lead generation agency, we understand that every
              business is unique, and so are its needs. That’s why we focus on
              delivering tailored lead generation strategies that align with
              your specific objectives.
            </p>
            <p className="text-sm">
              Our team of experienced professionals combines cutting-edge
              technology with proven marketing techniques to identify and engage
              the right prospects for your business. We pride ourselves on our
              ability to generate leads that are not just numerous but also
              relevant, ensuring that your sales pipeline is always filled with
              potential clients who are genuinely interested in what you have to
              offer.
            </p>
            <p className="text-sm">
              Whether you’re a startup looking to build your client base or an
              established company aiming to expand into new markets, Dream Lead
              Agency is here to help you succeed. We are committed to providing
              measurable results, maintaining transparency, and fostering
              long-term partnerships that empower your business to thrive.
            </p>

            <h3 className="text-lg font-medium text-purple-700">
              Dream big, and let us lead the way.
            </h3>
          </div>
          <div className="bg-cyan-100 rounded-md p-10 flex items-center justify-center">
            <img src={about} alt="about" className="w-full h-auto" />
          </div>
        </div>

        {/* Secure Your Website with an SSL Certificate */}
        <div className="flex gap-5 flex-col-reverse min-[800px]:flex-row">
          <div className="bg-emerald-100 rounded-md p-10 flex items-center justify-center">
            <img src={support} alt="support" className="w-full h-auto" />
          </div>
          <div className="bg-emerald-100 rounded-md p-10 w-full flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-purple-700 mb-1">
              Comprehensive Support for Your B2B Lead Generation Success
            </h1>
            <p className="text-sm">
              At{" "}
              <span className="font-bold text-purple-700">B2B Lead Bazz</span>,
              we offer comprehensive support throughout your lead generation
              journey. Our dedicated team ensures that every step of the
              process, from strategy development to lead qualification, aligns
              with your business goals. We provide ongoing guidance, insights,
              and optimization to continuously improve your lead quality,
              conversion rates, and return on investment. With our expertise and
              support, you can focus on what matters most—converting leads into
              long-term business relationships.
            </p>
          </div>
        </div>

        {/* Power Your Website with Reliable Web Hosting */}
        <div className="flex gap-5 flex-col min-[800px]:flex-row">
          <div className="bg-indigo-100 rounded-md p-10 w-full flex flex-col gap-3">
            <h1 className="text-2xl font-bold mb-1 text-purple-700">
              Our Mission and Vision
            </h1>
            <div>
              <h4 className="font-bold text-lg text-purple-700">Mission:</h4>
              <p className="text-sm">
                At{" "}
                <span className="font-bold text-purple-700">B2B Lead Bazz</span>
                , our mission is to empower businesses by connecting them with
                the right opportunities for growth. We strive to deliver
                innovative and effective B2B lead generation solutions that
                drive meaningful results for our clients. Our goal is to build
                lasting partnerships through trust, transparency, and a
                relentless focus on quality, helping businesses of all sizes
                achieve their full potential.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-purple-700">Vision:</h4>
              <p className="text-sm">
                Our vision is to be the leading B2B lead generation agency,
                recognized globally for our excellence in delivering
                high-quality leads and unmatched client service. We aim to
                redefine how businesses approach growth by providing strategic,
                data-driven solutions that open new doors and create lasting
                value. At Dream Lead Agency, we aspire to be the go-to partner
                for companies seeking sustainable, scalable success in a
                constantly evolving marketplace.
              </p>
            </div>
          </div>
          <div className="bg-indigo-100 rounded-md p-10 flex items-center justify-center">
            <img src={mission} alt="mission" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
