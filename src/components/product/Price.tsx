"use client";

import { useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ price, id, options }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const amount =
    quantity * (options ? price + options[selected].additionalPrice : price);

  return (
    <div className="flex flex-col gap-4">
      {/* <div className=""> */}
      <h2 className="text-2xl font-bold">₹{amount.toFixed(2)}</h2>

      {/* Option Container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-24 p-2 ring-1 ring-rose-400 rounded-md"
            style={{
              background: selected === index ? "rgb(251, 113, 133)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and Cart Button Container */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-rose-500">
          <span>Quantity</span>

          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Cart Button */}
        <button className="uppercase w-56 bg-rose-500 text-white p-3 ring-1 ring-rose-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
