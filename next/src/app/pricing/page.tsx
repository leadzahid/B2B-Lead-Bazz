import Loading from "@/components/Loading";
import ExtraCard from "@/components/PricingPage/ExtraCard";
import PricingCard from "@/components/PricingPage/PricingCard";
import Hero from "@/components/ui/Hero";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Flexible Pricing for B2B Lead Generation | B2B LeadBazz",
  description:
    "Explore transparent and flexible pricing plans for high-quality B2B leads. Get the best ROI with our customized lead generation packages.",
  keywords: [
    "B2B lead generation pricing",
    "lead generation packages",
    "business leads cost",
    "buy sales leads",
    "B2B leads pricing",
    "affordable lead generation",
  ],
  openGraph: {
    title: "Flexible Pricing for B2B Lead Generation | B2B LeadBazz",
    description:
      "Choose a pricing plan that fits your business needs. Our transparent pricing ensures you get high-quality leads with the best ROI.",
    url: "https://www.b2bleadbazz.com/pricing",
    siteName: "B2B LeadBazz",
    images: [
      {
        url: "/images/pricing-b2b-leads.jpg",
        width: 1200,
        height: 630,
        alt: "B2B Leads Pricing Plans",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Pricing for B2B Lead Generation | B2B LeadBazz",
    description:
      "Get high-quality B2B leads at competitive prices. Choose a plan that works for your business and maximize your ROI.",
    images: ["/images/pricing-b2b-leads.jpg"],
  },
};

const data = {
  title: "Flexible Pricing for Results-Driven B2B Lead Generation.",
  description:
    "Choose a pricing plan that fits your business needs and budget. Our transparent and flexible packages are designed to deliver high-quality leads, ensuring maximum ROI for your B2B lead generation efforts.",
};

const Pricing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <Hero title={data.title} description={data.description} />
        <PricingCard />
        <ExtraCard />
      </section>
    </Suspense>
  );
};

export default Pricing;
