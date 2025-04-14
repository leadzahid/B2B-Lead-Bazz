"use client";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceType: string;
  leadQuantity: number;
  workDetails: string;
};

const servicePrices: Record<string, number> = {
  free: 0,
  "B2B Leads": 0.25,
  "Ecommerce Lead": 0.3,
  "Influencer Lead": 0.2,
  Others: 0.2,
};

const initialFormdata = {
  fullName: "",
  phoneNumber: "",
  email: "",
  serviceType: "free",
  leadQuantity: 0,
  workDetails: "",
};
export default function LeadOrderForm() {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState<FormData>(initialFormdata);

  const pricePerLead = servicePrices[formData.serviceType] || 0;
  const totalPrice = (formData.leadQuantity * pricePerLead).toFixed(2);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "leadQuantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const response = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, totalPrice }),
        });

        if (response.ok) {
          toast.success("Order place successfully!");
          setFormData(initialFormdata);
        } else {
          toast.error("Failed to place order. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    });
  };

  return (
    <div
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg"
      style={{ boxShadow: "0px 0px 44px 1px rgba(232,232,232,1)" }}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            required
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-gray-700 font-medium"
              htmlFor="phoneNumber"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label
            className="block text-gray-700 font-medium"
            htmlFor="serviceType"
          >
            Service Type <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            required
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
          >
            {Object.keys(servicePrices).map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Leads */}
        <div>
          <label
            className="block text-gray-700 font-medium"
            htmlFor="leadQuantity"
          >
            Number of Leads <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="leadQuantity"
            value={formData.leadQuantity}
            required
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
        </div>

        {/* Price Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
          <div>
            <h3 className="text-gray-700 font-semibold">Price per Lead</h3>
            <p className="text-purple-700 font-bold">
              ${pricePerLead.toFixed(2)}
            </p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Total Price :</h3>
            <p className="text-purple-700 font-bold">${totalPrice}</p>
          </div>
        </div>

        {/* Payment Notice */}
        <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm">
          <p>
            Apologies, our payment gateway is currently under maintenance. For
            assistance or alternative payment options, please contact us.
          </p>
        </div>

        {/* Work Details */}
        <div>
          <label
            className="block text-gray-700 font-medium"
            htmlFor="workDetails"
          >
            Work Details <span className="text-red-500">*</span>
          </label>
          <textarea
            name="workDetails"
            value={formData.workDetails}
            required
            onChange={handleChange}
            placeholder="Enter additional work details..."
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 h-28"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition-all"
        >
          {isPending ? "Processing Order..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
}
