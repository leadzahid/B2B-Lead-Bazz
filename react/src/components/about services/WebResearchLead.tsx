import {
  FaCheckCircle,
  FaClipboardList,
  FaGlobe,
  FaSearch,
  FaSearchLocation,
} from "react-icons/fa";
import {
  FaBuilding,
  FaDatabase,
  FaEnvelope,
  FaPhone,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const WebResearchLead = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#7e22ce]">
          Web Research Lead Service
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get high-quality leads through in-depth web research tailored to your
          business needs.
        </p>
      </div>

      {/* Web Research Services */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaSearch className="mr-2" /> Market & Competitor Research
          </h3>
          <p className="text-gray-600 mt-2">
            Gain valuable insights into market trends, competitor strategies,
            and industry opportunities.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Competitor Analysis & Tracking",
              "Market Trends & Insights",
              "Customer Demographics Research",
              "Industry Growth Analysis",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaGlobe className="mr-2" /> Contact & Lead Research
          </h3>
          <p className="text-gray-600 mt-2">
            Find the right contacts, decision-makers, and potential customers
            for your business.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Verified B2B & B2C Leads",
              "LinkedIn & Social Media Research",
              "Email & Phone Number Extraction",
              "Company & Executive Data Collection",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What You’ll Get */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center text-[#7e22ce]">
          What You’ll Get?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {[
            { icon: <FaUserCheck />, text: "Targeted & Verified Leads" },
            { icon: <FaEnvelope />, text: "Valid Business Emails" },
            { icon: <FaPhone />, text: "Direct Phone Numbers" },
            { icon: <FaBuilding />, text: "Company & Industry Insights" },
            { icon: <FaSearchLocation />, text: "Geo-Targeted Lead Lists" },
            { icon: <FaUsers />, text: "Decision-Maker Identification" },
            { icon: <FaDatabase />, text: "CRM-Ready Data" },
            { icon: <FaGlobe />, text: "Technology Stack Research" },
            {
              icon: <FaClipboardList />,
              text: "Competitor Analysis & Reports",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray-100 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-[#7e22ce] text-2xl">{item.icon}</div>
              <span className="text-lg font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools We Use */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center text-[#7e22ce]">
          Tools We Use
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "LinkedIn Sales Navigator",
            "Google Sheets",
            "Hunter.io",
            "Apollo.io",
            "Scrapy",
            "ZoomInfo",
          ].map((tool, index) => (
            <span
              key={index}
              className="bg-[#7e22ce] text-white px-5 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold">Let’s Get Started!</h3>
        <p className="text-gray-600 mt-2">
          Get top-quality web research and lead generation services tailored to
          your business needs.
        </p>
        <div className=" mt-6">
          <Link
            to={"/order"}
            className=" bg-[#7e22ce] hover:bg-purple-800 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebResearchLead;
