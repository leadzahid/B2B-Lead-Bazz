import { JSX } from "react";
import { FaCheckCircle, FaDatabase, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const dataEnrichmentInfo = {
  title: "Data Enrichment Lead Generation",
  description:
    "We enhance your business data with verified, up-to-date insights. Using cross-verification, manual validation with premium tools, and years of experience, we ensure 80–95% match and enrichment rates — even for the hardest-to-find data.",
  enrichmentTypes: [
    "Email Verification",
    "Phone Number Validation",
    "Company Details Enrichment",
    "Social Media Data",
    "Geo-location Data",
  ],
  sources: [
    "Public Databases",
    "Company Websites",
    "Social Media Scraping",
    "API Data Sources",
    "Contact details directly from LinkedIn profiles",
  ],
  benefits: [
    "Higher Conversion Rates",
    "Better Targeting",
    "Improved Decision Making",
    "Enhanced Personalization",
  ],
  industries: [
    "E-commerce",
    "Finance",
    "Healthcare",
    "Real Estate",
    "Marketing",
  ],
  dataPoints: [
    "Complete & Verified Contact Details",
    "Company Insights & Firmographics",
    "Decision-Maker Identification",
    "Geo-Targeted Lead Data",
    "Technology Stack Information",
    "Social Media & Online Presence Analysis",
    "Data Cleansing & Deduplication",
    "Lead Scoring & Qualification",
    "CRM-Ready Lead Lists",
    "Competitor Insights & Market Research",
  ],
  tools: ["Clearbit", "ZoomInfo", "Apollo.io", "Hunter.io"],
  formats: ["Excel", "CSV", "CRM Integration"],
};

const DataEnrichmentLead = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#7e22ce]">
          {dataEnrichmentInfo.title}
        </h1>
        <p className=" text-gray-600 max-w-3xl mx-auto mt-4">
          {dataEnrichmentInfo.description}
        </p>
      </div>

      {/* Information Sections */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        <InfoCard
          title="Types of Enrichment"
          icon={<FaDatabase />}
          items={dataEnrichmentInfo.enrichmentTypes}
        />
        <InfoCard
          title="Data Sources Used"
          icon={<FaSearch />}
          items={dataEnrichmentInfo.sources}
        />
      </div>

      <InfoGrid
        title="Why Choose Our Service?"
        items={dataEnrichmentInfo.benefits}
      />
      <InfoGrid
        title="Industries We Serve"
        items={dataEnrichmentInfo.industries}
        isTagList
      />
      <InfoGrid
        title="What You’ll Get?"
        items={dataEnrichmentInfo.dataPoints}
      />
      <InfoGrid
        title="Tools We Use"
        items={dataEnrichmentInfo.tools}
        isTagList
        highlight
      />
      <InfoGrid
        title="Lead Delivery Formats"
        items={dataEnrichmentInfo.formats}
        isTagList
      />

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold">
          Upgrade Your Data for Maximum Impact!
        </h3>
        <p className="text-gray-600 mt-2">
          Get high-quality, enriched leads that boost sales and engagement.
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
          <span className="text-[#7e22ce] mr-2">
            <FaCheckCircle />
          </span>
          {item}
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

export default DataEnrichmentLead;
