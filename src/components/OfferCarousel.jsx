import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    title: "🎉 Flat 20% OFF on Business Cards!",
    subtitle: "Premium quality • Fast delivery • Matte & Gloss available",
    button: "Grab Offer",
  },
  {
    title: "📘 Special Discount on Brochure Printing!",
    subtitle: "Tri-fold • Bi-fold • Custom Sizes Available",
    button: "Order Now",
  },
  {
    title: "🎁 Gift Cards – Custom Designs Available!",
    subtitle: "High-quality prints • Best rates • Modern templates",
    button: "Contact Us",
  },
];

export default function OfferCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <div
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
          text-white py-4 px-6 rounded-xl shadow-lg transition-all duration-700"
          key={index}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
            {offers[index].title}
          </h2>

          <p className="mt-2 text-sm md:text-base font-medium">
            {offers[index].subtitle}
          </p>

          <Link
            to="/contact"
            className="mt-4 inline-block bg-white text-red-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            {offers[index].button}
          </Link>
        </div>

      </div>
    </section>
  );
}
