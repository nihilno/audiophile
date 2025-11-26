import SectionTitle from "@/components/global/section-title";
import ProductCard from "@/components/products/product-card";
import { padding } from "@/lib/constants";
import { headphones } from "@/lib/products";
import { cn } from "@/lib/utils";

function Headphones() {
  return (
    <section className="mb-48">
      <SectionTitle>Headphones</SectionTitle>
      <div className={cn("mx-auto mb-48 max-w-480 space-y-32", padding)}>
        {headphones.map((item) => (
          <ProductCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Headphones;
