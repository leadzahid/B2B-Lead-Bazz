import AboutServices from "@/components/HomePage/AboutServices";
import Reviews from "@/components/HomePage/ClientReviews";
import Contact from "@/components/HomePage/Contact";
import Count from "@/components/HomePage/Count";
import HeroSection from "@/components/HomePage/HeroSection";
import Services from "@/components/HomePage/Services";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <Services />
        <AboutServices />
        <Count />
        <Reviews />
        <Contact />
      </Suspense>
    </>
  );
}
