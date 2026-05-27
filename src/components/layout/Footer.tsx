import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-12 md:h-18 p-4 lg:p-15 xl:p-30 text-rose-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        NextBite
      </Link>
      <p className="uppercase">© All rights reserved</p>
    </div>
  );
}
