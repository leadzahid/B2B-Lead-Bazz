import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { theme } from "@/theme/antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./index.css";

export const metadata: Metadata = {
  title: "B2B LeadBazz | High-Quality B2B Lead Generation Services",
  description:
    "Get verified B2B leads with a 99% accuracy guarantee. We provide hand-picked leads based on industry, company size, location, and technology usage.",
  keywords: [
    "B2B leads",
    "lead generation",
    "business leads",
    "sales leads",
    "prospecting",
    "data scraping",
    "LinkedIn leads",
  ],
  openGraph: {
    title: "B2B LeadBazz | Get High-Quality Business Leads",
    description:
      "Find decision-makers with our B2B lead generation service. Guaranteed 99% accuracy for better conversions.",
    url: "https://b2bleadbazz.com",
    siteName: "B2B LeadBazz",
    images: [
      {
        url: "/images/lead-generation-banner.jpg",
        width: 1200,
        height: 630,
        alt: "B2B Lead Generation Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B LeadBazz | Get High-Quality Business Leads",
    description:
      "Get verified B2B leads with high accuracy. Boost your sales with our premium lead generation service.",
    images: ["/images/twitter-leads-preview.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "B2B LeadBazz",
      url: "https://b2bleadbazz.com",
      logo: "https://b2bleadbazz.com/logo.png",
      description:
        "We provide high-quality B2B leads with a 99% accuracy guarantee. Find decision-makers in any industry.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801732852745",
        contactType: "customer service",
      },
    }),
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={theme}>
      <html lang="en" className="scroll-smooth">
        <head>
          <meta name="robots" content="index, follow" />
          <meta name="author" content="B2B LeadBazz" />
          <link rel="canonical" href="https://yourwebsite.com" />
        </head>
        <body className={`${poppins.className} antialiased relative`}>
          <AntdRegistry>
            <Toaster />
            <Suspense fallback={<Loading />}>
              <Header />
              <BookCall />
              {children}
              <Footer />
            </Suspense>
          </AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
