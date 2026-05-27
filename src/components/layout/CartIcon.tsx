import Image from "next/image";

export default function CartIcon() {
  return (
    <div className="flex items-center gap-4 md:gap-2">
      <div className="w-8 h-8 relative md:w-5 md:h-5">
        <Image src="/cart.png" alt="Cart" fill sizes="32px" />
      </div>

      <span>Cart (3)</span>
    </div>
  );
}
