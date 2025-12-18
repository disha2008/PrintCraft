import { useState, useEffect } from "react";

export default function Slider() {
  const slides = [
    `${process.env.PUBLIC_URL}/assets/hero-sample.jpg`,
    `${process.env.PUBLIC_URL}/assets/brochure.png`,
    `${process.env.PUBLIC_URL}/assets/gift-card.png`,
    `${process.env.PUBLIC_URL}/assets/cards.png`,
    `${process.env.PUBLIC_URL}/assets/card2.png`,
    `${process.env.PUBLIC_URL}/assets/slider1.png`,
    `${process.env.PUBLIC_URL}/assets/slider3.png`,
    `${process.env.PUBLIC_URL}/assets/slider9.png`,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-xl">

      {/* Image */}
      <img
        src={slides[index]}
        alt="Slide"
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-[#007A3D]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}