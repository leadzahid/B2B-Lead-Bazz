import {
  FaChartLine,
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaFileAlt,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EcommerceLead = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#7e22ce]">
          E-commerce Lead Generation Service
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get **high-intent buyers** and increase sales with targeted e-commerce
          leads from social media, search engines, and email marketing.
        </p>
      </div>

      {/* Target Audience */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaShoppingCart className="mr-2" /> Who We Target?
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Shoppers Interested in Your Products",
              "Cart Abandoners & Returning Customers",
              "High-Intent Buyers from Social Media",
              "People Searching for Related Products",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Lead Sources */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
            <FaUsers className="mr-2" /> Where We Find Leads?
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Facebook & Instagram Ads",
              "Google & Bing Search Ads",
              "Email Marketing Campaigns",
              "Influencer & Affiliate Networks",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-[#7e22ce]">
          Why Choose Our Service?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {[
            "Increase Sales & Conversions",
            "Targeted Audience with Buying Intent",
            "Verified & Quality Leads Only",
            "Retargeting & Remarketing Strategies",
            "Cost-Effective & High ROI",
            "Data-Driven Lead Optimization",
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray-100 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <FaCheckCircle className="text-[#7e22ce] text-2xl" />
              <span className="text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-[#7e22ce]">
          Industries We Serve
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "Fashion & Apparel",
            "Beauty & Skincare",
            "Electronics & Gadgets",
            "Home & Kitchen",
            "Fitness & Health",
            "Automotive Accessories",
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
            { icon: <FaUsers />, text: "Customer Name & Contact" },
            { icon: <FaEnvelope />, text: "Verified Email Address" },
            { icon: <FaShoppingCart />, text: "Purchase Behavior & Interests" },
            { icon: <FaChartLine />, text: "Lead Scoring & Conversion Data" },
            { icon: <FaFacebook />, text: "Social Media Engagement Insights" },
            { icon: <FaFileAlt />, text: "Detailed Lead Report" },
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
            "Facebook Ads Manager",
            "Google Ads",
            "Mailchimp",
            "Klaviyo",
            "Hotjar",
            "HubSpot",
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
          We provide leads in multiple formats for easy integration into your
          CRM or marketing platform.
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
        <h3 className="text-2xl font-semibold">Let’s Boost Your Sales!</h3>
        <p className="text-gray-600 mt-2">
          Get high-quality, purchase-ready leads today.
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

export default EcommerceLead;
