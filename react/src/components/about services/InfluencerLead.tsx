import { JSX } from "react";
import { FaCheckCircle, FaSearch, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
const influencerLeadInfo = {
  title: "Influencer Lead Generation",
  description:
    "Find the best influencers for your brand with verified data. We connect you with high-performing social media influencers who drive real engagement and conversions.",
  targetAudience: [
    "Instagram Influencers",
    "YouTube Creators",
    "TikTok Stars",
    "Micro & Macro Influencers",
  ],
  leadSources: [
    "Influencer Marketplaces",
    "Social Media Scraping",
    "Brand Collaborations",
  ],
  benefits: [
    "Authentic Engagement",
    "High ROI Partnerships",
    "Targeted Niches & Audience",
  ],
  industries: ["Beauty", "Fashion", "Fitness", "Tech", "E-commerce"],
  dataPoints: [
    "Influencer Name",
    "Social Media Profile",
    "Engagement Rate",
    "Follower Count",
    "Audience Demographics",
    "Content Niche & Category",
    "Brand Collaboration History",
    "Platform-Specific Performance",
    "Contact Information & Outreach Details",
  ],
  tools: ["Upfluence", "Heepsy", "Ninja Outreach", "HypeAuditor"],
  formats: ["Excel", "CSV", "CRM Export"],
};

const InfluencerLead = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#7e22ce]">
          {influencerLeadInfo.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
          {influencerLeadInfo.description}
        </p>
      </div>

      {/* Information Sections */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        <InfoCard
          title="Who We Target?"
          icon={<FaUsers />}
          items={influencerLeadInfo.targetAudience}
        />
        <InfoCard
          title="Where We Find Influencers?"
          icon={<FaSearch />}
          items={influencerLeadInfo.leadSources}
        />
      </div>

      <InfoGrid
        title="Why Choose Our Service?"
        items={influencerLeadInfo.benefits}
      />
      <InfoGrid
        title="Industries We Serve"
        items={influencerLeadInfo.industries}
        isTagList
      />
      <InfoGrid
        title="What You’ll Get?"
        items={influencerLeadInfo.dataPoints}
      />
      <InfoGrid
        title="Tools We Use"
        items={influencerLeadInfo.tools}
        isTagList
        highlight
      />
      <InfoGrid
        title="Lead Delivery Formats"
        items={influencerLeadInfo.formats}
        isTagList
      />

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold">
          Find the Right Influencers for Your Brand!
        </h3>
        <p className="text-gray-600 mt-2">
          Get high-quality influencer leads and boost your brand visibility.
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

// Reusable Card Component
const InfoCard = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: JSX.Element;
  items: string[];
}) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <h3 className="text-2xl font-semibold text-[#7e22ce] flex items-center">
      {icon} <span className="ml-2">{title}</span>
    </h3>
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <FaCheckCircle className="text-[#7e22ce] mr-2" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

// Grid Component
const InfoGrid = ({
  title,
  items,
  isTagList,
  highlight,
}: {
  title: string;
  items: string[];
  isTagList?: boolean;
  highlight?: boolean;
}) => (
  <div className="mt-16 text-center">
    <h3 className="text-3xl font-semibold text-[#7e22ce]">{title}</h3>
    <div
      className={`flex flex-wrap justify-center gap-4 mt-6 ${
        isTagList
          ? "max-w-4xl mx-auto"
          : "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 ${
            isTagList
              ? "bg-gray-100 px-5 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition"
              : "bg-gray-100 p-5 rounded-lg shadow hover:shadow-md transition"
          }`}
        >
          {highlight && <FaCheckCircle className="text-[#7e22ce] text-2xl" />}
          <span className="text-lg font-medium">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default InfluencerLead;
