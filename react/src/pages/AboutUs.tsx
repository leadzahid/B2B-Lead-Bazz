import { Suspense } from "react";
import AboutAgency from "../components/AboutPage/AboutAgency";
import Loading from "../components/Loading";
import Hero from "../components/ui/Hero";

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
