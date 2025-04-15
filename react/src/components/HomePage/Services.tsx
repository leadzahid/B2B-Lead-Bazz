import { FaHeadset } from "react-icons/fa";
import { FaDatabase, FaShop } from "react-icons/fa6";
import { SiAnalogue } from "react-icons/si";
import { TbDeviceAnalytics, TbWorldSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

function Services() {
  const servicesItems = [
    {
      id: 1,
      title: "Lead Generation",
      params: "Lead-Generation",
      icon: <FaDatabase />,
      desc: "Boost your outreach with our expert lead generation, contact list building, prospect list building, and email list building services",
    },
    {
      id: 2,
      title: "E-commerce leads",
      params: "E-commerce-leads",
      icon: <FaShop />,
      desc: "Get high-quality eCommerce leads to grow your online store. We provide targeted leads, including potential customers, suppliers, and business partners, to help you drive sales and expand your market reach",
    },
    {
      id: 3,
      title: "Influencer Leads",
      params: "Influencer-Leads",
      icon: <SiAnalogue />,
      desc: "Connect with the right influencers to boost your brand. We provide high-quality influencer leads tailored to your niche, helping you build successful collaborations and maximize your reach.",
    },
    {
      id: 4,
      title: "80-95% Data Enrichment",
      params: "Data-Enrichment",
      icon: <TbDeviceAnalytics />,
      desc: "We provide cell phone enrichment, missing data enrichment, email finding, and direct phone sourcing — delivering accurate and complete contact info.",
    },
    {
      id: 5,
      title: "Virtual Assistant",
      params: "Virtual-Assistant",
      icon: <FaHeadset />,
      desc: "I will be your reliable virtual assistant, providing data entry, copy-pasting, and web research services with accuracy and efficiency to support your business needs.",
    },
    {
      id: 6,
      title: "Web Research",
      params: "Web-Research",
      icon: <TbWorldSearch />,
      desc: "Get accurate and in-depth insights with our web research services. We provide data collection, market analysis, and competitor research to help you make informed business decisions.",
    },
  ];
  return (
    <section id="services" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 pb-14 pt-24 ">
        <h1 className="text-4xl text-center font-bold mb-8 text-purple-800">
          Our Services
        </h1>

        <div className="grid min-[900px]:grid-cols-3 min-[550px]:grid-cols-2 grid-cols-1 gap-3">
          {servicesItems.map((item) => (
            <Link
              to={`/services/${item.params}`}
              key={item.id}
              className="group shadow bg-white border-2 border-transparent hover:border-purple-700 p-6 md:p-10 rounded-lg transition duration-300 ease-linear hover:shadow-xl hover:-translate-y-1"
              data-v-922fb0dd=""
            >
              <div className="relative h-32 mb-6" data-v-922fb0dd="">
                <svg
                  className="absolute top-0 left-1/2 -translate-x-1/2 group-hover:rotate-45 transition-transform duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="119.036"
                  height="118.984"
                  viewBox="0 0 119.036 118.984"
                  data-v-922fb0dd=""
                >
                  <defs data-v-922fb0dd="">
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                      data-v-922fb0dd=""
                    >
                      <stop
                        offset="0"
                        stop-color="#A773DE"
                        data-v-922fb0dd=""
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#433373"
                        data-v-922fb0dd=""
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M20.207.537c22.975-5.465,65.915,32.12,65.915,52.53s-59.3,38.087-75.84,31.462S-2.768,6,20.207.537Z"
                    transform="matrix(0.839, 0.545, -0.545, 0.839, 46.808, 0)"
                    opacity="0.15"
                    fill="url(#linear-gradient)"
                    data-v-922fb0dd=""
                  ></path>
                </svg>
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-10"
                  data-v-922fb0dd=""
                >
                  <svg
                    className="relative"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="77.034"
                    height="76.874"
                    viewBox="0 0 77.034 76.874"
                    data-v-922fb0dd=""
                  >
                    <defs data-v-922fb0dd="">
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                        data-v-922fb0dd=""
                      >
                        <stop
                          offset="0"
                          stop-color="#fe8464"
                          data-v-922fb0dd=""
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="#fe6e9a"
                          data-v-922fb0dd=""
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M44.629,1896.9c20.551-4.888,58.959,28.731,58.959,46.987s-53.043,34.067-67.837,28.142S24.078,1901.789,44.629,1896.9Z"
                      transform="translate(-26.554 -1896.421)"
                      fill="url(#linear-gradient)"
                      data-v-922fb0dd=""
                    ></path>
                  </svg>
                  <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-white fill-current text-3xl">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3
                className="text-lg font-semibold text-center"
                data-v-922fb0dd=""
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-center text-gray-600 mt-2"
                data-v-922fb0dd=""
              >
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
