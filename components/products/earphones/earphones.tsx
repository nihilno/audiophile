import SectionTitle from "@/components/global/section-title";
import ProductCard from "@/components/products/product-card";
import { padding } from "@/lib/constants";
import { earphones } from "@/lib/products";
import { cn } from "@/lib/utils";

function Earphones() {
  return (
    <section className="mb-48">
      <SectionTitle>Earphones</SectionTitle>
      <div className={cn("mx-auto mb-48 max-w-480 space-y-32", padding)}>
        {earphones.map((item) => (
          <ProductCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Earphones;
