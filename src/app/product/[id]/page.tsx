import { singleProduct } from "@/data";
import Image from "next/image";

export default function SingleProductPage() {
  console.log(singleProduct);
  return (
    <div className="p-4 lg:p-15 xl:p-30 h-screen flex flex-col md:flex-row justify-around text-rose-500">
      {/* Image Container */}
      {singleProduct.img && (
        <div className="relative">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            fill
            className="object-contain"
          />
        </div>
      )}
      {/* Text Container */}
      <div className="">
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
      </div>
    </div>
  );
}
