import Categories from "@/components/categories/categories";
import Featured from "@/components/featured/featured";
import Info from "@/components/info/info";
import Hero from "@/components/ui/hero";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className="mx-auto max-w-480">
        <Categories />
        <Featured />
        <Info />
      </div>
    </section>
  );
}
