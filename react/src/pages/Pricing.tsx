import { Suspense } from "react";
import Loading from "../components/Loading";
import ExtraCard from "../components/PricingPage/ExtraCard";
import PricingCard from "../components/PricingPage/PricingCard";
import Hero from "../components/ui/Hero";

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
