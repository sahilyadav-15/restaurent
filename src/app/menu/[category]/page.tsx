import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <div className="flex text-rose-500 flex-wrap">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full h-[60vh] border-r-2 border-b-2 border-rose-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* Text Container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">₹{item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-rose-500 text-white p-2 rounded-md">
              Add to card
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
