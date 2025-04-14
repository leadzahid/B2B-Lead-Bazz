import { Suspense } from "react";
import Loading from "../components/Loading";
import LeadOrderForm from "../components/OrderForm";

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
