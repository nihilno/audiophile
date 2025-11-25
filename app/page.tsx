import Categories from "@/components/categories/categories";
import Featured from "@/components/featured/featured";
import Info from "@/components/info/info";
import Hero from "@/components/ui/hero";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <Categories />
      <Featured />
      <Info />
    </section>
  );
}
