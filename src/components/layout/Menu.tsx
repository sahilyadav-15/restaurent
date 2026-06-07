"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

export default function Menu({
  links,
}: {
  links: {
    id: number;
    title: string;
    url: string;
  }[];
}) {
  const [open, setOpen] = useState(false);

  // TEMP
  const user: boolean = true;
  return (
    <div>
      <Image
        src={!open ? "/open.png" : "/close.png"}
        alt={!open ? "Open menu" : "Close menu"}
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="bg-rose-500 text-white absolute left-0 top-24 w-full g-10 opacity-95 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
