import Featured from "@/components/home/Featured";
import Offer from "@/components/home/Offer";
import Slider from "@/components/home/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
