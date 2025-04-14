"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaClock,
  FaDollarSign,
  FaGift,
  FaMoneyBillWave,
  FaSearch,
  FaTag,
} from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Manually Researched & Verified Leads",
    description:
      "Every lead is hand-picked and verified in real time, ensuring you get high-quality B2B data with 99% accuracy for better conversions and outreach success.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Affordable Pricing with High ROI",
    description:
      "Save 30-50% on lead generation costs while receiving premium, conversion-ready B2B leads. Get better quality data without overpaying like other vendors charge.",
    icon: <FaDollarSign />,
  },
  {
    id: 3,
    title: "99% Accurate Data, Less Than 1% Bounce Rate",
    description:
      "Receive verified B2B leads with a 99% accuracy guarantee and less than a 1% bounce rate, ensuring your outreach efforts are successful and efficient.",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    title: "50 Free Leads – No Signup Required!",
    description:
      "Try our service with 50 free leads, customized to your target audience. No signup, no payment—just high-quality leads for you to test first.",
    icon: <FaGift />,
  },
  {
    id: 5,
    title: "Order First, Pay Later",
    description:
      "Get your lead list first, review its quality, and pay only if you're satisfied. No risk, just premium B2B leads with total transparency.",
    icon: <FaClipboardCheck />,
  },
  {
    id: 6,
    title: "Save Time & Focus on Closing Deals",
    description:
      "No need to spend hours collecting data. I provide ready-to-use, sales-focused B2B leads so you can concentrate on conversions, not research.",
    icon: <FaClock />,
  },
  {
    id: 7,
    title: "Pay As You Go – No Subscriptions",
    description:
      "No monthly fees or commitments! Order leads whenever you need them with full flexibility, perfect for startups, agencies, and growing businesses.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 8,
    title: "Exclusive Discounts & Referral Benefits",
    description:
      "Get 10% OFF on reorders and 20% OFF when you refer a new client. Earn discounts while growing your business with high-quality leads.",
    icon: <FaTag />,
  },
];

function WhyHireUsCom() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/why-hire-us/#content");
    }, 300);
  }, [router]);
  return (
    <section>
      <div id="content" className="max-w-7xl mx-auto px-5 scroll-mt-16">
        <div className="text-center my-10">
          <h1 className="sm:text-4xl text-3xl font-bold text-purple-700">
            Why Hire Us
          </h1>
          <p>8 Reasons that make us Premium and Friendly</p>
        </div>
        <div className=" mb-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-10">
            {items.map((i) => (
              <div key={i.id} className="flex gap-4 items-start">
                <span className="text-purple-700 bg-purple-500/10 p-3 rounded-full">
                  {i.icon}
                </span>
                <div>
                  <h3 className="font-semibold sm:text-lg">{i.title}</h3>
                  <p className="mt-1 text-gray-500 sm:text-base text-sm">
                    {i.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyHireUsCom;
