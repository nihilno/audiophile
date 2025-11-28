import Categories from "@/components/categories/categories";
import Info from "@/components/info/info";
import Speakers from "@/components/products/speakers/speakers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
};

export default function SpeakersPage() {
  return (
    <section className="scroll-mt-[90px]">
      <Speakers />
      <div className="mx-auto max-w-480">
        <Categories />
        <Info />
      </div>
    </section>
  );
}
