import Categories from "@/components/categories/categories";
import Info from "@/components/info/info";
import Headphones from "@/components/products/headphones/headphones";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headphones",
};

export default function HeadphonesPage() {
  return (
    <section className="scroll-mt-[90px]">
      <Headphones />
      <div className="mx-auto max-w-480">
        <Categories />
        <Info />
      </div>
    </section>
  );
}
