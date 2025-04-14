import AboutAgency from "@/components/AboutPage/AboutAgency";
import Loading from "@/components/Loading";
import Hero from "@/components/ui/Hero";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "About Us | Your Trusted Partner in B2B Lead Generation",
  description:
    "At B2B Lead Buzz, we specialize in tailored B2B lead generation solutions that drive business growth. Connect with quality leads and achieve long-term success.",
  keywords: [
    "B2B lead generation",
    "business leads",
    "sales leads",
    "B2B marketing",
    "B2B sales",
    "lead generation services",
  ],
  openGraph: {
    title: "About Us | B2B Lead Buzz",
    description:
      "Learn how B2B Lead Buzz helps businesses grow with high-quality lead generation services. Your trusted partner for sales success.",
    url: "https://b2bleadbazz.com/about-us",
    siteName: "B2B Lead Buzz",
    images: [
      {
        url: "/images/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "About B2B Lead Buzz",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | B2B Lead Buzz",
    description:
      "We specialize in B2B lead generation services that help businesses find high-quality leads and drive revenue growth.",
    images: ["/images/about-us.jpg"],
  },
};

const data = {
  title: "Your Trusted Partner in B2B Lead Generation Excellence.",
  description:
    "B2B Lead Buzz, we specialize in tailored B2B lead generation solutions that drive business growth. With a focus on quality leads and measurable results, we’re here to help you connect with the right customers and achieve long-term success.",
};

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <Hero title={data.title} description={data.description} />
        <AboutAgency />
      </section>
    </Suspense>
  );
};

export default About;
