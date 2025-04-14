import { Suspense } from "react";
import AboutServices from "../components/HomePage/AboutServices";
import Reviews from "../components/HomePage/ClientReviews";
import Contact from "../components/HomePage/Contact";
import Count from "../components/HomePage/Count";
import HeroSection from "../components/HomePage/HeroSection";
import Services from "../components/HomePage/Services";
import Loading from "../components/Loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HeroSection />
      <Services />
      <AboutServices />
      <Count />
      <Reviews />
      <Contact />
    </Suspense>
  );
};

export default Home;
