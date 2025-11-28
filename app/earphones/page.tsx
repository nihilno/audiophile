import Categories from "@/components/categories/categories";
import Info from "@/components/info/info";
import Earphones from "@/components/products/earphones/earphones";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earphones",
};

export default function EarphonesPage() {
  return (
    <section className="scroll-mt-[90px]">
      <Earphones />
      <div className="mx-auto max-w-480">
        <Categories />
        <Info />
      </div>
    </section>
  );
}
