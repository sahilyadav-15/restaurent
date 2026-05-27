import Image from "next/image";

export default function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white font-bold text-5xl xl:text-6xl">
          Delicious burger and french fries
        </h1>
        <p className="text-white xl:text-xl">
          Savor the flavor of our freshly made meals delivered fast.
        </p>
        <button className="bg-rose-500 text-white py-3 px-6 rounded-md">
          Order now
        </button>
      </div>

      {/* Image Container */}
      <div className="flex-1 w-full relative">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
