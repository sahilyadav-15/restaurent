import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

export default function Navbar() {
  const user = false;

  return (
    <div className="h-12 p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-18 lg:px-15 xl:px-30">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">NextBite</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu links={links} />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-red-300 px-1 rounded-sm">
          <Image src="/phone.png" alt="Phone" height={20} width={20} />
          <span>1234 567 890</span>
        </div>

        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders"></Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}
