import { Suspense } from "react";
import Loading from "../components/Loading";
import Hero from "../components/ui/Hero";
import WhyHireUsCom from "../components/WhyHireUsCom";

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
