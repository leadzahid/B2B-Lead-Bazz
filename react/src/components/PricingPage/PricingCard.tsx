import { Link } from "react-router-dom";

const cardItems = [
  {
    id: 1,
    label: "Lead Generation",
    title: "Boost Your B2B & B2C Leads & Grow Your Business! 🚀",
    price: "0.25",
    includedSearvices: [
      "Person Name",
      "Company Name",
      "Website",
      "Job Role",
      "Email",
      "Contact Number",
      "Contact Address",
      "Social Media",
      "Current Comapny Name",
      "Comapny Address",
    ],
    excludedSearvices: [],
  },
  {
    id: 2,
    label: "Ecommerce Lead",
    title: "Drive More Sales with Ecommerce Lead Generation! 🛒🚀",
    price: "0.30",
    includedSearvices: [
      "Ecommerce Platform",
      "Technology Used",
      "Store Name",
      "Website",
      "Contact Name",
      "Job Role",
      "linkedin Address",
      "Google Ads Check",
      "Monthly Visitors Check",
    ],
    excludedSearvices: [],
  },
  {
    id: 3,
    label: "Influencer Lead",
    title: "Power Your Brand with Influencer Lead Generation! 🌟🚀",
    price: "0.20",
    includedSearvices: [
      "Influencer Niche",
      "influencer Name",
      "Contact Details",
      "Social Media",
      "Number of Followers",
      "Engagement Rate",
      "Average Like",
      "Location",
      "Number",
    ],
    excludedSearvices: [],
  },
];

const PricingCard = () => {
  return (
    <div
      id="pricing_card"
      className="max-w-7xl px-5 mx-auto sm:pt-16 pt-10 pb-20 scroll-mt-10"
    >
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 md:gap-5">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm hover:border-purple-700"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-bold text-purple-700">
                {item.label}
              </h2>

              <p className="mt-2 text-gray-700">{item.title}</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {item.price}$
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /per Lead
                </span>
              </p>

              <Link
                className="mt-4 block rounded border border-purple-700 bg-purple-700 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-purple-700 focus:outline-none focus:ring active:text-purple-700 transition-all sm:mt-6"
                to="/order"
              >
                Order Now
              </Link>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                {`What's included:`}
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                {item?.includedSearvices?.map((text, index) => (
                  <li key={index} className="flex items-center gap-1">
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

                    <span className="text-gray-700">{text} </span>
                  </li>
                ))}

                {item?.excludedSearvices?.map((text, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
