import Image from "next/image";

export default function Cart() {
  function singleProduct() {
    return (
      <div className="flex items-center justify-between mb-4">
        <Image src="/temporary/p1.png" alt="" width={100} height={100} />
        <div className="">
          <h1 className="uppercase text-lg font-bold">Title</h1>
          <span>Size</span>
        </div>
        <h2 className="font-bold">₹ Price</h2>
        <span className="cursor-pointer">X</span>
      </div>
    );
  }

  function priceMenu(name: string, price: string | number) {
    return (
      <div className="flex justify-between">
        <span>{name}</span>
        <span
          className={`${price === "FREE!" && "text-green-500"} ${name.includes("Total") && "font-bold"}`}
        >
          {typeof price === "number" ? "₹" : ""}
          {price}
        </span>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-rose-500">
      {/* Product Container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-auto lg:overflow-y-visible lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-15 xl:p-30">
        {/* Single Item */}
        {singleProduct()}
        {singleProduct()}
        {singleProduct()}
      </div>

      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-15 xl:p-30 2xl:text-lg 2xl:gap-6">
        {priceMenu("Subtotal (3 items)", 81)}
        {priceMenu("Service cost", 0)}
        {priceMenu("Delivery Cost", "FREE!")}

        <hr className="my-2" />

        {priceMenu("Total(Incl. GST)", 81)}

        <button className="bg-rose-500 text-white p-3 uppercase rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
}
