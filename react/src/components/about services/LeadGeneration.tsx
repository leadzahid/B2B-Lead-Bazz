import {
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaUsers,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LeadGeneration = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#7e22ce]">
          Professional Lead Generation Service
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get high-quality, verified, and targeted **B2B & B2C leads** that
          boost sales and conversions.
        </p>
      </div>

      {/* B2B & B2C Lead Generation */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        {/* B2B Lead Generation */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaBriefcase className="mr-2" /> B2B Lead Generation
          </h3>
          <p className="text-gray-600 mt-2">
            We connect you with **decision-makers** such as CEOs, Founders, and
            Managers who are actively looking for solutions in your industry.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Targeted by Industry, Company Size, Location",
              "LinkedIn & Verified Business Emails",
              "C-Level & Decision-Maker Leads",
              "Ideal for B2B SaaS, Agencies, & Corporates",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* B2C Lead Generation */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaUsers className="mr-2" /> B2C Lead Generation
          </h3>
          <p className="text-gray-600 mt-2">
            Reach **high-intent consumers** interested in your products and
            services, ready to convert into paying customers.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Targeted by Demographics, Interests, & Behavior",
              "High-Intent Consumer Leads",
              "Data Enrichment & Lead Scoring",
              "Ideal for E-commerce, Real Estate, & Local Businesses",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-[#7e22ce]">
          Industries We Serve
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "Technology",
            "Healthcare",
            "Finance",
            "Real Estate",
            "E-commerce",
            "SaaS",
            "Education",
            "Marketing Agencies",
          ].map((industry, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      {/* What You’ll Get */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center text-[#7e22ce]">
          What You’ll Get?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {[
            { icon: <FaBriefcase />, text: "Job Title & Department" },
            { icon: <FaBuilding />, text: "Company Name & Website" },
            { icon: <FaEnvelope />, text: "Verified Business Email" },
            { icon: <FaPhone />, text: "Direct Phone Number (If Available)" },
            { icon: <FaLinkedin />, text: "LinkedIn Profile" },
            { icon: <FaFileAlt />, text: "Lead Scoring & Insights" },
            { icon: <FaGlobe />, text: "Company Industry & Size" },
            { icon: <FaUsers />, text: "Decision-Maker Identification" },
            { icon: <FaMapMarkerAlt />, text: "Company Location & Address" },
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

      {/* Tools Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center text-[#7e22ce]">
          Tools We Use
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "LinkedIn Sales Navigator",
            "Apollo.io",
            "ZoomInfo",
            "Hunter.io",
            "Crunchbase",
            "Snov.io",
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

      {/* Lead Delivery Formats */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-[#7e22ce]">
          Lead Delivery Formats
        </h3>
        <p className="text-gray-600 mt-2">
          We deliver leads in the format that best suits your workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "Excel",
            "CSV",
            "Google Sheets",
            "CRM Integration",
            "API Export",
          ].map((format, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition"
            >
              {format}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold">Let’s Get Started!</h3>
        <p className="text-gray-600 mt-2">
          Grow your business with high-quality leads tailored to your needs.
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

export default LeadGeneration;
