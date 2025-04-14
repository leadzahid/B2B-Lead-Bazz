import {
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaFileAlt,
  FaPhone,
  FaSearch,
  FaUserTie,
} from "react-icons/fa";
import {
  FaCalendarCheck,
  FaDatabase,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const VirtualAssistantLead = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#7e22ce]">
          Virtual Assistant Lead Generation Service
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get professional virtual assistants to handle your data entry, web
          research, and administrative tasks efficiently.
        </p>
      </div>

      {/* Virtual Assistant Services */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaUserTie className="mr-2" /> Data Entry & Web Research
          </h3>
          <p className="text-gray-600 mt-2">
            Our virtual assistants specialize in **data entry, web research, and
            lead collection** to streamline your business operations.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Accurate Data Entry & Management",
              "Detailed Web Research & Analysis",
              "CRM Data Cleaning & Enrichment",
              "Ideal for B2B & B2C Businesses",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaClipboardList className="mr-2" /> Administrative Assistance
          </h3>
          <p className="text-gray-600 mt-2">
            Let our skilled virtual assistants handle your **daily
            administrative tasks** so you can focus on growing your business.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Calendar & Email Management",
              "Appointment Scheduling",
              "Customer Support Assistance",
              "Document & File Organization",
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
            { icon: <FaEnvelope />, text: "Daily Task Reports" },
            { icon: <FaPhone />, text: "Real-Time Communication" },
            { icon: <FaUsers />, text: "LinkedIn Lead Generation" },
            { icon: <FaClipboardList />, text: "Competitor Analysis" },
            { icon: <FaSearch />, text: "Market Research & Trends" },
            { icon: <FaCalendarCheck />, text: "Appointment Scheduling" },
            { icon: <FaDatabase />, text: "CRM-Ready Lead Lists" },
            { icon: <FaFileAlt />, text: "Accurate & Timely Execution" },
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
            "Google Workspace",
            "Trello",
            "Slack",
            "Asana",
            "HubSpot",
            "Zoom",
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
          Boost your productivity with our expert virtual assistants tailored to
          your needs.
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

export default VirtualAssistantLead;
