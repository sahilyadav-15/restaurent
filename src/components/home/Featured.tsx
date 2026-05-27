import { featuredProducts } from "@/data";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-auto text-rose-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 gap-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/* Text container */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center hover:bg-fuchsia-50 transition-all duration-300">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-lg font-bold">123</span>
              <button className="bg-rose-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
