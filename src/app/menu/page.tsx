import { menu } from "@/data";
import Link from "next/link";

export default function Menu() {
  menu.map((cat) => console.log(cat.color));
  return (
    <div className="p-4 lg:px-15 xl:px-30 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((cat) => (
        <Link
          key={cat.id}
          href={`/menu/${cat.slug}`}
          className="w-full h-1/3 bg-cover p-6 md:h-1/2"
          style={{ backgroundImage: `url(${cat.img})` }}
        >
          <div className="w-1/2" style={{ color: cat.color }}>
            <h1 className="uppercase font-bold text-3xl">{cat.title}</h1>
            <p className="text-sm my-8">{cat.desc}</p>
            <button
              className="hidden 2xl:block py-2 px-4 rounded-md"
              style={{
                backgroundColor: cat.color,
                color: cat.color === "black" ? "white" : "rgb(244, 63, 94)",
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
