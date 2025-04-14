import Loading from "@/components/Loading";
import Hero from "@/components/ui/Hero";
import WhyHireUsCom from "@/components/WhyHireUsCom";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Why Hire Us? | Expert B2B Lead Generation Services",
  description:
    "Discover why businesses trust B2B LeadBazz for high-quality B2B lead generation. Proven strategies, industry expertise, and results-driven solutions.",
  keywords: [
    "B2B lead generation",
    "lead generation agency",
    "business leads",
    "B2B sales",
    "qualified leads",
    "best lead generation service",
  ],
  openGraph: {
    title: "Why Hire Us? | Expert B2B Lead Generation Services",
    description:
      "Discover why businesses trust B2B LeadBazz for high-quality B2B lead generation. Proven strategies, industry expertise, and results-driven solutions.",
    url: "https://www.b2bleadbazz.com/why-hire-us",
    siteName: "B2B LeadBazz",
    images: [
      {
        url: "/images/why-hire-us.jpg",
        width: 1200,
        height: 630,
        alt: "Why Hire Us at B2B LeadBazz",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Hire Us? | Expert B2B Lead Generation Services",
    description:
      "Discover why businesses trust B2B LeadBazz for high-quality B2B lead generation. Proven strategies, industry expertise, and results-driven solutions.",
    images: ["/images/why-hire-us.jpg"],
  },
};

const data = {
  title: `Why Choose Us for Your B2B Lead Generation Needs?`,
  description: `Partner with a team that understands your business goals. Our proven strategies, industry expertise, and commitment to delivering quality leads set us apart. With a focus on results, we help you save time, boost conversions, and drive sustainable growth.`,
};

const WhyHireUs = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <Hero title={data.title} description={data.description} />
        <div className="pb-0 min-[450px]:pb-20">
          <WhyHireUsCom />
        </div>
      </section>
    </Suspense>
  );
};

export default WhyHireUs;
