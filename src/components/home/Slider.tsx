"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    text: "always fresh & always crispy & always hot",
    image: "/slide-1.png",
  },
  {
    id: 2,
    text: "we deliver your order wherever you are in Delhi NCR",
    image: "/slide-2.png",
  },
  {
    id: 3,
    text: "the best pizza to share with your family",
    image: "/slide-3.png",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 text-rose-500 font-bold">
        <h1 className="text-5xl uppercase text-center p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].text}
        </h1>
        <button className="bg-rose-500 text-white rounded-md py-4 px-8">
          Order Now
        </button>
      </div>

      {/* Image Container */}
      <div className="flex-1 w-full relative">
        <Image
          src={data[currentSlide].image}
          alt="Slider Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
