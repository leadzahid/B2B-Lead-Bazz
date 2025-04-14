import { FaWhatsapp } from "react-icons/fa6";

const items = [
  {
    id: 1,
    title: "Data Enrichment",
    listItems: [
      "Enriched B2B Lead",
      "Enriched Consumer Lead (B2C Lead)",
      "Contact Enrichment Lead",
      "Social Media Enriched Lead",
      "Firmographic Enriched Lead",
      "Behavioral Enriched Lead",
      "Location Enriched Lead",
      "Financial Enriched Lead",
      "AI-Powered Enriched Lead",
      "Referral & Affiliate Enriched Lead",
    ],
    link: "",
  },
  {
    id: 2,
    title: "Web Scraping",
    listItems: [
      "B2B Lead Scraping",
      "E-commerce Product Data Scraping",
      "Social Media Data Scraping",
      "Job Listing Scraping",
      "Real Estate Data Scraping",
      "Financial Market Data Scraping",
      "Competitor Price Monitoring",
      "News & Article Scraping",
      "Public Records Scraping",
      "SEO & SERP Data Scraping",
    ],
    link: "",
  },
  {
    id: 3,
    title: "Email Finiding",
    listItems: [
      "B2B Email Finding",
      "Bulk Email Lookup",
      "Single Email Lookup",
      "Domain-based Email Search",
      "Social Media Email Extraction",
      "Company Employee Email Finder",
      "LinkedIn Email Scraping",
      "Personal Email Finder",
      "Role-based Email Detection",
      "Catch-All Email Identification",
    ],
    link: "",
  },
  {
    id: 4,
    title: "Web Research",
    listItems: [
      "Market Research Lead",
      "Competitor Analysis Lead",
      "Industry Trend Research",
      "Customer Insights Research",
      "Product Research Lead",
      "Keyword & SEO Research",
      "Real Estate Market Research",
      "Financial & Investment Research",
      "Tech & Software Research",
      "Brand Reputation Monitoring",
    ],
    link: "",
  },
  {
    id: 5,
    title: "Virtual Assistant",
    listItems: [
      "Data Entry",
      "Copy-Paste Work",
      "Web Research",
      "Email & Contact Collection",
      "Data Mining & Scraping",
      "Document Formatting",
      "PDF to Excel/Word",
      "Product Listing",
      "Admin Support",
      "Customer Support",
    ],
    link: "",
  },
  {
    id: 6,
    title: "Cell Phone And Direct Phone",
    listItems: [
      "Cell Phone",
      "Direct Phone",
      "Mobile Phone",
      "Work Phone",
      "Home Phone",
      "Office Phone",
      "Business Phone",
      "VoIP Number",
      "Toll-Free Number",
      "Landline",
    ],
    link: "",
  },
];
const ExtraCard = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto pb-10">
      <div className=" text-center">
        <h1 className=" sm:text-4xl text-2xl font-bold text-purple-700">
          Chat to get extra services
        </h1>
        <p className=" sm:text-base text-gray-600 text-xs mt-3">
          Enhance Your Operations with Customized Support Solutions
        </p>
      </div>
      <div className=" mt-5">
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 min-[600px]:grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className=" border hover:border-purple-700 hover:-translate-y-2  transition-all ease-linear duration-300 rounded  flex flex-col justify-between"
            >
              <div>
                <h3 className=" border-b text-center text-lg font-bold p-5 text-purple-700">
                  {item.title}
                </h3>

                <ul className="py-3 px-5 text-sm  space-y-2 ">
                  {item.listItems.map((list, index) => (
                    <li key={index} className="flex  gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className="text-gray-700">{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex  py-2 px-5 ">
                <a
                  href={`https://wa.me/+8801732852745?text=Hello,%20I%20am%20interested%20in%20your%20${item.title}%20services`}
                  target="_blank"
                  className="text-center bg-purple-700 text-white p-2 w-full  rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-transparent border border-purple-800 hover:text-purple-800 transition-all duration-200 ease-linear"
                >
                  <span>Chat Now</span> <FaWhatsapp />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraCard;
