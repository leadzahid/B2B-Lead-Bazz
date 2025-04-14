import Loading from "@/components/Loading";
import LeadOrderForm from "@/components/OrderForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Order High-Quality B2B Leads | B2B LeadBazz",
  description:
    "Place your order today for verified B2B leads with 99% accuracy. Get targeted leads based on industry, company size, and technology usage.",
  keywords: [
    "B2B leads",
    "lead generation services",
    "buy business leads",
    "sales leads",
    "prospecting",
    "targeted leads",
    "B2B sales",
  ],
  openGraph: {
    title: "Order B2B Leads | Verified High-Quality Leads",
    description:
      "Get premium B2B leads with unmatched accuracy. Order now and grow your business with B2B LeadBazz!",
    url: "https://www.b2bleadbazz.com/order",
    siteName: "B2B LeadBazz",
    images: [
      {
        url: "/images/order-b2b-leads.jpg",
        width: 1200,
        height: 630,
        alt: "Order B2B Leads Now",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order B2B Leads | Verified High-Quality Leads",
    description:
      "Place your order today for accurate B2B leads. Get targeted contacts and boost your sales with B2B LeadBazz.",
    images: ["/images/order-b2b-leads.jpg"],
  },
};

const Order = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="text-center">
          <h2 className="sm:text-4xl text-3xl font-bold text-purple-700">
            Place Your Order Today
          </h2>
          <p className="sm:text-sm text-xs">
            Experience Unmatched Quality & Convenience!
          </p>
        </div>
        <div className="mt-10">
          <LeadOrderForm />
        </div>
      </section>
    </Suspense>
  );
};

export default Order;
